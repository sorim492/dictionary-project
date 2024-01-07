import React from "react";

export default function Meaning (props){
    console.log(props.meaning)
    return(
        <div className="meanings">
            <h3><em>{props.meaning.partOfSpeech}</em></h3>
            {props.meaning.definitions.map(function (definition, index){
                return(
                    <div key={index}>
                        <p>
                            {definition.definition}
                            <br/>
                            {definition.example}
                        </p>
                    </div>
                );
            })}
        </div>
    )
}