import React, { useEffect, useRef, useContext, useState } from "react";
import Chart from "chart.js";
import styled from "styled-components";
import { Forecast_Context } from "./Context";
import * as Api from "./Api";

const AnnualChart = () => {
  const chartRef = useRef();
  const { stationId } = useContext(Forecast_Context);

  const glaop = 'asdjklas';

  const [annualData, set_annualData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await Api.fetchAnnualData(stationId);

      if (fetchedData) set_annualData(fetchedData);
      else set_annualData({});
    };
    fetchData();
  }, [stationId]);

  useEffect(() => {
    const monthsArr = [];
    const tempArr = [];

    for (const month in annualData) {
      monthsArr.push(month);
      tempArr.push(annualData[month]);
    }

    if (Object.keys(annualData).length) {
      const chartCtx = chartRef.current.getContext("2d");

      new Chart(chartCtx, {
        type: "line",
        data: {
          labels: monthsArr,
          datasets: [
            {
              label: "Multiannual Temperature",
              data: tempArr,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(239, 1, 41, 0.2)",
                "rgba(1, 148, 239, 0.2)",
                "rgba(16, 178, 16, 0.2)",
                "rgba(138, 16, 178, 0.2)",
                "rgba(237, 167, 53, 0.2)",
                "rgba(190, 95, 241, 0.2)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(239, 1, 41, 1)",
                "rgba(1, 148, 239, 1)",
                "rgba(16, 178, 16, 1)",
                "rgba(138, 16, 178, 1)",
                "rgba(237, 167, 53, 1)",
                "rgba(190, 95, 241, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          labels: {
            fontColor: "rgba(210, 225, 243, 1)",
            fontSize: 11
          },

          scales: {
            yAxes: [
              {
                ticks: {
                  fontColor: "rgba(210, 225, 243, 1)",
                  fontSize: 11,
                  stepSize: 1,
                  beginAtZero: true
                }
              }
            ],
            xAxes: [
              {
                ticks: {
                  fontColor: "rgba(210, 225, 243, 1)",
                  fontSize: 11,
                  stepSize: 1,
                  beginAtZero: true
                }
              }
            ]
          },

          animation: {
            duration: 1300
          },
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }
  }, [annualData]);

  console.log("station id", stationId);
  console.log("annual data", annualData);
  return (
    <Wrapper>
      <Title>Annual Temperature</Title>
      {!Object.keys(annualData).length ? (
        <NoInfoDiv>Sorry no info for this place yet</NoInfoDiv>
      ) : (
          <Container>
            <canvas ref={chartRef} style={{ margin: "0 auto" }} />
          </Container>
        )}
    </Wrapper>
  );
};

export default AnnualChart;

const Container = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;

  // width: 90%;

  height: 100%;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
`;

const NoInfoDiv = styled.div`
  // height: 100%;
  display: flex;
  align-items: center;
  height: 70%;
  justify-content: center;
  font-size: 1rem;
  font-family: "Indie Flower", cursive;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
