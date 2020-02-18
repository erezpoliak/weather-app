import React from 'react';
import styled from 'styled-components';

const WeeklyForecast = () => {
    return(
        <Container>
            Weekly Forecast
            <TempDiv></TempDiv>
        </Container>
    )
}

export default WeeklyForecast;

const Container = styled.div`
    overflow: scroll;
    border: 1px solid black;
`;

const TempDiv = styled.div`
    height: 1000px;
`;

