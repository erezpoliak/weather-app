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
      <DayName>{getDayName(i.valid_date)}</DayName>
      <FlexWrapper>
        <WeatherIcon src={`${iconUrl}${i.weather.icon}.png`}></WeatherIcon>
      </FlexWrapper>
      <MaximumDiv>
        {weeklyTemp && weeklyTemp.tempArr && weeklyTemp.tempArr[index]
          ? `${weeklyTemp.tempArr[index].max}°`
          : ""}{" "}
      </MaximumDiv>
      <MinimumDiv>
        {weeklyTemp && weeklyTemp.tempArr && weeklyTemp.tempArr[index]
          ? `${weeklyTemp.tempArr[index].min}°`
          : ""}{" "}
      </MinimumDiv>

      <FlexWrapper>
        <DropDownIcon></DropDownIcon>
      </FlexWrapper>

      {open && (
        <DailyInfo avgTemp={avgTemp} getTime={getTime} i={i} index={index} />
      )}
    </Grid>
  );
};

export default Day;

const Grid = styled.div`
  display: grid;
  grid-template-rows: ${({ open }) => (open ? "15% repeat(5, 17%)" : "1fr")};
  grid-template-columns: 20% 50% 10% 10% 8%;
  padding: 0 1rem;

  height: ${({ open }) => (open ? "100%" : "15%")};
  justify-content: space-around;
  &:hover {
    cursor: pointer;
  }
`;

const DayName = styled.div`
  display: flex;
  justify-content: flex-start;
  // margin-left: 10%;
  align-items: center;
`;

const WeatherIcon = styled.img`
  width: 11%;
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

const DropDownIcon = styled(ArrowDropDown)`
  width: 70%;
  // color: rgb(255, 255, 255);
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
