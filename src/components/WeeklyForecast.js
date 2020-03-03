import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import * as Api from './Api';
import {Wind} from 'styled-icons/boxicons-regular/Wind';
import {Moon} from 'styled-icons/fa-solid/Moon';
import {Sunrise} from 'styled-icons/feather/Sunrise';
import {TemperatureLow} from 'styled-icons/fa-solid/TemperatureLow';
import {Sunset} from 'styled-icons/feather/Sunset';

const WeeklyForecast = () => {
    const [data,setData] = useState([]);
    const [isHidden,setHidden] = useState(true);
    const iconUrl = 'https://www.weatherbit.io/static/img/icons/';
    useEffect(() =>{
        const get_data = async () => {
            const fetchedData = await Api.fetchWeeklyData();
            setData(fetchedData);
        };
        get_data();
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
    const openAddInfo = (e) =>{
        if(isHidden){
            Container = styled.div`
                overflow: scroll;
                border: 1px solid black;
                display: grid;
                font-size: 0.85rem;
                grid-template_rows: repeat(16,90%);
            `
            DayGrid = styled.div`
            display: grid;
            grid-template-columns: 10% 50% 10% 10%;
            grid-template-rows: repeat(6,1fr);
            grid-template-areas:
                "day_name weather_icon max_temp min_temp"
                 "wind_icon wind_text . wind_value"
                 "moon_icon moon_text . moon_value"
                 "sunrise_icon sunrise_text . sunrise_value"
                 "avg_temp_icon avg_temp_text . avg_temp_value"
                 "sunset_icon sunset_text . sunset_value";
            justify-content: space-around;
            `;
            setHidden(true);
        }
        else {
            Container = styled.div`
                overflow: scroll;
                border: 1px solid black;
                display: grid;
                grid-template-rows: repeat(16, 15%);
            `
            DayGrid = styled.div`
                display: grid;
                grid-template-columns: 10% 50% 10% 10%;
                grid-template-areas:
                "day_name weather_icon max_temp min_temp";
                justify-content: space-around;
                font-size: 0.85rem;
            `;
            setHidden(false);
        }
        console.log('clicked');
    }
    return(
        <Container>
            {data.map(i =>{
                return <DayGrid key = {Math.random()} onClick = {openAddInfo}>
                    <DayName>{getDayName(i.valid_date)}</DayName>
                    <WeatherIconWrapper>
                        <WeatherIcon src = {`${iconUrl}${i.weather.icon}.png`}></WeatherIcon>
                    </WeatherIconWrapper>
                    <MaximumDiv>{`${i.max_temp}F`}</MaximumDiv>
                    <MinimumDiv>{`${i.min_temp}F`}</MinimumDiv>
                    {!isHidden ? (
                        <>
                            <WindIcon></WindIcon>
                            <WindText>Wind</WindText>
                            <WindValue>66</WindValue>
                            <MoonIcon></MoonIcon>
                            <MoonText>Moon Phase</MoonText>
                            <MoonValue>66</MoonValue>
                            <SunriseIcon></SunriseIcon>
                            <SunriseText>Sunrise</SunriseText>
                            <SunriseValue>66</SunriseValue>
                            <AvgTempIcon></AvgTempIcon>
                            <AvgTempText>Avg Temp</AvgTempText>
                            <AvgTempValue>66</AvgTempValue>
                            <SunsetIcon></SunsetIcon>
                            <SunsetText>Sunset</SunsetText>
                            <SunsetValue>66</SunsetValue>
                        </>    
                    ):(<></>)}
                </DayGrid>
            })}
        </Container>
    )
}

export default WeeklyForecast;

let Container = styled.div`
    overflow: scroll;
    border: 1px solid black;
    display: grid;
    grid-template-rows: repeat(16, 15%);
    // grid-template_rows: repeat(16,90%);
    font-size: 0.85rem;
`;

let DayGrid = styled.div`
    display: grid;
    grid-template-columns: 10% 50% 10% 10%;
    // grid-template-rows: repeat(6,1fr);
    grid-template-areas:
        "day_name weather_icon max_temp min_temp";
    //      "wind_icon wind_text . wind_value"
    //      "moon_icon moon_text . moon_value"
    //      "sunrise_icon sunrise_text . sunrise_value"
    //      "avg_temp_icon avg_temp_text . avg_temp_value"
    //      "sunset_icon sunset_text . sunset_value";
    justify-content: space-around;
`;

const DayName = styled.div`
    grid-area: day_name;
`;

const WeatherIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    grid-area: weather_icon;
`;

const WeatherIcon = styled.img`
    width: 22%;
`;

const MinimumDiv = styled.div`
    opacity: 0.6;
    grid-area: min_temp;
`;

const MaximumDiv = styled.div`
    grid-area: max_temp;
`;

const WindIcon = styled(Wind)`
    grid-area: wind_icon;
`;

const WindText = styled.div`
    grid-area: wind_text;
`;

const WindValue = styled.div`
    grid-area: wind_value;
`;

const MoonIcon = styled(Moon)`
    grid-area: moon_icon;
`;

const MoonText = styled.div`
    grid-area: moon_text;
`;

const MoonValue = styled.div`
    grid-area: moon_value;
`;

const SunriseIcon = styled(Sunrise)`
    grid-area: sunrise_icon;
`;

const SunriseText = styled.div`
    grid-area: sunrise_text;
`;

const SunriseValue = styled.div`
    grid-area: sunrise_value;
`;

const AvgTempIcon = styled(TemperatureLow)`
    grid-area: avg_temp_icon;
`;

const AvgTempText = styled.div`
    grid-area: avg_temp_text;
`;

const AvgTempValue = styled.div`
    grid-area: avg_temp_value;
`;

const SunsetIcon = styled(Sunset)`
    grid-area: sunset_icon;
`;

const SunsetText = styled.div`
    grid-area: sunset_text;
`;

const SunsetValue = styled.div`
    grid-area: sunset_value;
`;




