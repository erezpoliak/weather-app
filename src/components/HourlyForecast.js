import React, {useEffect , useState } from 'react';
import styled from 'styled-components';

const HourlyForecast = () => {
    const [data12hour,setData12Hour] = useState([]);
    const [currentData , setCurrentData] = useState({});
    const tempF = currentData && currentData.Temperature && currentData.Temperature.Imperial && currentData.Temperature.Imperial.Value;
    const iconUrl = 'https://www.accuweather.com/images/weathericons/';
    useEffect (() =>{
        const fetch12HourData = async () =>{
            let url = "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/215854?apikey=Zfo3zMIGUFpf44SjmscYCEAFZRoCbLY8";
            let fetched = await fetch(url);
            let jsoned = await fetched.json();
            setData12Hour(jsoned);
        };
        const fetchCurrentData = async () =>{
            let url = 'http://dataservice.accuweather.com/currentconditions/v1/215854?apikey=Zfo3zMIGUFpf44SjmscYCEAFZRoCbLY8';
            let fetched = await fetch(url);
            let jsoned = await fetched.json();
            setCurrentData(jsoned[0]);
        }
        fetch12HourData();
        fetchCurrentData();
    },[currentData]);
    const getHour = (date) =>{
        const result = date.slice(11,13);
        return result;
    }
    return(
        <GridContainer>
            <HourDiv>
                <div>Now</div>
                <WeatherIcon src = {`${iconUrl}${currentData.WeatherIcon}.svg`} alt = {currentData.WeatherText}></WeatherIcon>
                <div>{`${tempF}F`}</div>
            </HourDiv>
            {data12hour.map(i =>{
                return <HourDiv>
                    <div>{getHour(i.DateTime)}</div>
                    <WeatherIcon src = {`${iconUrl}${i.WeatherIcon}.svg`} alt = {i.IconPhrase}></WeatherIcon>
                    <div>{`${i.Temperature.Value}F`}</div>
                </HourDiv>
            })}
            </GridContainer>
    )
}

export default HourlyForecast;

const GridContainer = styled.div`

    border: 1px solid black;
    display: grid;
    grid-template-columns: repeat(13,20%);
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
`;

const HourDiv = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15%;
`;

const WeatherIcon = styled.img`
    height: 75%;
    width: 75%;
`;