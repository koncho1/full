import React, { useState } from "react";
import "./ModalAdd.css"

const DeleteModal=()=>{
    const [error,setError]=useState(false)
    const [id,setId]=useState("")
    var url=`http://localhost:8080/club/${id}`


    const handleButtonClick=()=>{
        setError(false)
            const requestOptions = {
                method: 'DELETE'
                        };
            fetch(url, requestOptions)
                    .then(response => response.json())
                    .then(data => {if (data.status==400||data.status==500){
                        setError(true);
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
                Delete
            </div>
            {error && <Error />}
            <div className="inputy">
                <div>
                    <label for="id" >Id</label>
                    <input type="text" name="id" value={id} onChange={e => setId(e.target.value)}></input>
                </div>
            </div>
            <div className="but-container">
                <button className="butto" onClick={handleButtonClick}>Delete</button>
            </div>
        </div>
    </div>
 )
}


export default DeleteModal