import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle'
// import './App.css'
import ListEmp from "./component/ManagerEmployees/ListEmp";
import AddEmp from "./component/ManagerEmployees/AddEmp";
import ListEmployees from "./component/Test/ListEmployees";

import ListItem from "./component/Test/ListItem";

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

// BT ManageEmployees
// function App() {
//
//     useEffect(() => {
//         fetchEmps()
//     }, []);
//     const [Emps, setEmps] = useState([])
//     const [show, setShow] = useState(false)
//     const fetchEmps = () => {
//         fetch('data-manage-elm.json')
//             .then(res => res.json())
//             .then(data => {
//                 setEmps(data)
//             })
//
//     }
//     const handleAdd = (val) => {
//         setEmps([...Emps, val])
//     }
//
//
//     return (
//         <div>
//             <header>
//                 <nav className="navbar navbar-expand-lg bg-body-tertiary">
//                     <div className="container-fluid">
//                         <a className="navbar-brand" href="#">TLU</a>
//                         <button aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation"
//                                 className="navbar-toggler"
//                                 data-bs-target="#navbarTogglerDemo02" data-bs-toggle="collapse" type="button">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id={"navbarTogglerDemo02"}>
//                             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                                 <li className="nav-item">
//                                     <a aria-current="page" className="nav-link active" href="#">Home</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#">Employees</a>
//                                 </li>
//
//                             </ul>
//                             <form className="d-flex" role="search">
//                                 <input aria-label="Search" className="form-control me-2" placeholder="Search"
//                                        type="search"/>
//                                 <button className="btn btn-outline-success" type="submit">Search</button>
//                             </form>
//                         </div>
//                     </div>
//                 </nav>
//                 <div style={{height: "20px", background: "linear-gradient(180deg,gray,white)"}}></div>
//             </header>
//
//             <div className="container">
//                 <div className="content d-flex justify-content-between">
//                     <h2>Manage <span>Employees</span></h2>
//                     <div className="d-flex">
//                         <p className="mx-3"><i className="bi bi-dash-circle-fill"></i>Delete</p>
//                         <p onClick={() => {
//                             setShow(!show)
//                         }} id={"addElm"} style={{cursor: "pointer"}}><i className="bi bi-plus-circle"></i>Add
//                             New
//                             Employee
//                         </p>
//                     </div>
//                 </div>
//                 <div>
//                     <ListEmp Emps={Emps}/>
//                 </div>
//                 <footer>
//                     <div className="d-flex justify-content-between">
//                         <p>Showing 5 out of 25 entries</p>
//                         <div className="d-flex justify-content-around">
//                             <p className="px-3">Previous</p>
//                             <p className="px-3">1</p>
//                             <p className="px-3">2</p>
//                             <p className="px-3" style={{"background-color": "gray", color: "white"}}>3</p>
//                             <p className="px-3">4</p>
//                             <p className="px-3">5</p>
//                             <p className="px-3">Next</p></div>
//                     </div>
//                 </footer>
//                 {
//                     show && <AddEmp appEmp={handleAdd}/>
//                 }
//             </div>
//
//         </div>
//     )
// }

// Test
function App() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Thường đại học thủy lợi</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Trang chủ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Quản lý cửa hàng</a>
                                </li>


                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Tìm kiếm</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
            <main className={'container mt-2'}>
                <div className={'d-flex justify-content-around'}>
                    <div className={'d-flex'}>
                        <p className={'px-2'} data-bs-target="#exampleModal" data-bs-toggle="modal" id="add"><i
                            className={'bi bi-file-earmark-plus-fill'}></i> THÊM MỚI</p>
                        <p className={''}><i className={'bi bi-upload'}></i>XUẤT RA FILE <i
                            className={'bi bi-arrow-right'}></i></p>
                    </div>
                    <div>
                        <i className={'bi bi-arrow-right'}></i>
                        <input type={'text'}/>
                        <i className={'bi bi-search'}></i>
                    </div>
                    <div className={'d-flex'}>
                        <p className={'px-2'}>Kết Quả</p>
                        <input type={'number'}/>
                    </div>
                </div>
                <ul id={'list-item'}>
                    <ListItem datas={datas}/>
                </ul>
                <p>{datas.length} Ket qua phu hop</p>
            </main>
            <footer>
                <h3>
                    TRƯỜNG DAI HỌC THUY LOI
                </h3>
                <p>Địa chỉ: 175 Tay son dong da ha noi</p>
                <p>Địa thoai 0243852201 -Fax 0243563351</p>
                <p>Email: <a href="">phongcth@tlu.edu.vn</a></p>
            </footer>


            <div aria-hidden="true" aria-labelledby="exampleModalLabel" className="modal fade" id="exampleModal"
                 tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Them cua hang</h1>
                            <button aria-label="Close" className="btn-close" data-bs-dismiss="modal"
                                    type="button"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <p>Them nguoi quan ly</p>
                                <input className="w-75" id="name" type="text"/>
                                <p>Dia chi</p>
                                <input className="w-75" id="address" type="email"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal" type="button">Huy</button>
                            <button className="btn btn-primary" data-bs-dismiss="modal" type="button"
                                    onClick={handleAdd}>Them moi
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;