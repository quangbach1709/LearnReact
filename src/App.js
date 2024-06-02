import React, {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.css'

import Effect from "./component/Effect";
import {flushSync} from "react-dom";

function App() {
    const [show, setShow] = useState(false)
    return (
        <div>
            {/*<UseState/>*/}
            {/*<ToDuList/>*/}
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Effect/>}

        </div>
    )
}

export default App