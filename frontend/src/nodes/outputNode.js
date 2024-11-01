
import { useState } from 'react';
import { BaseNode } from './baseNode';
import { Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setOutputType(e.target.value);

  const handles = [{ id: 'value', type: 'target', position: Position.Left }];

  return (
    <BaseNode id={id} title="Output" handles={handles}>
      <div className='flex items-center justify-evenly'>
        <span className='font-medium'>Name: </span>
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
          className='border border-gray-300 rounded-sm m-1 p-1 w-2/3'
        />
      </div>
      <div className='flex items-center justify-evenly'>
        <span className='font-medium'>Type: </span>
        <select value={outputType} onChange={handleTypeChange} className='border border-gray-300 p-1 rounded-sm m-1 w-1/2'>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </div>
    </BaseNode>
  );
};
