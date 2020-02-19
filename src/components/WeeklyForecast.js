import React, {useState,useEffect} from 'react';
import styled from 'styled-components';

const WeeklyForecast = () => {
    const [data,setData] = useState([]);
    const iconUrl = 'https://www.accuweather.com/images/weathericons/';
    useEffect(() =>{
        const fetchData = async () =>{
            let url = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=Zfo3zMIGUFpf44SjmscYCEAFZRoCbLY8';
            let fetched = await fetch(url);
            let jsoned = await fetched.json();
            setData(jsoned.DailyForecasts);
        }
        fetchData();
    },[data])
    const getDayName = (dateString) =>{
        const date = new Date(dateString);
        const day = date.getDay();
        if(day === 0) return 'Sunday';
        if(day === 1) return 'Monday';
        if(day === 2) return 'Tuesday';
        if(day === 3) return 'Wednsday';
        if(day === 4) return 'Thursday';
        if(day === 5) return 'Friday';
        if(day === 6) return 'Saturday';
    }
    return(
        <Container>
            {data.map(i =>{
                return <DayDiv>
                    <div>{getDayName(i.Date)}</div>
                    <WeatherIcon src = {`${iconUrl}${i.Day.Icon}.svg`}></WeatherIcon>
                    <div>{`${i.Temperature.Maximum.Value}F`}</div>
                    <MinimumDiv>{`${i.Temperature.Minimum.Value}F`}</MinimumDiv>
                </DayDiv>
            })}
        </Container>
    )
}

export default WeeklyForecast;

const Container = styled.div`
    overflow: scroll;
    border: 1px solid black;
    display: grid;
    grid-template-rows: repeat(5, 35%);
`;

const DayDiv = styled.div`
    display: flex;
    justify-content: space-around;
`;

const WeatherIcon = styled.img`
    height: 50%;
    width: 50%;
`;

const MinimumDiv = styled.div`
    opacity: 0.6;
`;



