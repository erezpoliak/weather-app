import React, { createContext, useState, useEffect } from "react";
import * as Api from "./Api";

const Forecast_Context = createContext();
const { Provider } = Forecast_Context;

const Forecast_Provider = ({ children }) => {
  const [data12hour, setData12hour] = useState([]);
  const [currentData, setCurrentData] = useState({});
  const [weeklyData, setWeeklyData] = useState([]);
  const [method, setMethod] = useState("F");
  const [cityName, setCityName] = useState("Tel+Aviv");
  const [cityKey, setCityKey] = useState("215854");
  const [stationId, setStationId] = useState("40180");

  useEffect(() => {
    const getData = async () => {
      const fetched12hour = await Api.fetch12HourData(cityKey);
      setData12hour(fetched12hour);
      const fetchedCurrent = await Api.fetchCurrentData(cityName);
      setCurrentData(fetchedCurrent);
      const fetchedWeekly = await Api.fetchWeeklyData(cityName);
      setWeeklyData(fetchedWeekly);

      const fetched_stationId = await Api.getStationId(cityName);
      setStationId(fetched_stationId);
    };
    getData();
    console.log("api called");
  }, [cityName, cityKey]);

  const state = {
    data12hour,
    currentData,
    weeklyData,
    method,
    stationId,
  };

  const actions = {
    setData12hour,
    setCurrentData,
    setWeeklyData,
    setMethod,
    setCityName,
    setCityKey,
    setStationId,
  };

  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
};

export { Forecast_Provider, Forecast_Context };
