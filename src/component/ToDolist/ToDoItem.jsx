import React from "react";
import Button from "./Button";

function ToDoItem() {
    const edit = () => {
        console.log('edit')

    }
    const xoa = () => {
        console.log('xoa')

    }
    return (
        <div>
            <p>Note</p>
            <Button text={'del'} xoa={xoa}/>
            <Button text={'edit'} edit={edit}/>
        </div>
    )
}

export default ToDoItem