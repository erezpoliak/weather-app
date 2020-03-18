import React, { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./Home";
import Stats from "./Stats";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import { Forecast_Context } from "./Context";
import styled from "styled-components";

const App = () => {
  const { currentData } = useContext(Forecast_Context);
  const description =
    currentData && currentData.weather && currentData.weather.description;

  const initWallpaper = desc => {
    if (desc) {
      if (desc.includes("Thunderstorm")) Wallpaper = WallpaperThunder;

      if (desc.includes("Drizzle" || "Rain")) Wallpaper = WallpaperRain;

      if (desc.includes("Snow" || "Flurries")) Wallpaper = WallpaperSnow;

      if (desc.includes("Sleet")) Wallpaper = WallpaperSleet;

      if (desc.includes("Mist" || "Smoke" || "Haze" || "Sand" || "Fog"))
        Wallpaper = WallpaperFog;

      if (desc === "Clear sky") Wallpaper = WallpaperClear;

      if (desc.includes("clouds")) Wallpaper = WallpaperClouds;
    }
  };

  initWallpaper(description);

  return (
    <Router>
      <Wallpaper>
        <GlobalStyle />
        <Route exact path="/" component={Home}></Route>
        <Route path="/stats" component={Stats}></Route>
        <Route path="/info" component={PersonalInfo}></Route>
      </Wallpaper>
    </Router>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
 body {
   margin: 0;
   padding: 0;
   font-family: sans-serif;
   font-size: 10px;
   height: 100%;
   max-width: 100%;
 }
`;

let Wallpaper = styled.div`
  background-image: url("/imgs/clear-sky.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  max-width: 100vw;
  // opacity: 0.6;
`;

const WallpaperThunder = styled.div`

  background-image: url("/imgs/thunderstorm.jpg")
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  max-width: 100vw;
  // opacity: 0.6;
`;

const WallpaperRain = styled.div`

  background-image: url("/imgs/drizzle.jpg")
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  max-width: 100vw;
  // opacity: 0.6;
`;

const WallpaperSnow = styled.div`

  background-image: url("/imgs/snow.jpg")
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  max-width: 100vw;
  // opacity: 0.6;
`;

const WallpaperSleet = styled.div`

  background-image: url("/imgs/sleet.jpeg")
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  max-width: 100vw;
  // opacity: 0.6;
`;

const WallpaperFog = styled.div`

  background-image: url("/imgs/fog.jpg")
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  max-width: 100vw;
  // opacity: 0.6;
`;

const WallpaperClouds = styled.div`
  background-image: url("/imgs/clouds.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  max-width: 100vw;
  // opacity: 0.6;
`;

const WallpaperClear = styled.div`
  background-image: url("/imgs/clear-sky.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  max-width: 100vw;
  // opacity: 0.6;
`;
