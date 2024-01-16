import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response){
        console.log(response.data[0].meanings[0].definitions[0].definition)
        setResults(response.data[0])
    }

    //https://dictionaryapi.dev/ Documentation
    function goSearch(event){
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeyword(event){
        setKeyword(event.target.value)
    }

    return(
        <div className="dictionary">
            <section>
                <form onSubmit={goSearch}>
                    <input type="search" onChange={handleKeyword}/>
                </form>
                <div className="hint">
                    Suggested words: sunset, wine, yoga, dog
                </div>
            </section>
            <Results results = {results}/>
        </div>
    )
}