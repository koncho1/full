import React from "react";
import "./login.css";

const Login=()=>{

 return(
    <div className="maind">
        <div className="login-container">
            <div className="text">
                Zaloguj się
            </div>
            <div className="input-container">
                <div className="inputs">
                    <label for="login" >Login</label>
                    <input type="text" name="login"></input>
                </div>
                <div className="inputs">
                    <label for="password">Password</label>
                    <input type="text" name="password"></input>
                </div>
            </div>
            <div className="button-container">
                <button className="button">Log in</button>
            </div>
        </div>
    </div>
 )

}

export default Login