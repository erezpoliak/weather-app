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
  const [cityName, setCityName] = useState("tel+aviv");
  const [cityKey, setCityKey] = useState("215854");
  const [stationId, setStationId] = useState(40180);
  // const [annualData, set_annualData] = useState({});
  useEffect(() => {
    const getData = async () => {
      // const fetchedAutoComplete = await Api.fetch_autoComplete;
      // setAutoCompleteData(fetchedAutoComplete);
      const fetched12hour = await Api.fetch12HourData(cityKey);
      setData12hour(fetched12hour);
      const fetchedCurrent = await Api.fetchCurrentData(cityName);
      setCurrentData(fetchedCurrent);
      const fetchedWeekly = await Api.fetchWeeklyData(cityName);
      setWeeklyData(fetchedWeekly);
      // const fetchedAnnual = await Api.fetchAnnualData(stationId);
      // set_annualData(fetchedAnnual);
    };
    getData();
    console.log("api called");
  }, [
    cityName,
    cityKey
    // stationId
  ]);

  const state = {
    // autoCompleteData ,
    data12hour,
    currentData,
    weeklyData,
    method,
    stationId
    // annualData
  };

  const actions = {
    // setAutoCompleteData ,
    setData12hour,
    setCurrentData,
    setWeeklyData,
    setMethod,
    setCityName,
    setCityKey,
    setStationId
    // set_annualData
  };

  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
};

export { Forecast_Provider, Forecast_Context };
