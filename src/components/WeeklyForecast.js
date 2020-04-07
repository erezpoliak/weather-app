import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { Wind } from "styled-icons/boxicons-regular/Wind";
import { Moon } from "styled-icons/fa-solid/Moon";
import { Sunrise } from "styled-icons/feather/Sunrise";
import { TemperatureLow } from "styled-icons/fa-solid/TemperatureLow";
import { Sunset } from "styled-icons/feather/Sunset";
import { Forecast_Context } from "./Context";
import * as Utility from "./Utility";
import { ArrowDown } from "@styled-icons/fa-solid/ArrowDown";

import Day from "./Day";

const WeeklyForecast = () => {
  const { weeklyData, method } = useContext(Forecast_Context);
  const [isHidden, setHidden] = useState(true);
  const [weeklyTemp, set_weeklyTemp] = useState({ method: "F", tempArr: [] });
  const [avgTemp, setAvgTemp] = useState({ method: "F", tempArr: [] });

  const [containerRows, set_containerRows] = useState("repeat(16, 15%)");
  const [dayGridRows, set_dayGridRows] = useState("1fr");

  const dayGrid_ref = useRef();

  useEffect(() => {
    const new_weeklyTempArr = weeklyData.map((i) => {
      return { min: Math.round(i.min_temp), max: Math.round(i.max_temp) };
    });
    const new_avgTempArr = weeklyData.map((i) => {
      return Math.round(i.temp);
    });
    const new_weeklyTemp = { method: "F", tempArr: new_weeklyTempArr };
    const new_avgTemp = { method: "F", tempArr: new_avgTempArr };
    set_weeklyTemp(new_weeklyTemp);
    setAvgTemp(new_avgTemp);
  }, [weeklyData]);

  useEffect(() => {
    if (method !== weeklyTemp.method) {
      const result_arr = weeklyTemp.tempArr.map((i) => {
        return {
          min: Utility.convertTemp(i.min, weeklyTemp.method),
          max: Utility.convertTemp(i.max, weeklyTemp.method),
        };
      });
      const new_weekly = { method: method, tempArr: result_arr };
      set_weeklyTemp(new_weekly);
    }

    if (method !== avgTemp.method) {
      const new_arr = avgTemp.tempArr.map((i) => {
        return Utility.convertTemp(i, avgTemp.method);
      });
      const new_avg = { method: method, tempArr: new_arr };
      setAvgTemp(new_avg);
    }
  }, [
    method,
    avgTemp.method,
    avgTemp.tempArr,
    weeklyTemp.method,
    weeklyTemp.tempArr,
  ]);

  const iconUrl = "https://www.weatherbit.io/static/img/icons/";
  const getDayName = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDay();
    if (day === 0) return "Sunday";
    if (day === 1) return "Monday";
    if (day === 2) return "Tuesday";
    if (day === 3) return "Wednsday";
    if (day === 4) return "Thursday";
    if (day === 5) return "Friday";
    if (day === 6) return "Saturday";
  };
  const openAddInfo = (e) => {
    if (isHidden) {
      set_containerRows("repeat(16, 90%)");
      set_dayGridRows("15% repeat(5, 17%)");

      // dayGrid_ref.current.style.gridTemplateRows = "15% repeat(5,17%)";
      // console.log("ref", dayGrid_ref.current);
      // console.log("ref style", dayGrid_ref.current.style);

      setHidden(false);
    } else {
      set_containerRows("repeat(16, 15%)");
      set_dayGridRows("1fr");
      setHidden(true);
    }
  };

  const getTime = (utc) => {
    const date = new Date(utc * 1000);
    let stringDate = date.toTimeString();
    stringDate = stringDate.split("G");
    let result = stringDate[0].split(" ");
    result = result[0];
    let Arr = result.split("");
    Arr.splice(-3, 3);
    return [...Arr];
  };

  console.log("ishidden", isHidden);

  return (
    <Container gridRows={containerRows} onClick={openAddInfo}>
      {weeklyData.map((i, index) => {
        return (
          <Day
            key={index}
            i={i}
            weeklyTemp={weeklyTemp}
            avgTemp={avgTemp}
            index={index}
          ></Day>
        );
      })}
    </Container>
  );
};

export default WeeklyForecast;

const Container = styled.div`
  overflow: scroll;
  // height: 100%;
  height: 34.4vh;

  font-size: 0.86rem;
`;

const DayGrid = styled.div`
  display: grid;
  grid-template-columns: 20% 50% 10% 10%;
  grid-template-rows: ${(props) => (props.gridRows ? props.gridRows : "1fr")};
  justify-content: space-around;
  &:hover {
    cursor: pointer;
  }
`;

const DayName = styled.div`
  display: flex;
  // justify-content: center;
  justify-content: flex-start;
  margin-left: 10%;
  align-items: center;
  // text-align: center;
`;

const WeatherIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 100%;
  // width: 100%;
`;

const WeatherIcon = styled.img`
  width: 11%;
  // height: 55%;
  @media (min-width: 768px) {
    width: 8.5%;
  }
`;

const MinimumDiv = styled.div`
  opacity: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MaximumDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MoreInfoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-top: 4.2%;
  // margin-bottom: 4.2%;
  max-width: 100%;
  height: 100%;
`;

const MoreInfoType = styled.div`
  // margin-top: 4.2%;
  // margin-bottom: 4.2%;
  // max-width: 100%;
  display: flex;
  align-items: center;
`;

const WindIcon = styled(Wind)`
  width: 80%;
  height: 80%;
`;

const MoonIcon = styled(Moon)`
  width: 80%;
  height: 80%;
`;

const SunriseIcon = styled(Sunrise)`
  width: 80%;
  height: 80%;
`;

const AvgTempIcon = styled(TemperatureLow)`
  width: 80%;
  height: 80%;
`;

const SunsetIcon = styled(Sunset)`
  width: 80%;
  height: 80%;
`;
