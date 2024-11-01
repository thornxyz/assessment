
import { useState } from 'react';
import { BaseNode } from './baseNode';
import { Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setInputType(e.target.value);

  const handles = [{ id: 'value', type: 'source', position: Position.Right }];

  return (
    <BaseNode id={id} title="Input" handles={handles}>
      <div className='flex items-center justify-evenly'>
        <span className='font-medium'>Name:</span>
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
          className='border border-gray-300 rounded-sm p-1 m-1 w-2/3'
        />
      </div>
      <div className='flex items-center justify-evenly'>
        <span className='font-medium'>Type:</span>
        <select value={inputType} onChange={handleTypeChange} className='border border-gray-300 rounded-sm p-1 m-1 w-1/2'>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </div>
    </BaseNode>
  );
};
