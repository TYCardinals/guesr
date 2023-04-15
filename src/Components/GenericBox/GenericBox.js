import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../../App";
import "./GenericBox.css";

function GenericBox(props) {
  return (
    <div className="genericBoxWrapper" id="GenericBox">
        <div className="genericBox">
        <h4>🍀 Please Confirm! 🍀</h4>
        <p>Q: {props.questionTitle}</p>
        <p>You are saying {props.userAnswer}</p>
        <p>Reward modifier is {props.rewardModifier}</p>
        <p>Please type an amount: (Max. {props.userMoney})</p>
        <input id="text" type="text" placeholder="enter amount"/>
        <br/>
        <div className="buttonContainer">
        <button className="letsGo" type="button">Let's Go!</button>
        <button className="cancel" type="button" onClick={() => {document.getElementById("GenericBox").style.display = "none" }}>Cancel</button>
        </div>
        </div>
        </div>

  );
}

export default GenericBox;
