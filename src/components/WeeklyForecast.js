import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Wind } from "styled-icons/boxicons-regular/Wind";
import { Moon } from "styled-icons/fa-solid/Moon";
import { Sunrise } from "styled-icons/feather/Sunrise";
import { TemperatureLow } from "styled-icons/fa-solid/TemperatureLow";
import { Sunset } from "styled-icons/feather/Sunset";
import { Forecast_Context } from "./Context";
import * as Utility from "./Utility";

const WeeklyForecast = () => {
  const { weeklyData, method } = useContext(Forecast_Context);
  const [isHidden, setHidden] = useState(true);
  const [weeklyTemp, set_weeklyTemp] = useState({ method: "F", tempArr: [] });
  const [avgTemp, setAvgTemp] = useState({ method: "F", tempArr: [] });
  useEffect(() => {
    const new_weeklyTempArr = weeklyData.map(i => {
      return { min: Math.round(i.min_temp), max: Math.round(i.max_temp) };
    });
    const new_avgTempArr = weeklyData.map(i => {
      return Math.round(i.temp);
    });
    const new_weeklyTemp = { method: "F", tempArr: new_weeklyTempArr };
    const new_avgTemp = { method: "F", tempArr: new_avgTempArr };
    set_weeklyTemp(new_weeklyTemp);
    setAvgTemp(new_avgTemp);
  }, [weeklyData]);

  useEffect(() => {
    if (method !== weeklyTemp.method) {
      const result_arr = weeklyTemp.tempArr.map(i => {
        return {
          min: Utility.convertTemp(i.min, weeklyTemp.method),
          max: Utility.convertTemp(i.max, weeklyTemp.method)
        };
      });
      const new_weekly = { method: method, tempArr: result_arr };
      set_weeklyTemp(new_weekly);
    }

    if (method !== avgTemp.method) {
      const new_arr = avgTemp.tempArr.map(i => {
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
    weeklyTemp.tempArr
  ]);

  const iconUrl = "https://www.weatherbit.io/static/img/icons/";
  const getDayName = dateString => {
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
  const openAddInfo = e => {
    if (isHidden) {
      const tempContainer = HiddenContainer;
      HiddenContainer = Container;
      Container = tempContainer;
      setHidden(false);
    } else {
      const tempContainer = HiddenContainer;
      HiddenContainer = Container;
      Container = tempContainer;
      setHidden(true);
    }
  };
  const getTime = utc => {
    const date = new Date(utc * 1000);
    let stringDate = date.toTimeString();
    stringDate = stringDate.split("G");
    const result = stringDate[0].split(" ");
    return result[0];
  };

  return (
    <HiddenContainer>
      {weeklyData.map((i, index) => {
        return (
          <DayGrid key={Math.random()} onClick={openAddInfo}>
            <DayName>{getDayName(i.valid_date)}</DayName>
            <WeatherIconWrapper>
              <WeatherIcon
                src={`${iconUrl}${i.weather.icon}.png`}
              ></WeatherIcon>
            </WeatherIconWrapper>
            <MaximumDiv>
              {weeklyTemp && weeklyTemp.tempArr && weeklyTemp.tempArr[index]
                ? weeklyTemp.tempArr[index].min
                : ""}
            </MaximumDiv>
            <MinimumDiv>
              {weeklyTemp && weeklyTemp.tempArr && weeklyTemp.tempArr[index]
                ? weeklyTemp.tempArr[index].max
                : ""}
            </MinimumDiv>
            {!isHidden ? (
              <React.Fragment>
                <WindIcon></WindIcon>
                <MoreInfoDiv>Wind</MoreInfoDiv>
                <MoreInfoDiv></MoreInfoDiv>
                <MoreInfoDiv>{`${i.wind_cdir} ${i.wind_spd}m/s`}</MoreInfoDiv>
                <MoonIcon></MoonIcon>
                <MoreInfoDiv>Moon Phase</MoreInfoDiv>
                <MoreInfoDiv></MoreInfoDiv>
                <MoreInfoDiv>{Math.round(i.moon_phase * 10) / 10}</MoreInfoDiv>
                <SunriseIcon></SunriseIcon>
                <MoreInfoDiv>Sunrise</MoreInfoDiv>
                <MoreInfoDiv></MoreInfoDiv>
                <MoreInfoDiv>{getTime(i.sunrise_ts)}</MoreInfoDiv>
                <AvgTempIcon></AvgTempIcon>
                <MoreInfoDiv>Avg Temp</MoreInfoDiv>
                <MoreInfoDiv></MoreInfoDiv>
                <MoreInfoDiv>
                  {avgTemp && avgTemp.tempArr && avgTemp.tempArr[index]
                    ? avgTemp.tempArr[index]
                    : ""}
                </MoreInfoDiv>
                <SunsetIcon></SunsetIcon>
                <MoreInfoDiv>Sunset</MoreInfoDiv>
                <MoreInfoDiv></MoreInfoDiv>
                <MoreInfoDiv>{getTime(i.sunset_ts)}</MoreInfoDiv>
              </React.Fragment>
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </DayGrid>
        );
      })}
    </HiddenContainer>
  );
};

export default WeeklyForecast;

let HiddenContainer = styled.div`
  overflow: scroll;
  border: 1px solid black;
  display: grid;
  grid-template_rows: repeat(16, 15%);
  font-size: 0.86rem;
`;

let Container = styled.div`
  overflow: scroll;
  border: 1px solid black;
  display: grid;
  grid-template_rows: repeat(16, 90%);
  font-size: 0.86rem;
`;

const DayGrid = styled.div`
  display: grid;
  grid-template-columns: 10% 50% 10% 10%;
  justify-content: space-around;
`;

const DayName = styled.div``;

const WeatherIconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const WeatherIcon = styled.img`
  width: 22%;
`;

const MinimumDiv = styled.div`
  opacity: 0.6;
`;

const MaximumDiv = styled.div``;

const MoreInfoDiv = styled.div``;

const WindIcon = styled(Wind)``;

const MoonIcon = styled(Moon)``;

const SunriseIcon = styled(Sunrise)``;

const AvgTempIcon = styled(TemperatureLow)``;

const SunsetIcon = styled(Sunset)``;
