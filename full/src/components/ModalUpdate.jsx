import React, { useState } from "react";
import "./ModalUpdate.css"

const UpdateModal=()=>{
    const [id,setId]=useState("");
    const [club,setClub]=useState("");
    const [city,setCity]=useState("");
    const [year,setYear]=useState("");
    const [error,setError]=useState(false)


    const handleButtonClick=()=>{
        var url=`http://localhost:8080/club/${id}?name=${club}&city=${city}&year=${year}`

            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                        };
            fetch(url, requestOptions)
                    .then(response => response.json())
                    .then(data => {if (data.status==400||data.status==500){
                        setError(true);
                    }
                    else{
                        setError(false);
                    }
                });

                    
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
                Update
            </div>
            {error && <Error />}
            <div className="inputy1">
                <div>
                    <label for="id">Id</label>
                    <input type="text" name="id" value={id} onChange={e => setId(e.target.value)}></input>
                </div>
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
                <button className="butto" onClick={handleButtonClick}>Update</button>
            </div>
        </div>
    </div>
 )
}


export default UpdateModal