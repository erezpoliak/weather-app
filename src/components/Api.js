export async function fetchWeeklyData() {
  try {
    const url =
      "https://api.weatherbit.io/v2.0/forecast/daily?city=Tel+Aviv&key=83a2229fd615410fb7a980aa86e4064a&units=I";
    const response = await fetch(url);
    const jsoned = await response.json();
    jsoned.data.shift();
    return jsoned.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetch12HourData() {
  try {
    const url =
      "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/215854?apikey=Zfo3zMIGUFpf44SjmscYCEAFZRoCbLY8";
    const response = await fetch(url);
    const jsoned = await response.json();
    return jsoned;
  } catch (error) {
    console.error(error);
  }
}
export async function fetchCurrentData() {
  try {
    const url =
      "https://api.weatherbit.io/v2.0/current?city=tel+aviv&key=83a2229fd615410fb7a980aa86e4064a&units=I";
    const response = await fetch(url);
    const jsoned = await response.json();
    return jsoned.data[0];
  } catch (error) {
    console.error(error);
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
