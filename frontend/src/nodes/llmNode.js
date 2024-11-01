
import { BaseNode } from './baseNode';
import { Position } from 'reactflow';

export const LLMNode = ({ id }) => {
  const handles = [
    { id: 'system', type: 'target', position: Position.Left, top: `${100 / 3}%` },
    { id: 'prompt', type: 'target', position: Position.Left, top: `${200 / 3}%` },
    { id: 'response', type: 'source', position: Position.Right },
  ];

  return (
    <BaseNode id={id} title="LLM" handles={handles}>
      <span className='font-medium'>This is a LLM.</span>
    </BaseNode>
  );
};
