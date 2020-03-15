import React, { useContext } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { Forecast_Context } from "./Context";

const TempToggle = () => {
  const { method, setMethod } = useContext(Forecast_Context);

  const changeToggle = e => {
    if (method === "F") setMethod("C");
    else setMethod("F");
  };

  return (
    <label>
      <Toggle
        defaultChecked={true}
        icons={{
          checked: "F",
          unchecked: "C"
        }}
        onChange={changeToggle}
      />
    </label>
  );
};

export default TempToggle;
