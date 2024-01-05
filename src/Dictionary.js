import React, {useState} from "react";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");

    function goSearch(event){
        event.preventDefault();
        alert(`Searching for ${keyword}`)
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