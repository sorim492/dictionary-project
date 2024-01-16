import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning (props){
    return(
        <div className="meaning">
            <section>
            <h3>{props.meaning.partOfSpeech}</h3>
            </section>
            <section>
            {props.meaning.definitions.map(function (definition, index){
                return(
                    <section key={index}>
                        <div className="definition"> 
                            {definition.definition}
                        </div>
                            
                        <div className="example"> 
                            {definition.example} 
                        </div>
                    </section>
                );
            })} 
            </section>
            <Synonyms synonyms={props.meaning.synonyms}/>
        </div>
    );
}