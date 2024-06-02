import React from "react";
import UseState from "./component/UseState";
import toDuList from "./component/ToDuList";
import ToDuList from "./component/ToDuList";
import 'bootstrap/dist/css/bootstrap.css'

function App() {

    return (
        <div className={'container'}>
            {/*<UseState/>*/}
            <ToDuList/>
        </div>
    )
}

export default App