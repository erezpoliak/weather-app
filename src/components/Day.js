import React, { useState } from "react";
import styled from "styled-components";
import { Wind } from "styled-icons/boxicons-regular/Wind";
import { Moon } from "styled-icons/fa-solid/Moon";
import { Sunrise } from "styled-icons/feather/Sunrise";
import { TemperatureLow } from "styled-icons/fa-solid/TemperatureLow";
import { Sunset } from "styled-icons/feather/Sunset";
import { Forecast_Context } from "./Context";
import { ArrowDown } from "@styled-icons/fa-solid/ArrowDown";
import { ArrowDropDown } from "@styled-icons/remix-line/ArrowDropDown";

import DailyInfo from "./DailyInfo";

const Day = ({ i, weeklyTemp, avgTemp, index }) => {
  const [open, setOpen] = useState(false);
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

  return (
    <Grid open={open} onClick={() => setOpen(!open)} key={index}>
      {/* <Container> */}
      <DayName>{getDayName(i.valid_date)}</DayName>
      <WeatherIconWrapper>
        <WeatherIcon src={`${iconUrl}${i.weather.icon}.png`}></WeatherIcon>
      </WeatherIconWrapper>
      <MaximumDiv>
        {weeklyTemp && weeklyTemp.tempArr && weeklyTemp.tempArr[index]
          ? `${weeklyTemp.tempArr[index].max}°`
          : ""}{" "}
      </MaximumDiv>
      <MinimumDiv>
        {weeklyTemp && weeklyTemp.tempArr && weeklyTemp.tempArr[index]
          ? `${weeklyTemp.tempArr[index].min}°`
          : ""}{" "}
        {/* &nbsp;&nbsp; <DropDownIcon></DropDownIcon> */}
      </MinimumDiv>

      <DropDownIcon></DropDownIcon>

      {/* </Container> */}
      {open && (
        <DailyInfo avgTemp={avgTemp} getTime={getTime} i={i} index={index} />
      )}

      {/* {open && (
        <React.Fragment>
          <MoreInfoDiv>
            <WindIcon></WindIcon>
          </MoreInfoDiv>
          <MoreInfoType>Wind</MoreInfoType>
          <MoreInfoDiv>{i.wind_cdir}</MoreInfoDiv>
          <MoreInfoDiv>{`${i.wind_spd}ms`}</MoreInfoDiv>
          <MoreInfoDiv>
            <MoonIcon></MoonIcon>
          </MoreInfoDiv>
          <MoreInfoType>Moon Phase</MoreInfoType>
          <MoreInfoDiv></MoreInfoDiv>
          <MoreInfoDiv>{Math.round(i.moon_phase * 10) / 10}</MoreInfoDiv>
          <MoreInfoDiv>
            <SunriseIcon></SunriseIcon>
          </MoreInfoDiv>
          <MoreInfoType>Sunrise</MoreInfoType>
          <MoreInfoDiv></MoreInfoDiv>
          <MoreInfoDiv>{getTime(i.sunrise_ts)}</MoreInfoDiv>
          <MoreInfoDiv>
            <AvgTempIcon></AvgTempIcon>
          </MoreInfoDiv>
          <MoreInfoType>Avg Temp</MoreInfoType>
          <MoreInfoDiv></MoreInfoDiv>
          <MoreInfoDiv>
            {avgTemp && avgTemp.tempArr && avgTemp.tempArr[index]
              ? `${avgTemp.tempArr[index]}°`
              : ""}
          </MoreInfoDiv>
          <MoreInfoDiv>
            <SunsetIcon></SunsetIcon>
          </MoreInfoDiv>
          <MoreInfoType>Sunset</MoreInfoType>
          <MoreInfoDiv></MoreInfoDiv>
          <MoreInfoDiv>{getTime(i.sunset_ts)}</MoreInfoDiv>
        </React.Fragment>
      )} */}
    </Grid>
  );
};

export default Day;

const Grid = styled.div`
  display: grid;
  grid-template-rows: ${({ open }) => (open ? "15% repeat(5, 17%)" : "1fr")};

  // grid-template-columns: 20% 50% 10% 10%;

  grid-template-columns: 20% 50% 6.66% 6.66% 6.66%;

  height: ${({ open }) => (open ? "100%" : "15%")};
  justify-content: space-around;
  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: grid;
  // grid-template-columns: 20% 50% 10% 10%;

  grid-template-columns: 20% 50% 6.66% 6.66% 6.66%;

  width: 100%;
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

const ArrowDownIcon = styled(ArrowDown)`
  width: 22%;
`;

const DropDownIcon = styled(ArrowDropDown)`
  // width: 40%;
  // color: rgb(255, 255, 255);
`;
