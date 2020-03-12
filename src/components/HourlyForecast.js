import React, {useContext} from 'react';
import styled from 'styled-components';
import {Forecast_Context} from './Context';

const HourlyForecast = () => {
    const {data12hour , currentData , hourleyTemp , currentTemp} = useContext(Forecast_Context);
    // const currentTemp = currentData && currentData.temp;
    const bitIcon = currentData && currentData.weather && currentData.weather.icon;
    const bitDescription = currentData && currentData.weather && currentData.weather.description;
    const iconUrlAcuu = 'https://www.accuweather.com/images/weathericons/';
    const iconUrlBit = 'https://www.weatherbit.io/static/img/icons/';
    const getHour = (date) =>{
        const result = date.slice(11,13);
        return result;
    }
    return(
        <GridContainer>
            <HourDiv key ={Math.random()}>
                <div>Now</div>
                {/* <WeatherIconBit src = {`${iconUrlBit}${bitIcon}.png`} alt = {bitDescription}></WeatherIconBit>
                <div>{`${currentTemp}F`}</div> */}
                <WeatherIconBit></WeatherIconBit>
                <div>current temp</div>
            </HourDiv>
            {data12hour.map((i , index) =>{
                return <HourDiv key ={Math.random()}>
                    <div>{getHour(i.DateTime)}</div>
                    <WeatherIconAcuu src = {`${iconUrlAcuu}${i.WeatherIcon}.svg`} alt = {i.IconPhrase}></WeatherIconAcuu>
                    <div>{`${hourleyTemp[index]}F`}</div>
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

const WeatherIconAcuu = styled.img`
    height: 100%;
    width: 100%;
`;

const WeatherIconBit = styled.img`
    width: 15%;
`;
