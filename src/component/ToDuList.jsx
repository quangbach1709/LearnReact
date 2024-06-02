import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'

function ToDuList() {

    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs'))
        if (storageJobs === null) {
            return []
        } else {
            return storageJobs
        }
    })
    const [job, setJob] = useState('')
    const handleSubmit = () => {
        setJobs(prevState => {
            const newJob = [...prevState, job]
            // Lu du lieu vao localStorage
            const jsonJob = JSON.stringify(newJob)
            localStorage.setItem('jobs', jsonJob)
            return newJob
        })
        setJob('')
    }
    return (
        <div className={'position-absolute top-50 start-50 translate-middle'}>
            <h1 className={'text-center'}>To Do List</h1>
            <input
                type={"text"} value={job}
                onChange={event => setJob(event.target.value)}/>
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    )
}

export default ToDuList