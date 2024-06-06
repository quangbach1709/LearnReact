import React from "react";

function Button(props) {
    return (
        <button onClick={() => {
            if (props.edit) {
                props.edit()
            } else if (props.xoa) {
                props.xoa()
            }
        }}>
            {props.text}
        </button>
    )
}


export default Button