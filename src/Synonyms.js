import React from "react";

export default function Synonyms(props){
    if (props.synonyms){
    return(
        <div className="synonyms">
            <h3><em>Synonyms: </em></h3>
            <ul className="synonyms">
            {props.synonyms.map(function(synonym, index) {
                return <li key={index}>{synonym}</li>;
            })}
            </ul>
        </div>
    );
} else {
    return null;
    }
}