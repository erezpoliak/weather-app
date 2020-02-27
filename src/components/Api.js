export async function fetchWeeklyData () {
    let url = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=Zfo3zMIGUFpf44SjmscYCEAFZRoCbLY8';
    let fetched = await fetch(url);
    let jsoned = await fetched.json();
    jsoned.DailyForecasts.shift();
    return(jsoned.DailyForecasts);
}

export async function fetch12HourData () {
    let url = "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/215854?apikey=Zfo3zMIGUFpf44SjmscYCEAFZRoCbLY8";
    let fetched = await fetch(url);
    let jsoned = await fetched.json();
    return jsoned;
};
export async function fetchCurrentData () {
    let url = 'http://dataservice.accuweather.com/currentconditions/v1/215854?apikey=Zfo3zMIGUFpf44SjmscYCEAFZRoCbLY8';
    let fetched = await fetch(url);
    let jsoned = await fetched.json();
    return(jsoned[0]);
}

