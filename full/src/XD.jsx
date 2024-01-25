import React from "react";
import "./XD.css"
import player from "./assets/player.jpg"
import power from "./assets/power.png"

const XD=()=>{


    return(
        <div className="container">
            <div className="bar-container">
                <div className="bar">
                  Piłkarze
                </div>
                <div className="bar">
                    Stadiony
                </div>
                <div className="bar">
                    Kluby
                </div>
                <div className="bar">
                    Menadżerowie
                </div>
                <div className="a">
                    <img src={power} className="power-image"/>
                </div>
            </div>
            <div>
                <img src={player} className="player-image"/>
            </div>
        </div>
    );
}

export default XD;