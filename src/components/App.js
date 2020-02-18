import React from 'react';
import styled ,{ createGlobalStyle } from 'styled-components';
import Header from './Header';
import HourlyForecast from './HourlyForecast';
import WeeklyForecast from './WeeklyForecast';


const App = () => {
    return (
    <React.Fragment>
    <GlobalStyle />
    <Grid>
      <Header></Header>
      <HourlyForecast></HourlyForecast>
      <WeeklyForecast></WeeklyForecast>
    </Grid>
      
    </React.Fragment>
    );
 }

export default App;


const GlobalStyle = createGlobalStyle`
 body {
   margin: 0;
   padding: 0;
   font-family: sans-serif;
   font-size: 10px;
 }
`;

const Grid = styled.div`

  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-rows: 2fr 1fr 2fr; 
`;
