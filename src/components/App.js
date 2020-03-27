import React, { useContext, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./Home";
import Stats from "./Stats";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import { Forecast_Context } from "./Context";
import styled from "styled-components";

const App = () => {
  const { currentData } = useContext(Forecast_Context);

  useEffect(() => {
    const initWallpaper = desc => {
      if (desc) {
        const rain =
          desc.includes("Drizzle") ||
          desc.includes("Rain") ||
          desc.includes("drizzle") ||
          desc.includes("rain");
        const snow =
          desc.includes("Snow") ||
          desc.includes("Flurries") ||
          desc.includes("snow") ||
          desc.includes("flurries");
        const sleet = desc.includes("Sleet") || desc.includes("sleet");
        const fog =
          desc.includes("Mist") ||
          desc.includes("Smoke") ||
          desc.includes("Haze") ||
          desc.includes("Sand") ||
          desc.includes("Fog") ||
          desc.includes("mist") ||
          desc.includes("smoke") ||
          desc.includes("haze") ||
          desc.includes("sand") ||
          desc.includes("fog");

        if (desc.includes("Thunderstorm")) Wallpaper = WallpaperThunder;
        else {
          if (rain) Wallpaper = WallpaperRain;
        }

        if (snow) Wallpaper = WallpaperSnow;

        if (sleet) Wallpaper = WallpaperSleet;

        if (fog) Wallpaper = WallpaperFog;

        if (desc.includes("Clear sky")) Wallpaper = WallpaperClear;

        if (desc.includes("clouds")) {
          if (desc.includes("Overcast")) Wallpaper = WallpaperOvercast;
          else Wallpaper = WallpaperClouds;
        }
      }
    };
    const description =
      currentData && currentData.weather && currentData.weather.description;

    console.log("the description from app.js", description);

    initWallpaper(description);
  }, [currentData]);

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
   font-family: 'Roboto', sans-serif;
   font-weight: 300;
   font-size: 10px;
   height: 100vh;
   max-width: 100vw;
   color: rgba(210, 225, 243, 1);
 }
`;

let Wallpaper = styled.div`
  // background-position: center;
  // background-repeat: no-repeat;
  height: 100vh;
  max-width: 100vw;
  @media (min-width: 768px) {
    height: 100%;
    width: 100%;
  }
  // opacity: 0.6;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),
    url("/imgs/overcast.jpg") center center no-repeat;
  background-size: cover;
`;

const WallpaperThunder = styled.div`
  // background-position: center;
  // background-repeat: no-repeat;
  height: 100vh;
  max-width: 100vw;
  @media (min-width: 768px) {
    height: 100%;
    width: 100%;
  }
  // opacity: 0.6;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),
    url("/imgs/overcast.jpg") center center no-repeat;
  background-size: cover;
`;

const WallpaperRain = styled.div`
  // background-position: center;
  // background-repeat: no-repeat;
  height: 100vh;
  max-width: 100vw;
  @media (min-width: 768px) {
    height: 100%;
    width: 100%;
  }
  // opacity: 0.6;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),
    url("/imgs/overcast.jpg") center center no-repeat;
  background-size: cover;
`;

const WallpaperSnow = styled.div`
  // background-position: center;
  // background-repeat: no-repeat;
  height: 100vh;
  max-width: 100vw;
  @media (min-width: 768px) {
    height: 100%;
    width: 100%;
  }
  // opacity: 0.6;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),
    url("/imgs/overcast.jpg") center center no-repeat;
  background-size: cover;
`;

const WallpaperSleet = styled.div`
  // background-position: center;
  // background-repeat: no-repeat;
  height: 100vh;
  max-width: 100vw;
  @media (min-width: 768px) {
    height: 100%;
    width: 100%;
  }
  // opacity: 0.6;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),
    url("/imgs/overcast.jpg") center center no-repeat;
  background-size: cover;
`;

const WallpaperFog = styled.div`
  // background-position: center;
  // background-repeat: no-repeat;
  height: 100vh;
  max-width: 100vw;
  @media (min-width: 768px) {
    height: 100%;
    width: 100%;
  }
  // opacity: 0.6;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),
    url("/imgs/overcast.jpg") center center no-repeat;
  background-size: cover;
`;

const WallpaperClouds = styled.div`
  // background-position: center;
  // background-repeat: no-repeat;
  height: 100vh;
  max-width: 100vw;
  @media (min-width: 768px) {
    height: 100%;
    width: 100%;
  }
  // opacity: 0.6;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),
    url("/imgs/overcast.jpg") center center no-repeat;
  background-size: cover;
`;

const WallpaperClear = styled.div`
  // background-position: center;
  // background-repeat: no-repeat;
  height: 100vh;
  max-width: 100vw;
  @media (min-width: 768px) {
    height: 100%;
    width: 100%;
  }
  // opacity: 0.6;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),
    url("/imgs/clear-sky.jpg") center center no-repeat;
  background-size: cover;
`;

let WallpaperOvercast = styled.div`
  // background-position: center;
  // background-repeat: no-repeat;
  height: 100vh;
  max-width: 100vw;
  @media (min-width: 768px) {
    height: 100%;
    width: 100%;
  }
  // opacity: 0.6;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85)),
    url("/imgs/overcast.jpg") center center no-repeat;
  background-size: cover;
`;
