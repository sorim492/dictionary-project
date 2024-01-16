import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState("");

    function handleResponse(response){
        setResults(response.data[0])
    }

    function handlePhotoResponse(response){
        setPhotos(response.data.photos);
    }

    //https://dictionaryapi.dev/ Documentation
    function goSearch(event){
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let photosApikey = `81733468770ef6bb5cfa54d03392t9o2`
        let photoUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photosApikey}`
        axios.get(photoUrl).then(handlePhotoResponse);

    }

    function handleKeyword(event){
        setKeyword(event.target.value)
    }

    return(
        <div className="dictionary">
            <section>
                <h1>What word do you want to look up?</h1>
                <form onSubmit={goSearch}>
                    <input type="search" onChange={handleKeyword}/>
                </form>
                <div className="hint">
                    Suggested words: sunset, wine, yoga, dog
                </div>
            </section>
            <Photos photos = {photos} />
            <Results results = {results}/>
        </div>
    )
}