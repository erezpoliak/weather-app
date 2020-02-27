import React, {useEffect , useState } from 'react';
import styled from 'styled-components';
import * as Api from './Api';

const HourlyForecast = () => {
    const [data12hour,setData12Hour] = useState([]);
    const [currentData , setCurrentData] = useState({});
    const tempF = currentData && currentData.Temperature && currentData.Temperature.Imperial && currentData.Temperature.Imperial.Value;
    const iconUrl = 'https://www.accuweather.com/images/weathericons/';
    useEffect (() =>{
        const get_data = async () => {
            const fetched12hour = await Api.fetch12HourData();
            setData12Hour(fetched12hour);
            const fetchedCurrentData = await Api.fetchCurrentData();
            setCurrentData(fetchedCurrentData);
        };
        get_data();
    },[currentData,data12hour]);
    const getHour = (date) =>{
        const result = date.slice(11,13);
        return result;
    }
    return(
        <GridContainer>
            <HourDiv key ={Math.random()}>
                <div>Now</div>
                <WeatherIcon src = {`${iconUrl}${currentData.WeatherIcon}.svg`} alt = {currentData.WeatherText}></WeatherIcon>
                <div>{`${tempF}F`}</div>
            </HourDiv>
            {data12hour.map(i =>{
                return <HourDiv key ={Math.random()}>
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