import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning (props){
    console.log(props.meaning)
    return(
        <div className="meanings">
            <h3><em>{props.meaning.partOfSpeech}</em></h3>
            {props.meaning.definitions.map(function (definition, index){
                return(
                    <div key={index}>
                        <p>
                            <strong>Definition: </strong>
                            {definition.definition}
                            <br/>
                            <strong>Example: </strong>
                            {definition.example}
                        </p>
                    </div>
                );
            })}
            <Synonyms synonyms={props.meaning.synonyms}/>

        </div>
    )
}