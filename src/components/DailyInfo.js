import React from "react";
import styled from "styled-components";
import { Wind } from "styled-icons/boxicons-regular/Wind";
import { Moon } from "styled-icons/fa-solid/Moon";
import { Sunrise } from "styled-icons/feather/Sunrise";
import { TemperatureLow } from "styled-icons/fa-solid/TemperatureLow";
import { Sunset } from "styled-icons/feather/Sunset";

const DailyInfo = ({ avgTemp, getTime, i, type, index }) => {
  // const createRow = (type, i ,getTime , avgTemp) => {
  //     if(type === 'Wind'){
  //         return(
  //             <Box>
  //                 <WindIcon></WindIcon>
  //             </Box>
  //             <Type>{type}</Type>
  //             <
  //         )
  //     }
  // }

  return (
    // <Container>
    <>
      <Box>
        <WindIcon></WindIcon>
      </Box>
      <Type>Wind</Type>
      <Box>{i.wind_cdir}</Box>
      <Box>{`${i.wind_spd}ms`}</Box>
      <div></div>

      <Box>
        <MoonIcon></MoonIcon>
      </Box>
      <Type>Moon Phase</Type>
      <Box></Box>
      <Box>{Math.round(i.moon_phase * 10) / 10}</Box>
      <div></div>

      <Box>
        <SunriseIcon></SunriseIcon>
      </Box>
      <Type>Sunrise</Type>
      <Box></Box>
      <Box>{getTime(i.sunrise_ts)}</Box>
      <div></div>

      <Box>
        <AvgTempIcon></AvgTempIcon>
      </Box>
      <Type>Avg Temp</Type>
      <Box></Box>
      <Box>
        {avgTemp && avgTemp.tempArr && avgTemp.tempArr[index]
          ? `${avgTemp.tempArr[index]}°`
          : ""}
      </Box>
      <div></div>

      <Box>
        <SunsetIcon></SunsetIcon>
      </Box>
      <Type>Sunset</Type>
      <Box></Box>
      <Box>{getTime(i.sunset_ts)}</Box>
      <div></div>
      {/* </Container> */}
    </>
  );
};

export default DailyInfo;

const Container = styled.div`
  display: grid;
  //   grid-template-columns: 20% 50% 10% 10%;
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-top: 4.2%;
  // margin-bottom: 4.2%;
  max-width: 100%;
  height: 100%;
`;

const Type = styled.div`
  display: flex;
  align-items: center;
`;

const WindIcon = styled(Wind)`
  width: 80%;
  height: 80%;
`;

const MoonIcon = styled(Moon)`
  width: 80%;
  height: 80%;
`;

const SunriseIcon = styled(Sunrise)`
  width: 80%;
  height: 80%;
`;

const AvgTempIcon = styled(TemperatureLow)`
  width: 80%;
  height: 80%;
`;

const SunsetIcon = styled(Sunset)`
  width: 80%;
  height: 80%;
`;
