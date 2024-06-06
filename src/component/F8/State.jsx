import React, {useState} from "react";

//Xu ly voi Radio
// function UseState() {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//
//     const handleSubit = () => {
//         console.log({name, email})
//     }
//     return (
//         <div>
//             <input value={name} onChange={e => setName(e.target.value)}/>
//
//             <input value={email} onChange={e => setEmail(e.target.value)}/>
//             <button onClick={handleSubit}>Register</button>
//
//         </div>
//     )
// }

// Xu ly voi checkbox
const courses = [
    {
        id: 1,
        name: 'HTML,CSS'
    },
    {
        id: 2,
        name: 'JS'
    },
    {
        id: 3,
        name: 'ReactJS'
    }
]

function State() {
    const [checked, setCheck] = useState([])
    console.log(checked)
    const handleCheck = (id) => {
        setCheck(perv => {
            const isChecked = checked.includes(id)
            if (isChecked) {
                return checked.filter(item => item !== id)
            } else {
                return [...perv, id]
            }
        })
    }
    return (
        <div>
            {courses.map(index => (
                <div key={index.id}>
                    <input type={"checkbox"}
                           checked={checked.includes(index.id)}
                           onChange={() => handleCheck(index.id)}/>
                    {index.name}
                </div>
            ))}
            <button>Register</button>

        </div>
    )
}

//VD dem so voi useState
// const order = [100, 200, 300]
//
// function UseState() {
//     const [counter, setCounter] = useState(() => {
//         // ap dung callback de tranh thuc hien tinh tong nhieu lan
//         return order.reduce((total, cur) => total + cur)
//
//     })
//     const handleIncrease = () => {
//         // ap dung callback
//         setCounter(prevState => prevState + 1)
//     }
//     return (
//         <div>
//             <h1>{counter}</h1>
//             <button onClick={handleIncrease}>Increase</button>
//         </div>
//     )
// }

export default State