import React from "react";
import ReactDom from "react-dom";

function Note(props){
return(
    <div className="note">
        <h2>
            {props.title}
        </h2>
        <p>
            {props.content}
        </p>
    </div>
)
}
export default Note;