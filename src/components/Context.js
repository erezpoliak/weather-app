import React, { createContext, useState, useEffect } from "react";
import * as Api from "./Api";

const Forecast_Context = createContext();
const { Provider } = Forecast_Context;

const Forecast_Provider = ({ children }) => {
  // const [autoCompleteData, setAutoCompleteData] = useState([]);
  const [data12hour, setData12hour] = useState([]);
  const [currentData, setCurrentData] = useState({});
  const [weeklyData, setWeeklyData] = useState([]);
  const [method, setMethod] = useState("F");
  useEffect(
    () => {
      const getData = async () => {
        // const fetchedAutoComplete = await Api.fetch_autoComplete;
        // setAutoCompleteData(fetchedAutoComplete);
        const fetched12hour = await Api.fetch12HourData();
        setData12hour(fetched12hour);
        const fetchedCurrent = await Api.fetchCurrentData();
        setCurrentData(fetchedCurrent);
        const fetchedWeekly = await Api.fetchWeeklyData();
        setWeeklyData(fetchedWeekly);
      };
      getData();
      console.log("api called");
    },
    [
      // cityName
    ]
  );

  const state = {
    // autoCompleteData ,
    data12hour,
    currentData,
    weeklyData,
    method
  };

  const actions = {
    // setAutoCompleteData ,
    setData12hour,
    setCurrentData,
    setWeeklyData,
    setMethod
  };

  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
};

export { Forecast_Provider, Forecast_Context };
