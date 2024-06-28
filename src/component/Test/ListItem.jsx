import React from "react";
import {useState,useEffect} from "react";
import Item from "./Item";
function ListItem(props){
    return(
        <ul>
            <li className={'row'}>
                <div className={'col'}>
                    <p>Hàng động</p>
                </div>
                <div className={'col'}>
                    <p>STT</p>
                </div>
                <div className={'col'}>
                    <p>Người Quản lý</p>
                </div>
                <div className={'col'}>
                    <p>Địa Chỉ</p>
                </div>
                <div className={'col'}>
                    <p>Lần cập nhật cuối</p>
                </div>
            </li>
            {props.datas.map((item,index)=>{
return(<Item key ={index} stt={index} name={item.name} address={item.address} update={item.update}/>)
            })}
        </ul>
    )
}

export default ListItem
