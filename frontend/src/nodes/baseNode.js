
import { Handle } from 'reactflow';

export const BaseNode = ({ id, handles = [], children, title = '' }) => {
    return (
        <div className='border border-black rounded-md '>
            <div className='text-center bg-slate-300 rounded-t-md p-0.5 mb-1'>
                <span className='text-xl font-semibold '>{title}</span>
            </div>
            <div className='p-2'>
                <div>{children}</div>
                {handles.map((handle) => (
                    <Handle
                        key={handle.id}
                        type={handle.type}
                        position={handle.position}
                        id={`${id}-${handle.id}`}
                        style={{ top: handle.top, height: '10px', width: '10px', borderRadius: '50' }}
                    />
                ))}
            </div>
        </div>
    );
};
