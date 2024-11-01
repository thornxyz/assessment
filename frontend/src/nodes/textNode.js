import { useState, useRef, useEffect } from 'react';
import { BaseNode } from './baseNode';
import { Handle, Position, useUpdateNodeInternals } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{text}} ');
  const [variables, setVariables] = useState([]);
  const textRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();

  const variableRegex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

  useEffect(() => {
    updateNodeInternals(id);
  }, [variables, id, updateNodeInternals]);

  const handleInput = (e) => {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = `${e.target.scrollHeight}px`;
  };

  const handleTextChange = (e) => {
    const textValue = e.target.value;
    setCurrText(textValue);

    const foundVariables = [...textValue.matchAll(variableRegex)].map((match) => match[1]);
    setVariables(foundVariables);
  };

  const variableHandles = variables.map((variable, index) => (
    <Handle
      key={`${id}-${variable}-${index}`}
      type="target"
      position={Position.Left}
      id={`${id}-${variable}-${index}`}
      style={{ top: `${(index + 1) * 30}px`, height: '10px', width: '10px', borderRadius: '50%' }}
    />
  ));

  return (
    <BaseNode id={id} title="Text" handles={[{ id: 'output', type: 'source', position: Position.Right }]}>
      {variableHandles}
      <div className='flex items-center gap-1'>
        <span className='font-medium'>Text: </span>
        <textarea
          ref={textRef}
          placeholder='Enter text'
          rows={1}
          value={currText}
          onChange={handleTextChange}
          onInput={handleInput}
          className='m-1 resize-none p-1 border border-gray-300 rounded-sm overflow-hidden'
          style={{ width: '200px' }}
        />
      </div>
    </BaseNode>
  );
};
