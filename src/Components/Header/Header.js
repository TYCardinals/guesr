import './Header.css';
import React, { useState, useContext } from 'react';
import { GlobalContext } from "../../App";

function Header() {

  const localGlobal = useContext(GlobalContext);
  
  function bottomMenuActivation() {
    if (localGlobal.userGuessSelection == false) {
      document.getElementById("guessButton").style.borderWidth ="0 0 0px";
      localGlobal.set_userGuessSelection(true);
    } else {
      localGlobal.set_userGuessSelection(false);
      document.getElementById("guessButton").style.borderWidth ="0 0 4px";
    }

    console.log(localGlobal.userGuessSelection)
  }

  return (
    <header>
        <div className="header_left">
            <button className="button-19">Login</button>
            <button className="button-19">I'm new</button>
        </div>
        <div className="header_mid"><h1>guesr</h1>
        <p><em>we steal your time & data for our own profit, since 2023</em></p>
        </div>
    
        <div className="header_right">
        <button className="button-19" id="guessButton" onClick={() => bottomMenuActivation()}>Guess!</button>
        <button className="button-19 minibutton">🔔</button>
        <button className="button-19 minibutton">...</button>
        </div>
    </header>
  );
}

export default Header;

//640 360

// F3EEDF
// CB884E
// 8E858B
// 945C57
