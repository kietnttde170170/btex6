import React, { useState } from 'react';


function TodoApp() {
    const [job, setJob] = useState("");
    const [jobs, setJobs] = useState([])
    const handleAddJob = () => {
        if (job === "") {
            return;
        }

        setJobs(prev => [...prev, job])

        setJob("");
    };

    const handleDeleteJob = (index) => {
        const updatedJobs = [...jobs];
        updatedJobs.splice(index, 1);
        setJobs(updatedJobs);
    };


    return (
        <div className="App" style={{ padding: 20 }}>
            <div>
                <input value={job} onChange={(e) => setJob(e.target.value)} />
                <button onClick={handleAddJob}>Add</button>
                <ul>
                    {jobs.map((job, index) => (
                        <li key={index}>
                            {job}
                            <button onClick={() => handleDeleteJob(index)}>Delete</button>
                        </li>

                    ))}
                </ul>
            </div>
        </div>
    );
}


export default TodoApp;
