import React, { useState, useEffect } from "react";
import { DetailStyles } from "./themes.js";
import Modal from "./components/Modal";
//import useModal from "./components/useModal";

console.log("Toggler called...");

export default function TransformToggle(props) {
  const [toggleState, setToggleState] = useState(false);
  const [buttonText, setButtonText] = useState("Show Details");
  const { isShowing, toggle } = useModal();

  function toggler() {
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
      <button className="buttons" onClick={toggler}>
        {buttonText}
      </button>
      <br />
      {toggleState ? (
        <div>
          <p textAlign="left !important">
            Sears (Transform) Lease Auction
            <br />
            <div fontWeight="bold">Total Offers: 48</div>
          </p>
          <button className="buttons" onClick={toggle}>
            Show Modal
          </button>
          <Modal isShowing={isShowing} hide={toggle} />
        </div>
      ) : null}
      <br />
    </DetailStyles>
  );
}
