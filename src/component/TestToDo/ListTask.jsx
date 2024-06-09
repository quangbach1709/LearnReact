import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Task from '../TestToDo/Task'

// const jsonData = `[
//                     {
//                         "taskName": "Go to Gym",
//                         "priority": "high",
//                         "status": "To do"
//                     },
//                     {
//                         "taskName": "Read a book",
//                         "priority": "Low",
//                         "status": "Done"
//                     },
//                     {
//                         "taskName": "Go to market",
//                         "priority": "Medium",
//                         "status": "In Progress"
//                     },
//                     {
//                         "taskName": "Watch a movie",
//                         "priority": "High",
//                         "status": "To do"
//                     },
//                     {
//                         "taskName": "Go to gym",
//                         "priority": "Low",
//                         "status": "Done"
//                     },
//                     {
//                         "taskName": "Cook food",
//                         "priority": "Medium",
//                         "status": "In Progress"
//                     },
//                     {
//                         "taskName": "Go to office",
//                         "priority": "High",
//                         "status": "To do"
//                     },
//                     {
//                         "taskName": "Go to school",
//                         "priority": "Low",
//                         "status": "Done"
//                     },
//                     {
//                         "taskName": "Go to college",
//                         "priority": "Medium",
//                         "status": "In Progress"
//                     },
//                     {
//                         "taskName": "Go to park",
//                         "priority": "High",
//                         "status": "To do"
//                     },
//                     {
//                         "taskName": "Go to temple",
//                         "priority": "Low",
//                         "status": "Done"
//                     },
//                     {
//                         "taskName": "Go to church",
//                         "priority": "Medium",
//                         "status": "In Progress"
//                     },
//                     {
//                         "taskName": "Go to mosque",
//                         "priority": "High",
//                         "status": "To do"
//                     },
//                     {
//                         "taskName": "Go to gurudwara",
//                         "priority": "Low",
//                         "status": "Done"
//                     },
//                     {
//                         "taskName": "Go to library",
//                         "priority": "Medium",
//                         "status": "In Progress"
//                     },
//                     {
//                         "taskName": "Go to beach",
//                         "priority": "High",
//                         "status": "To do"
//                     },
//                     {
//                         "taskName": "Go to hill station",
//                         "priority": "Low",
//                         "status": "Done"
//                     },
//                     {
//                         "taskName": "Go to waterfall",
//                         "priority": "Medium",
//                         "status": "In Progress"
//                     },
//                     {
//                         "taskName": "Go to river",
//                         "priority": "High",
//                         "status": "To do"
//                     },
//                     {
//                         "taskName": "Go to sea",
//                         "priority": "Low",
//                         "status": "Done"
//                     }
//                 ]`;

function ListTask(props) {


    return (
        <ul className="list-task">
            {
                props.jobs.map((job, index) => {
                    return (
                        <Task key={index} nameTask={job.taskName} priority={job.priority} status={job.status}/>
                    )
                })
            }
        </ul>
    )
}

export default ListTask