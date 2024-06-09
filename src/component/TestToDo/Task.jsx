import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Button from "../ToDolist/Button";


function Task(props) {
    return (
        <div>
            <li className="border rounded row m-2">
                <div className="col">
                    <p className="text-secondary">Task</p>
                    <p>{props.nameTask}</p>
                </div>
                <div className="col">
                    <p className="text-secondary">Priority</p>
                    <p className="text-danger">{props.priority}</p>
                </div>
                <div className="col align-self-center d-flex p-3">
                    <p className="bg-secondary rounded text-light">{props.status}</p>
                </div>
                <div className="col align-self-center">
                    <i className="bi bi-circle "></i>
                </div>
                <div className="col d-flex align-self-center">
                    {/*<i className="bi bi-pencil-square fs-2 text "></i>*/}
                    {/*<i className="bi bi-trash-fill fs-2 text text-danger"></i>*/}
                    <Button/>
                    <Button/>
                </div>
            </li>
        </div>
    )
}

export default Task