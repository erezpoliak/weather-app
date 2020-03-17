import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import HourlyForecast from "./HourlyForecast";
import WeeklyForecast from "./WeeklyForecast";
import { Forecast_Context } from "./Context";

const Home = () => {
  const { currentData } = useContext(Forecast_Context);
  const description =
    currentData && currentData.weather && currentData.weather.description;

  const wallpaper = desc => {
    if (desc) {
      if (desc.includes("Thunderstorm")) Grid = GridThunder;

      if (desc.includes("Drizzle" || "Rain")) Grid = GridRain;

      if (desc.includes("Snow" || "Flurries")) Grid = GridSnow;

      if (desc.includes("Sleet")) Grid = GridSleet;

      if (desc.includes("Mist" || "Smoke" || "Haze" || "Sand" || "Fog"))
        Grid = GridFog;

      if (desc === "Clear sky") Grid = GridClear;

      if (desc.includes("clouds")) Grid = GridClouds;
    }
  };

  wallpaper(description);

  return (
    <Grid>
      <Header></Header>
      <HourlyForecast></HourlyForecast>
      <WeeklyForecast></WeeklyForecast>
    </Grid>
  );
};

export default Home;

let Grid = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-rows: 2fr 1fr 2fr;
  background-image: url("/imgs/clear-sky.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // opacity: 0.6;
`;

const GridThunder = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-rows: 2fr 1fr 2fr;
  background-image: url("/imgs/thunderstorm.jpg")
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // opacity: 0.6;
`;

const GridRain = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-rows: 2fr 1fr 2fr;
  background-image: url("/imgs/drizzle.jpg")
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // opacity: 0.6;
`;

const GridSnow = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-rows: 2fr 1fr 2fr;
  background-image: url("/imgs/snow.jpg")
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // opacity: 0.6;
`;

const GridSleet = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-rows: 2fr 1fr 2fr;
  background-image: url("/imgs/sleet.jpeg")
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // opacity: 0.6;
`;

const GridFog = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-rows: 2fr 1fr 2fr;
  background-image: url("/imgs/fog.jpg")
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // opacity: 0.6;
`;

const GridClouds = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-rows: 2fr 1fr 2fr;
  background-image: url("/imgs/clouds.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // opacity: 0.6;
`;

const GridClear = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-rows: 2fr 1fr 2fr;
  background-image: url("/imgs/clear-sky.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // opacity: 0.6;
`;
