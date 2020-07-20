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

  const openAddInfo = (e) => {
    if (isHidden) {
      set_containerRows("repeat(16, 90%)");
      set_dayGridRows("15% repeat(5, 17%)");
      setHidden(false);
    } else {
      set_containerRows("repeat(16, 15%)");
      set_dayGridRows("1fr");
      setHidden(true);
    }
  };

  console.log("ishidden", isHidden);

  return (
    <Container gridRows={containerRows} onClick={openAddInfo}>
      {weeklyData ? (
        weeklyData.map((i, index) => {
          return (
            <Day
              key={index}
              i={i}
              weeklyTemp={weeklyTemp}
              avgTemp={avgTemp}
              index={index}
            ></Day>
          );
        })
      ) : (
        <div>loading...</div>
      )}
    </Container>
  );
};

export default WeeklyForecast;

const Container = styled.div`
  overflow: scroll;
  font-size: 0.86rem;
`;
