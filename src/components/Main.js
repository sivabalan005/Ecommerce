import React from "react";
import Airbuds from '../images/Airbud.jpg'
import Headphone from '../images/Headphone.webp'
import Game from '../images/Game.jpg'
import Loptop from '../images/Loptob.webp'
import Phones from '../images/Phone.webp'
import Refregirater from '../images/Refregirator.webp'
import Smarttv from '../images/Smartv.webp'
import SmartWatch from '../images/SmartWatch.jpg'
import Speaker from '../images/Speakers.webp'
import Tablet from "../images/Tablet.jpg";
import { Link } from "react-router-dom";
import './Main.css'



const App = () => {

    return (
        <div className="main">
          <div className="sec1">
                <img src={Headphone} alt="Headphone" />
                <Link to="/headphone">Headphones</Link>
            </div>

            <div className="sec2">
                <img src={Loptop} alt="Loptop" />
                <Link to="/loptop">Loptob</Link>
            </div>

            <div className="sec3">
                <img src={Phones} alt="Phone" />
                <Link to="/phone">Phones</Link>
            </div>


            <div className="sec5">
                <img src={Smarttv} alt="Smarttv" />
                <Link to="/smarttv">Smarttv</Link>
            </div>

            <div className="sec6">
                <img src={SmartWatch} alt="Smartwatch" /><br/>
                <Link to="/smartwatch">SmartWatch</Link>
            </div>

            <div className="sec7">
                <img src={Speaker} alt="Speaker" />
                <Link to="/speaker">Speakers</Link>
            </div>

            <div className="sec9">
                <img src={Airbuds} alt="Airbuds" />
                <Link to="/airbuds">Airbuds</Link>
            </div>

            <div className="sec10">
                <img src={Game} alt="Game" />
                <Link to="/game">Games</Link>
            </div>

            <div className="sec4">
                <img src={Refregirater} alt="Refregirator" className="ref" />
                <Link to="/refregirator">Refregirater</Link>
            </div>

            <div className="sec11">
                <img src={Tablet} alt="Tablet" />
                <Link to="/tablet">Tablets</Link>
            </div>
        </div>
    );
};

export default App;
