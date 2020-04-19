export async function fetchWeeklyData(cityName) {
  try {
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&key=83a2229fd615410fb7a980aa86e4064a&units=I`;
    const response = await fetch(url);
    const jsoned = await response.json();
    jsoned.data.shift();
    return jsoned.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetch12HourData(cityKey) {
  try {
    const url = `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${cityKey}?apikey=Zfo3zMIGUFpf44SjmscYCEAFZRoCbLY8`;
    const response = await fetch(url);
    const jsoned = await response.json();
    return jsoned;
  } catch (error) {
    console.error(error);
  }
}
export async function fetchCurrentData(cityName) {
  try {
    const url = `https://api.weatherbit.io/v2.0/current?city=${cityName}&key=83a2229fd615410fb7a980aa86e4064a&units=I`;
    const response = await fetch(url);
    const jsoned = await response.json();
    return jsoned.data[0];
  } catch (error) {
    console.error(error);
  }
}

export async function fetchAnnualData(stationId) {
  try {
    const url = `https://api.meteostat.net/v1/climate/normals?station=${stationId}&key=jU3rqVLK`;
    const fetched = await fetch(url);
    console.log("fetched from fecth annual", fetched);
    if (fetched.ok) {
      const fetched_json = await fetched.json();
      const result =
        fetched_json && fetched_json.data && fetched_json.data.temperature;
      return result;
    } else return {};
  } catch (err) {
    console.error(err);
  }
}

export async function fetchYearData(stationId, start, end) {
  try {
    const url = `https://api.meteostat.net/v1/history/monthly?station=${stationId}&start=${start}&end=${end}&key=jU3rqVLK`;
    const fetched = await fetch(url);
    if (fetched.ok) {
      const fetched_json = await fetched.json();
      const result = fetched_json.data;
      return result;
    } else return [];
  } catch (err) {
    console.error(err);
  }
}

export async function getStationId(cityName) {
  try {
    console.log("cityName from api", cityName);
    if (cityName !== "Tel+Aviv") {
      const url = `https://api.meteostat.net/v1/stations/search?q=${cityName}&key=jU3rqVLK`;
      const fetched = await fetch(url);
      const fetched_json = await fetched.json();
      const result =
        fetched_json && fetched_json.data[0] && fetched_json.data[0].id;
      console.log("station id result from api", result);
      if (!result) {
        return "";
      } else {
        return result;
      }
    } else {
      console.log("api think i am tel aviv");
      return "40180";
    }
  } catch (err) {
    console.error(err);
  }
}

// export async function fetch_autoComplete (e) {
//     const url =
//       "https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=Zfo3zMIGUFpf44SjmscYCEAFZRoCbLY8";
//     const search_value = e.target.value;
//     const q = "&q=";
//     const fetched_data = await fetch(url + q + search_value);
//     const jsoned = await fetched_data.json();
//     return jsoned;
//   };
