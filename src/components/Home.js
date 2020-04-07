import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import HourlyForecast from "./HourlyForecast";
import WeeklyForecast from "./WeeklyForecast";
import { Forecast_Context } from "./Context";
import Div100vh from "react-div-100vh";
import Divider from "@material-ui/core/Divider";
import HomeTopBar from "./HomeTopBar";
import Stats from "./Stats";
import PersonalInfo from "./PersonalInfo";
import AnnualChart from "./AnnualChart";
import YearChart from "./YearChart";
import { sizing } from "@material-ui/system";

const Home = () => {
  // const { currentData } = useContext(Forecast_Context);
  // const description =
  //   currentData && currentData.weather && currentData.weather.description;

  // const wallpaper = desc => {
  //   if (desc) {
  //     if (desc.includes("Thunderstorm")) Grid = GridThunder;

  //     if (desc.includes("Drizzle" || "Rain")) Grid = GridRain;

  //     if (desc.includes("Snow" || "Flurries")) Grid = GridSnow;

  //     if (desc.includes("Sleet")) Grid = GridSleet;

  //     if (desc.includes("Mist" || "Smoke" || "Haze" || "Sand" || "Fog"))
  //       Grid = GridFog;

  //     if (desc === "Clear sky") Grid = GridClear;

  //     if (desc.includes("clouds")) Grid = GridClouds;
  //   }
  // };

  // wallpaper(description);

  return (
    // <Div100vh>
    <Container>
      <HomeTopBar></HomeTopBar>
      <Grid>
        <SideBar>
          <TopSectionWrapper>
            {/* <TopSection> */}
            {/* <HomeTopBar></HomeTopBar> */}
            <Header></Header>
            {/* </TopSection> */}
            <Divider variant="middle" />
            <HourlyForecast></HourlyForecast>
            {/* <div></div> */}
            <Divider variant="middle" />
            <WeeklyForecast></WeeklyForecast>
          </TopSectionWrapper>
        </SideBar>
        <Divider orientation="vertical" flexItem />
        <StatsWrapper>
          {/* <Stats></Stats> */}
          <AnnualChart></AnnualChart>
          <YearChart></YearChart>
        </StatsWrapper>
      </Grid>
    </Container>
    // {/* </Div100vh> */}
  );
};

export default Home;

const TopSectionWrapper = styled.div`
  display: grid;
  height: 100%;
  max-width: 100vw;
  grid-template-rows: 2fr 1% 1fr 1% 2fr;
  // background-image: url("/imgs/clear-sky.jpg");
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  // opacity: 0.6;
  @media (min-width: 768px) {
    max-height: 100%;
    max-width: 100%;
  }
`;

const TopSection = styled.div`
  display: grid;
  grid-template-rows: 35% auto;
  max-width: 100%;
  // border: 1px solid black;
  // color: rgba(185, 193, 207, 1);
`;

const SideBar = styled.div`
  height: 88vh;
  // max-width: 100%;
  // display: grid;
  // grid-template-rows: 12% auto;
  @media (min-width: 768px) {
    width: 100%;
    // height: 100vh;
  }
`;

const StatsWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    // display: flex;
    // justify-content: space-around;
    // align-items: center;
    height: 84vh;
    width: 39.5vw;
    // display: block;
    display: grid;
    grid-gap: 10%;
    margin-top: 4%;
    grid-template-rows: 40% 40%;
  }
`;

const Grid = styled.div`
  height: 88vh;
  // width: 100%;
  @media (min-width: 768px) {
    display: grid;

    grid-template-columns: 60% 40%;

    grid-template-columns: 59.5% 1% 39.5%;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 12% auto;
`;

const FulldislayTopbar = styled.div``;
