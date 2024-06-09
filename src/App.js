// src/App.js
import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import ListTask from "./component/TestToDo/ListTask";
import AddTask from "./component/TestToDo/AddTask";

function App() {
    useEffect(() => {
        fetchJobs()
    }, []);
    const fetchJobs = () => {
        fetch('data-task-list.json')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }
    const [jobs, setJobs] = useState([])

    const [showAddTask, setShowAddTask] = useState(false)

    const addTask = (task) => {
        setJobs([...jobs, task])
        console.log(jobs)

    }
    return (
        <div>
            <div className={'container border'}>
                <header className="d-flex justify-content-between">
                    <h1>Task List</h1>
                    <h3 onClick={() => {
                        setShowAddTask(!showAddTask)

                    }} className="add-task bg-primary text-light rounded align-self-center p-1"
                        style={{cursor: "pointer"}}>
                        <i className="bi bi-file-plus "></i> App Task
                    </h3>
                </header>
                <div className="align-content-around">
                    <ListTask jobs={jobs}/>
                </div>
                {
                    showAddTask && <AddTask addTask={addTask}/>
                    // showAddTask && console.log('showAddTask')
                }
            </div>
        </div>
    )
}

export default App;