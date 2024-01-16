import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning (props){
    return(
        <div className="meanings">
            <section>
            <h3><em>{props.meaning.partOfSpeech}</em></h3>
            </section>
            <section>
            {props.meaning.definitions.map(function (definition, index){
                return(
                    <section key={index}>
                        <p>
                            <strong>Definition: </strong> {definition.definition}
                            <br/>
                            <strong>Example: </strong> {definition.example}
                        </p>
                    </section>
                );
            })} 
            </section>
            <Synonyms synonyms={props.meaning.synonyms}/>
        </div>
    );
}