import React from 'react';
import styled from 'styled-components';
import AutoCompleteSearch from './AutoCompleteSearch';
import TempToggle from './TempToggle';

const Header = () =>{
  return(
      <Container>
        <TopBar>
          <AutoCompleteSearch></AutoCompleteSearch>
          <TempToggle></TempToggle>
        </TopBar>
        <div>
          <City>Tel Aviv</City>
          <Summary>bright day</Summary>
          <Temprature>18</Temprature>
        </div>
      </Container>
  )
}

export default Header;

const Container = styled.div`

    display: grid;
    grid-template-rows: 15% auto;
    border: 1px solid black;
`;

const City = styled.div`
  text-align: center;
`;

const Summary = styled.div`
  text-align: center;
`;

const Temprature = styled.div`
  text-align: center;
`;

const TopBar = styled.div`
  flex-basis: 15%;
  display: flex;
  justify-content: space-around;
`


