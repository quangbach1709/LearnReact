import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function AddTask(props) {
    let value = {}
    const handleClickAdd = () => {
        value.taskName = document.getElementById('input').value
        value.status = 'To do'
        props.addTask(value)
        console.log(value)
    }
    return (
        <div>
            <div className="form-input container border ">
                <nav className="d-flex justify-content-between">
                    <h3>App Task</h3>
                    <i className="bi bi-x fs-3" style={{cursor: "pointer"}}></i>
                </nav>
                <div style={{position: "relative"}}>
                    <p className="text-secondary">Task</p>
                    <input className="w-75 p-3 rounded " id={'input'} placeholder="Type your task here..." type="text"/>
                    <p className="text-secondary">Priority</p>
                    <div className="d-flex">
                        <button className="btn btn-danger m-2" type="button" onClick={() => {
                            value.priority = 'High'

                        }}>High
                        </button>
                        <button className="btn btn-warning m-2" type="button" onClick={() => {
                            value.priority = 'Medium'
                        }}>Medium
                        </button>
                        <button className="btn btn-success m-2" type="button" onClick={() => {
                            value.priority = 'Low'

                        }}>Low
                        </button>
                    </div>
                    <button className="btn btn-secondary add" style={{position: 'absolute', right: 0, bottom: 0}}
                            type="button" onClick={handleClickAdd}>Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddTask