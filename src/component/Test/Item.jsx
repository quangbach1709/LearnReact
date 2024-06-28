import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function Item(props){
    return(
        <li className={'row'}>
            <div className={'col'}>
                <p><i className={'bi bi-eye'}></i><i className={'bi bi-pen'}></i><i className={'bi bi-file-earmark-excel'}></i></p>
            </div>
            <div className={'col'}>
                {props.stt+1}
            </div>
            <div className={'col'}>
                {props.name}
            </div>
            <div className={'col'}>
                {props.address}
            </div>
            <div className={'col'}>
                {props.update}
            </div>
        </li>
    )
}
export default Item