import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props){

if (props.results){
    return(
        <div className="results">
            <h2>{props.results.word}</h2>
            {props.results.phonetics.map(function(phonetic, index){return(<div key={index}><Phonetic phonetic={phonetic}/></div>)})}
            <h3>{props.results.meanings.map(function(meaning, index){return (
                <div key={index}>
                    <Meaning meaning={meaning}/>
                </div>
            )})}</h3>
        </div>
    )
    } else { return null }
}