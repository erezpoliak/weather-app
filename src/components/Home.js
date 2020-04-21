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
            <Header></Header>
            <Divider variant="middle" />
            <HourlyForecast></HourlyForecast>
            <Divider variant="middle" />
            <WeeklyForecast></WeeklyForecast>
          </TopSectionWrapper>
        </SideBar>
        <Divider orientation="vertical" flexItem />
        <StatsWrapper>
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
  grid-template-rows: 2fr 1% 1fr 1% 2fr;
`;

const SideBar = styled.div`
  height: 88vh;
  @media (orientation: landscape) and (max-width: 768px) {
    height: 88vw;
  }
`;

const StatsWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    height: 84vh;
    width: 39.5vw;
    display: grid;
    grid-gap: 10%;
    margin-top: 4%;
    grid-template-rows: 40% 40%;
  }
`;

const Grid = styled.div`
  height: 88vh;
  @media (min-width: 768px) {
    display: grid;

    grid-template-columns: 60% 40%;

    grid-template-columns: 59.5% 1% 39.5%;
  }
  @media (orientation: landscape) and (max-width: 768px) {
    height: 88vw;
  }
`;

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 12% auto;
  @media (orientation: landscape) and (max-width: 768px) {
    height: 100vw;
  }
`;
