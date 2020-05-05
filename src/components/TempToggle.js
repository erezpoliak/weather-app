import React, { useContext, useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { Forecast_Context } from "./Context";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
// import "./ToggleStyle.scss";

const TempToggle = () => {
  const { method, setMethod } = useContext(Forecast_Context);
  const { checked, setChecked } = useState(false);

  const changeToggle = (e) => {
    if (method === "F") setMethod("C");
    else setMethod("F");
  };

  return (
    // <label>
    //   <Toggle
    //     defaultChecked={true}
    //     // className="style"
    //     icons={{
    //       checked: "F",
    //       unchecked: "C"
    //     }}
    //     onChange={changeToggle}
    //   />
    // </label>

    <FormGroup row style={{ width: "100%" }}>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={changeToggle}
            name="temperature toggle"
            size="small"
          />
        }
        label={`${method}°`}
        size="small"
      />
    </FormGroup>
  );
};

export default TempToggle;
