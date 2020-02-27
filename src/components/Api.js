export async function fetchWeeklyData () {
    let url = 'https://api.weatherbit.io/v2.0/forecast/daily?city=Tel+Aviv&key=83a2229fd615410fb7a980aa86e4064a&units=I';
    let response = await fetch(url);
    if(!response.ok) throw new Error('Network response was not ok');
    let jsoned = await response.json();
    return(jsoned.data);
}

export async function fetch12HourData () {
    let url = "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/215854?apikey=Zfo3zMIGUFpf44SjmscYCEAFZRoCbLY8";
    let response = await fetch(url);
    if(!response.ok) throw new Error('Network response was not ok');
    let jsoned = await response.json();
    return jsoned;
};
export async function fetchCurrentData () {
    let url = 'http://dataservice.accuweather.com/currentconditions/v1/215854?apikey=Zfo3zMIGUFpf44SjmscYCEAFZRoCbLY8';
    let response = await fetch(url);
    if(!response.ok) throw new Error('Network response was not ok');
    let jsoned = await response.json();
    return(jsoned[0]);
}

