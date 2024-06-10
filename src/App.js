import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import ListEmp from "./component/ManagerEmployees/ListEmp";
import AddEmp from "./component/ManagerEmployees/AddEmp";

// BT ToDoList
// function App() {
//     useEffect(() => {
//         fetchJobs()
//     }, []);
//     const fetchJobs = () => {
//         fetch('data-task-list.json')
//             .then(res => res.json())
//             .then(data => {
//                 setJobs(data)
//             })
//     }
//     const [jobs, setJobs] = useState([])
//
//     const [showAddTask, setShowAddTask] = useState(false)
//
//     const addTask = (task) => {
//         setJobs([...jobs, task])
//         console.log(jobs)
//
//     }
//     return (
//         <div>
//             <div className={'container border'}>
//                 <header className="d-flex justify-content-between">
//                     <h1>Task List</h1>
//                     <h3 onClick={() => {
//                         setShowAddTask(!showAddTask)
//
//                     }} className="add-task bg-primary text-light rounded align-self-center p-1"
//                         style={{cursor: "pointer"}}>
//                         <i className="bi bi-file-plus "></i> App Task
//                     </h3>
//                 </header>
//                 <div className="align-content-around">
//                     <ListTask jobs={jobs}/>
//                 </div>
//                 {
//                     showAddTask && <AddTask addTask={addTask}/>
//                     // showAddTask && console.log('showAddTask')
//                 }
//             </div>
//         </div>
//     )
// }


function App() {

    useEffect(() => {
        fetchEmps()
    }, []);
    const [Emps, setEmps] = useState([])
    const [show, setShow] = useState(false)
    const fetchEmps = () => {
        fetch('data-manage-elm.json')
            .then(res => res.json())
            .then(data => {
                setEmps(data)
            })

    }
    const handleAdd = (val) => {
        setEmps([...Emps, val])
    }


    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">TLU</a>
                        <button aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation"
                                className="navbar-toggler"
                                data-bs-target="#navbarTogglerDemo02" data-bs-toggle="collapse" type="button">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id={"navbarTogglerDemo02"}>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a aria-current="page" className="nav-link active" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Employees</a>
                                </li>

                            </ul>
                            <form className="d-flex" role="search">
                                <input aria-label="Search" className="form-control me-2" placeholder="Search"
                                       type="search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <div style={{height: "20px", background: "linear-gradient(180deg,gray,white)"}}></div>
            </header>

            <div className="container">
                <div className="content d-flex justify-content-between">
                    <h2>Manage <span>Employees</span></h2>
                    <div className="d-flex">
                        <p className="mx-3"><i className="bi bi-dash-circle-fill"></i>Delete</p>
                        <p onClick={() => {
                            setShow(!show)
                        }} id={"addElm"} style={{cursor: "pointer"}}><i className="bi bi-plus-circle"></i>Add
                            New
                            Employee
                        </p>
                    </div>
                </div>
                <div>
                    <ListEmp Emps={Emps}/>
                </div>
                <footer>
                    <div className="d-flex justify-content-between">
                        <p>Showing 5 out of 25 entries</p>
                        <div className="d-flex justify-content-around">
                            <p className="px-3">Previous</p>
                            <p className="px-3">1</p>
                            <p className="px-3">2</p>
                            <p className="px-3" style={{"background-color": "gray", color: "white"}}>3</p>
                            <p className="px-3">4</p>
                            <p className="px-3">5</p>
                            <p className="px-3">Next</p></div>
                    </div>
                </footer>
                {
                    show && <AddEmp appEmp={handleAdd}/>
                }
            </div>

        </div>
    )
}

export default App;