import React, { useContext, useEffect } from "react";
import Toggle from "./DetailsToggle.js";
import IPTable from "./interestedPartiesTable";
import { AuthContext } from "./auth.js";

import "./styles.css";

export default function IP() {
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
    <div className="App">
      <Toggle className="details" />
      <IPTable />
    </div>
  );
}
