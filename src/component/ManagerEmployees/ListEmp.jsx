import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Employees from "./Employees";

function ListEmp(props) {

    return (
        <>
            {props.Emps.map((item, index) => {
                    return (<Employees key={index} name={item.name} email={item.email} address={item.address}
                                       phone={item.phone}/>)
                }
            )}
        </>
    )
}

export default ListEmp;