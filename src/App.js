import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
// import ToDuList from "./component/ToDuList";
import appToDo from "./component/ToDolist/AppToDo";
import ToDolist from "./component/ToDolist/ToDolist";
import Button from "./component/ToDolist/Button";
import Effect from "./component/F8/Effect";
import ChatApp from "./component/F8/ChatApp";

function App() {
    // const [jobs, setJob] = useState([]);
    const [show, setShow] = useState(false)
    return (
        <div>
            {/*< h1>ToDoList</h1>*/}
            {/*<Button text={'Add'}/>*/}
            {/*<ToDolist/>*/}
            <button onClick={() => {
                setShow(!show)
            }}>Toggle
            </button>
            {/*{show && <Effect/>}*/}
            {show && <ChatApp/>}
        </div>
    )
}

export default App;
