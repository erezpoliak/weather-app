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
    let result = stringDate[0].split(" ");
    result = result[0];
    let Arr = result.split("");
    Arr.splice(-3, 3);
    return [...Arr];
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
                <MoreInfoDiv>
                  <WindIcon></WindIcon>
                </MoreInfoDiv>
                <MoreInfoDiv>Wind</MoreInfoDiv>
                <MoreInfoDiv>{i.wind_cdir}</MoreInfoDiv>
                <MoreInfoDiv>{`${i.wind_spd}ms`}</MoreInfoDiv>
                <MoreInfoDiv>
                  <MoonIcon></MoonIcon>
                </MoreInfoDiv>
                <MoreInfoDiv>Moon Phase</MoreInfoDiv>
                <MoreInfoDiv></MoreInfoDiv>
                <MoreInfoDiv>{Math.round(i.moon_phase * 10) / 10}</MoreInfoDiv>
                <MoreInfoDiv>
                  <SunriseIcon></SunriseIcon>
                </MoreInfoDiv>
                <MoreInfoDiv>Sunrise</MoreInfoDiv>
                <MoreInfoDiv></MoreInfoDiv>
                <MoreInfoDiv>{getTime(i.sunrise_ts)}</MoreInfoDiv>
                <MoreInfoDiv>
                  <AvgTempIcon></AvgTempIcon>
                </MoreInfoDiv>
                <MoreInfoDiv>Avg Temp</MoreInfoDiv>
                <MoreInfoDiv></MoreInfoDiv>
                <MoreInfoDiv>
                  {avgTemp && avgTemp.tempArr && avgTemp.tempArr[index]
                    ? avgTemp.tempArr[index]
                    : ""}
                </MoreInfoDiv>
                <MoreInfoDiv>
                  <SunsetIcon></SunsetIcon>
                </MoreInfoDiv>
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
  max-width: 100vw;
`;

let Container = styled.div`
  overflow: scroll;
  border: 1px solid black;
  display: grid;
  grid-template_rows: repeat(16, 90%);
  font-size: 0.86rem;
  max-width: 100vw;
`;

const DayGrid = styled.div`
  display: grid;
  grid-template-columns: 10% 50% 10% 10%;
  justify-content: space-around;
  max-width: 100vw;
`;

const DayName = styled.div``;

const WeatherIconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const WeatherIcon = styled.img`
  width: 12%;
  height: 12%;
`;

const MinimumDiv = styled.div`
  opacity: 0.6;
`;

const MaximumDiv = styled.div``;

const MoreInfoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4.2%;
  margin-bottom: 4.2%;
  max-width: 100vw;
`;

const WindIcon = styled(Wind)`
  width: 50%;
  height: 50%;
`;

const MoonIcon = styled(Moon)`
  width: 50%;
  height: 50%;
`;

const SunriseIcon = styled(Sunrise)`
  width: 50%;
  height: 50%;
`;

const AvgTempIcon = styled(TemperatureLow)`
  width: 50%;
  height: 50%;
`;

const SunsetIcon = styled(Sunset)`
  width: 50%;
  height: 50%;
`;
