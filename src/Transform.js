import React, { useContext, useEffect } from "react";
import TransformToggle from "./TransformDetails.js";
import TransformTable from "./TransformTable";
import { DetailStyles } from "./themes.js";
import { AuthContext } from "./auth.js";

//import "./styles.css";

export default function Transform() {
  const AuthCheck = () => {
    console.log("AuthCheck called...");
    const { auth, setAuth } = useContext(AuthContext);
    if (AuthContext === undefined) {
      console.log("Auth is not defined. Setting to false.");
      setAuth(false);
    }
    useEffect(() => console.log(AuthContext));
    console.log(auth);
  };
  console.log(AuthCheck);
  console.log(AuthContext);

  return (
    <DetailStyles>
      <TransformToggle className="Details" />
      <TransformTable />
    </DetailStyles>
  );
}
