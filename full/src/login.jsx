import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login=()=>{
    const navigate=useNavigate();
    const [error,setError]=useState(false);
    const[login,setLogin]=useState("");
    const[password,setPassword]=useState("")

    const handleButClick=()=>{

        console.log("login: "+login+"\n"+"password: "+password)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({login:login,password:password})
                    };
        fetch('http://localhost:8080/user', requestOptions)
                .then(response => response.json())
                .then(data => {if(data==true){
                    navigate("/temp")
                }
                else{
                    setError(true);
                }})
    }

    function Error(){
        return(
            <div>
                Error! Wrong Data!
            </div>
        );
    }
 return(
    <div className="maind">
        <div className="login-container">

            <div className="text">
                Zaloguj się
            </div>
            {error && <Error />}
            <div className="input-container">
                <div className="inputs">
                    <label for="login" >Login</label>
                    <input type="text" name="login" value={login} onChange={e => setLogin(e.target.value)}></input>
                </div>
                <div className="inputs">
                    <label for="password">Password</label>
                    <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                </div>
            </div>
            <div className="button-container">
                <button className="button" onClick={handleButClick}>Log in</button>
            </div>
        </div>
    </div>
 )

}

export default Login