import React, {useEffect} from "react";


// 1 callback luon dc goi sau khi component mounted
function Effect() {
    useEffect(() => {
        console.log('bach dz')
    })
    return (
        <div>
            <h1>Hello anh em </h1>
        </div>
    )
}

export default Effect