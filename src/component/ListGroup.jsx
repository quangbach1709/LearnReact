import React from "react";
import {useState} from "react";
import PropTypes from "prop-types";

ListGroup.proopTypes = {
    items: PropTypes.array.isRequired,
    heading: PropTypes.string.isRequired
}

function ListGroup({items, heading}) {
    // hook
    const [selectedIndex, setSelectedIndex] = useState(-1)
    return (
        <div>
            <h1>{heading}</h1>
            {
                items.length === 0 && <p>No item found</p>
            }
            <ul className="list-group">
                {items.map((item, index) => (
                        <li onClick={() => {
                            setSelectedIndex(index)
                        }}
                            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={index}
                        >{item}</li>
                    )
                )}
            </ul>
        </div>
    )
}

export default ListGroup