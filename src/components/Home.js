import React from "react";
import styled from "styled-components";
import Header from "./Header";
import HourlyForecast from "./HourlyForecast";
import WeeklyForecast from "./WeeklyForecast";

const Home = () => {
  return (
    <Grid>
      <Header></Header>
      <HourlyForecast></HourlyForecast>
      <WeeklyForecast></WeeklyForecast>
    </Grid>
  );
};

export default Home;

const Grid = styled.div`
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
