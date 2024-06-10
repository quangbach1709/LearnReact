import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function AddEmp(props) {
    let val = {}
    const handleAddEmp = () => {
        val.name = document.getElementById('f-name').value;
        val.email = document.getElementById('email').value;
        val.address = document.getElementById('address').value;
        val.phone = document.getElementById('phone').value;
        props.appEmp(val)
    }

    return (

        <div className="w-50 mx-auto border" id="formAdd">
            <div className="d-flex justify-content-between">
                <h3>Add Employee</h3>
                <i className="bi bi-x" id="exitForm"></i>
            </div>

            <div>
                <p>Name</p>
                <input className="w-75" id="f-name" type="text"/>
                <p>Email</p>
                <input className="w-75" id="email" type="email"/>
                <p>Address</p>
                <input className="w-75" id="address" type="text"/>
                <p>Phone</p>
                <input className="w-75" id="phone" type="number"/>
            </div>
            <div className="d-flex justify-content-end mt-5">
                <button className="mx-3">Cancel</button>
                <button className="bg-warning-subtle px-3" onClick={handleAddEmp}>Add</button>
            </div>

        </div>

    )
}

export default AddEmp