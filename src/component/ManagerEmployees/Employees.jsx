import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'


function Employees(props) {
    return (

        <ul className="row" style={{listStyle: 'none'}}>
            <li className="col"><input type="checkbox"/></li>
            <li className="col">{props.name}</li>
            <li className="col">{props.email}</li>
            <li className="col">{props.address}</li>
            <li className="col">{props.phone}</li>
            <li className="col">
                <i className="bi bi-pencil-square"></i>
                <i className="bi bi-trash"></i>
            </li>
        </ul>

    )
}

export default Employees;