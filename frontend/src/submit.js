// submit.js

const submitPipeline = async (nodes, edges) => {
    try {
        const response = await fetch('http://localhost:8000/pipelines/parse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nodes, edges }),
        });

        if (!response.ok) {
            throw new Error('Error Submitting');
        }

        const data = await response.json();

        alert(
            `Number of Nodes: ${data.num_nodes}\nNumber of Edges: ${data.num_edges}\nIs DAG: ${data.is_dag}`
        );
    } catch (error) {
        console.error('Error submitting pipeline:', error);
        alert('Failed to submit the pipeline.');
    }
};

export const SubmitButton = ({ nodes, edges }) => {
    return (
        <div className='flex items-center justify-center'>
            <button
                type="submit"
                onClick={() => submitPipeline(nodes, edges)}
                style={{ width: '180px', height: '60px' }}
                className='bg-slate-600 text-2xl text-white font-semibold m-3 py-2 px-4 rounded-md hover:bg-slate-800'
            >
                Submit
            </button>
        </div>
    );
}


