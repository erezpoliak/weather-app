// import { Forecast_Context } from "./Context";
// import { useContext } from "react";

export function convertTemp(temp, system) {
  if (system === "F") return Math.round(((temp - 32) * 5) / 9);
  else return Math.round((temp / 5) * 9 + 32);
}
//--------------------------------------------------------------------------------
// const { currentData } = useContext(Forecast_Context);
// const describe = currentData.weather.description;

// const wallpaper = desc => {
//   if (desc.includes("Thunderstorm")) {
//     return 'url("/imgs/thunderstorm.jpg")';
//   }

//   if (desc.includes("Drizzle" || "Rain")) {
//     return 'url("/imgs/drizzle.jpg")';
//   }

//   if (desc.includes("Snow" || "Flurries")) {
//     return 'url("/imgs/snow.jpg")';
//   }

//   if (desc.includes("Sleet")) {
//     return 'url("/imgs/sleet.jpeg")';
//   }

//   if (desc.includes("Mist" || "Smoke" || "Haze" || "Sand" || "Fog")) {
//     return 'url("/imgs/fog.jpg")';
//   }

//   if (desc === "Clear sky") {
//     return 'url("/imgs/clear-sky.jpg")';
//   }

//   if (desc.includes("clouds")) {
//     return 'url("/imgs/clouds.jpg")';
//   }
// };

// export const bg = wallpaper(describe);
