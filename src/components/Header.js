import React from 'react';
import styled from 'styled-components';

const Header = () =>{
  return(
    <Container>
      <City>Tel Aviv</City>
      <Summary>bright day</Summary>
      <Temprature>18</Temprature>
    </Container>
  )
}

export default Header;

const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
`;

const City = styled.div``;

const Summary = styled.div``;

const Temprature = styled.div``;

