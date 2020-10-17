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
      console.log("fetched 12 hour- localstorage response test");
      console.log(fetched12hour);
      if (fetched12hour)
        window.localStorage.setItem(
          "data12Hour",
          JSON.stringify(fetched12hour)
        );
      const data12Hour = JSON.parse(window.localStorage.getItem("data12Hour"));
      setData12hour(data12Hour);
      const fetchedCurrent = await Api.fetchCurrentData(cityName);
      if (fetchedCurrent)
        window.localStorage.setItem(
          "dataCurrent",
          JSON.stringify(fetchedCurrent)
        );
      const dataCurrent = JSON.parse(
        window.localStorage.getItem("dataCurrent")
      );
      setCurrentData(dataCurrent);
      const fetchedWeekly = await Api.fetchWeeklyData(cityName);
      console.log("fetched weekly- localstorage response test");
      console.log(fetchedWeekly);
      if (fetchedWeekly)
        window.localStorage.setItem(
          "dataWeekly",
          JSON.stringify(fetchedWeekly)
        );
      const dataWeekly = JSON.parse(window.localStorage.getItem("dataWeekly"));
      setWeeklyData(dataWeekly);

      const fetched_stationId = await Api.getStationId(cityName);
      if (fetched_stationId)
        window.localStorage.setItem(
          "dataStationId",
          JSON.stringify(fetched_stationId)
        );
      const dataStationId = JSON.parse(
        window.localStorage.getItem("dataStationId")
      );
      setStationId(dataStationId);
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
