import React, { useState, useEffect } from "react";
import { DetailStyles } from "./themes.js";
console.log("Toggler called...");

export default function Toggle(props) {
  const [toggleState, setToggleState] = useState(false);
  const [buttonText, setButtonText] = useState("Show Details");

  function toggle() {
    return toggleState
      ? (setToggleState(false), setButtonText("Show Details"))
      : (setToggleState(true), setButtonText("Hide Details"));
  }

  useEffect(() => console.log("Details ToggleState = " + toggleState), [
    toggleState
  ]);
  return (
    <DetailStyles>
      <br />
      <button className="buttons" onClick={toggle}>
        {buttonText}
      </button>
      <br />
      {toggleState ? (
        <p className="details">
          Lewisburg, TN
          <br />
          Asking Price: $20,000,000
          <br />
        </p>
      ) : null}
      <br />
    </DetailStyles>
  );
}
