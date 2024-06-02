import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import config from "bootstrap/js/src/util/config";

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
                className={'border border-black'}
                type={"text"} value={job}
                onChange={event => setJob(event.target.value)}/>
            <button onClick={handleSubmit} className={'btn btn-info'}>Add</button>
            <ul className={''}>
                {jobs.map((job, index) => (
                        <li key={index}>
                            {job}

                        </li>

                    )
                )}


            </ul>
        </div>
    )
}

export default ToDuList