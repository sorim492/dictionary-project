import React, {useState} from "react";
import axios from "axios";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");

    function handleResponse(response){
        console.log(response.data);
    }

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
        </div>
    )
}