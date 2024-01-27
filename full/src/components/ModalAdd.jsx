import React, { useState } from "react";
import "./ModalAdd.css"

const Modal=()=>{
    const [club,setClub]=useState("");
    const [city,setCity]=useState("");
    const [year,setYear]=useState("");
    const [error,setError]=useState(false)
    const [refresh,setRefresh]=useState(false)


    const handleButtonClick=()=>{
        console.log("Club: "+club+"\n"+
                    "City: "+city+"\n"+
                    "Year: "+year)

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({name:club,city:city, year:year})
                        };
            fetch('http://localhost:8080/club', requestOptions)
                    .then(response => response.json())
                    .then(data => {if (data.status==400||data.status==500){
                        setError(true);
                    }
                    else{
                        setError(false);
                        setRefresh(true)
                    }
                });

                    
    }
    if(refresh==true){
        window.location.reload(false)
        setRefresh(false)
    }

    function Error(){
        return(
            <div>
                Error! Wrong Data!
            </div>
        );
    }


    return (
    <div>
 
        <div className="modal-container">
            <div className="napis">
                Add
            </div>
            {error && <Error />}
            <div className="inputy">
                <div>
                    <label for="club" >Club</label>
                    <input type="text" name="club" value={club} onChange={e => setClub(e.target.value)}></input>
                </div>
                <div>
                    <label for="city" >City</label>
                    <input type="text" name="city" value={city} onChange={e => setCity(e.target.value)}></input>
                </div>
                <div>
                    <label for="year" >Year</label>
                    <input type="text" name="year" value={year} onChange={e => setYear(e.target.value)}></input>
                </div>
            </div>
            <div className="but-container">
                <button className="butto" onClick={handleButtonClick}>Add</button>
            </div>
        </div>
    </div>
 )
}


export default Modal