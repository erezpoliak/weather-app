import React, { useContext } from "react";
import styled from "styled-components";
import AutoCompleteSearch from "./AutoCompleteSearch";
import TempToggle from "./TempToggle";
import { Forecast_Context } from "./Context";
import { Link } from "react-router-dom";
import { ChartBar } from "@styled-icons/fa-regular/ChartBar";
import { Info } from "@styled-icons/octicons/Info";

const Header = () => {
  const { currentData } = useContext(Forecast_Context);
  const description =
    currentData && currentData.weather && currentData.weather.description;
  const current_temp = Math.round(currentData.temp);
  return (
    // <Container>
    //   <TopBar>
    //     <StyledLink to="/info">
    //       <InfoIcon></InfoIcon>
    //     </StyledLink>
    //     <AutoCompleteSearch></AutoCompleteSearch>
    //     <ToggleContainer>
    //       <TempToggle></TempToggle>
    //     </ToggleContainer>
    //     <StyledLink to="/stats">
    //       <StatsIcon></StatsIcon>
    //     </StyledLink>
    //   </TopBar>
    // </Container>
    <Wrapper>
      <City>{currentData.city_name}</City>
      <Summary>{description}</Summary>
      <Temprature>{`${current_temp}`}</Temprature>
    </Wrapper>
  );
};

export default Header;

const Container = styled.div`
  display: grid;
  grid-template-rows: 35% auto;
  // border: 1px solid black;
  // color: rgba(185, 193, 207, 1);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  // max-width: 100%;
`;

const City = styled.div`
  text-align: center;
  // margin-top: 8%;
  font-size: 1.25rem;
`;

const Summary = styled.div`
  text-align: center;
  // margin-top: 8%;
  font-size: 1rem;
`;

const Temprature = styled.div`
  text-align: center;
  // margin-top: 8%;
  font-size: 1.1rem;
`;

const TopBar = styled.div`
  display: grid;
  grid-template-columns: 10% 30% 10% 10%;
  // grid-template-columns: repeat(4, 1fr);
  justify-content: space-around;
  align-items: center;
  // display: flex;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;

const StatsIcon = styled(ChartBar)`
  width: 50%;
  height: 50%;
  color: rgba(201, 195, 177, 1);
`;

const InfoIcon = styled(Info)`
  width: 50%;
  height: 50%;
  color: rgba(201, 195, 177, 1);
`;
