import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {Wind} from 'styled-icons/boxicons-regular/Wind';
import {Moon} from 'styled-icons/fa-solid/Moon';
import {Sunrise} from 'styled-icons/feather/Sunrise';
import {TemperatureLow} from 'styled-icons/fa-solid/TemperatureLow';
import {Sunset} from 'styled-icons/feather/Sunset';
import {Forecast_Context} from './Context';

const WeeklyForecast = () => {
    const {weeklyData} = useContext(Forecast_Context);
    const [isHidden,setHidden] = useState(true);
    const iconUrl = 'https://www.weatherbit.io/static/img/icons/';
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
        // if(isHidden){
        //     Container = styled.div`
        //         overflow: scroll;
        //         border: 1px solid black;
        //         display: grid;
        //         font-size: 0.85rem;
        //         grid-template_rows: repeat(16,90%);
        //     `
        //     DayGrid = styled.div`
        //     display: grid;
        //     grid-template-columns: 10% 50% 10% 10%;
        //     grid-template-rows: repeat(6,1fr);
        //     grid-template-areas:
        //         "day_name weather_icon max_temp min_temp"
        //          "wind_icon wind_text . wind_value"
        //          "moon_icon moon_text . moon_value"
        //          "sunrise_icon sunrise_text . sunrise_value"
        //          "avg_temp_icon avg_temp_text . avg_temp_value"
        //          "sunset_icon sunset_text . sunset_value";
        //     justify-content: space-around;
        //     `;
        //     setHidden(false);
        // }
        // else {
        //     Container = styled.div`
        //         overflow: scroll;
        //         border: 1px solid black;
        //         display: grid;
        //         grid-template-rows: repeat(16, 15%);
        //     `
        //     DayGrid = styled.div`
        //         display: grid;
        //         grid-template-columns: 10% 50% 10% 10%;
        //         grid-template-areas:
        //         "day_name weather_icon max_temp min_temp";
        //         justify-content: space-around;
        //         font-size: 0.85rem;
        //     `;
        //     setHidden(true);
        // }
        console.log('clicked');
        if(isHidden){
            const tempContainer = HiddenContainer;
            HiddenContainer = Container;
            Container = tempContainer;
            setHidden(false);
        }
        else {
            const tempContainer = HiddenContainer;
            HiddenContainer = Container;
            Container = tempContainer;
            setHidden(true);
        }
    }
    const getTime = utc => {
        var date = new Date(utc);
        return date.toString()
    }
    return(
        <HiddenContainer>
            {weeklyData.map(i =>{
                return <DayGrid key = {Math.random()} onClick = {openAddInfo}>
                    <DayName>{getDayName(i.valid_date)}</DayName>
                    <WeatherIconWrapper>
                        <WeatherIcon src = {`${iconUrl}${i.weather.icon}.png`}></WeatherIcon>
                    </WeatherIconWrapper>
                    <MaximumDiv>{`${Math.round(i.max_temp)}F`}</MaximumDiv>
                    <MinimumDiv>{`${Math.round(i.min_temp)}F`}</MinimumDiv>
                    {!isHidden ? (
                        <React.Fragment>
                            <WindIcon></WindIcon>
                            <MoreInfoDiv>Wind</MoreInfoDiv>
                            <MoreInfoDiv></MoreInfoDiv>
                            <MoreInfoDiv>{`${i.wind_cdir} ${i.wind_spd}m/s`}</MoreInfoDiv>
                            <MoonIcon></MoonIcon>
                            <MoreInfoDiv>Moon Phase</MoreInfoDiv>
                            <MoreInfoDiv></MoreInfoDiv>
                            <MoreInfoDiv>{Math.round(i.moon_phase * 10)/10}</MoreInfoDiv>
                            <SunriseIcon></SunriseIcon>
                            <MoreInfoDiv>Sunrise</MoreInfoDiv>
                            <MoreInfoDiv></MoreInfoDiv>
                            <MoreInfoDiv>{getTime(i.sunrise_ts)}</MoreInfoDiv>
                            <AvgTempIcon></AvgTempIcon>
                            <MoreInfoDiv>Avg Temp</MoreInfoDiv>
                            <MoreInfoDiv></MoreInfoDiv>
                            <MoreInfoDiv>{`${Math.round(i.temp)}F`}</MoreInfoDiv>
                            <SunsetIcon></SunsetIcon>
                            <MoreInfoDiv>Sunset</MoreInfoDiv>
                            <MoreInfoDiv></MoreInfoDiv>
                            <MoreInfoDiv>{getTime(i.sunset_ts)}</MoreInfoDiv>
                        </React.Fragment>    
                    ):(<React.Fragment></React.Fragment>)}
                </DayGrid>
            })}
        </HiddenContainer>
    )
}

export default WeeklyForecast;

let HiddenContainer = styled.div`
    overflow: scroll;
    border: 1px solid black;
    display: grid;
    grid-template_rows: repeat(16 , 15%);
    font-size: 0.86rem;
`;

let Container = styled.div`
    overflow: scroll;
    border: 1px solid black;
    display: grid;
    grid-template_rows: repeat(16 , 90%);
    font-size: 0.86rem;
`;

const DayGrid = styled.div`
    display: grid;
    grid-template-columns: 10% 50% 10% 10%;
    // grid-template-rows: ${isHidden => isHidden ? 'none' : 'repeat(6,1fr)'};
    justify-content: space-around;
`;

const DayName = styled.div``;

const WeatherIconWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const WeatherIcon = styled.img`
    width: 22%;
`;

const MinimumDiv = styled.div`
    opacity: 0.6;
`;

const MaximumDiv = styled.div``;

const MoreInfoDiv = styled.div`
    // display: ${isHidden => isHidden ? 'none' : 'block'};
`;


const WindIcon = styled(Wind)`
    // display: ${isHidden => isHidden ? 'none' : 'block'};
`;

const MoonIcon = styled(Moon)`
    // display: ${isHidden => isHidden ? 'none' : 'block'};
`;


const SunriseIcon = styled(Sunrise)`
    // display: ${isHidden => isHidden ? 'none' : 'block'};
`;


const AvgTempIcon = styled(TemperatureLow)`
    // display: ${isHidden => isHidden ? 'none' : 'block'};
`;

const SunsetIcon = styled(Sunset)`
    // display: ${isHidden => isHidden ? 'none' : 'block'};
`;





