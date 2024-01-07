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
            <form onSubmit={goSearch}>
                <input type="search" onChange={handleKeyword}/>
                <input type="submit" value="Search"/>
            </form>
            <Results results = {results}/>
        
        </div>
    )
}