import React, { useEffect, useRef, useContext, useState } from "react";
import Chart from "chart.js";
import styled from "styled-components";
import { Forecast_Context } from "./Context";
import * as Api from "./Api";

const YearChart = () => {
  const chartRef = useRef();
  const { stationId } = useContext(Forecast_Context);
  const [yearData, set_yearData] = useState([]);
  const did_getData = yearData !== [];

  useEffect(() => {
    const fetch_data = async () => {
      const date = new Date();
      const year = date.getFullYear();
      const start = `${year - 3}-01`;
      const end = `${year - 1}-12`;
      const fetched = await Api.fetchYearData(stationId, start, end);
      // if(fetched)
      set_yearData(fetched);
      // else set_yearData([]);
    };
    fetch_data();
  }, [stationId]);

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();

    const avgTemp = yearData.map(i => {
      return (i.temperature_min + i.temperature_max) / 2;
    });

    const getAvgYears = avgTempArr => {
      let avgYear = 0;
      const avgYearArr = [];

      for (let i = 0; i < avgTempArr.length; i++) {
        if (i % 11 === 0 && i !== 0) {
          avgYear += avgTemp[i];
          avgYearArr.push(avgYear);
          avgYear = 0;
        } else {
          avgYear += avgTemp[i];
        }
      }
      return avgYearArr;
    };

    const avgYears = getAvgYears(avgTemp);

    const labelArr = [year - 3, year - 2, year - 1];

    const chartCtx = chartRef.current.getContext("2d");

    new Chart(chartCtx, {
      type: "doughnut",
      data: {
        labels: labelArr,
        datasets: [
          {
            label: `${[...labelArr]}`,
            data: avgYears,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      option: {
        legend: {
          labels: {
            fontColor: "white",
            fontSize: 18
          }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "white",
                fontSize: 18,
                stepSize: 1,
                beginAtZero: true
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "white",
                fontSize: 14,
                stepSize: 1,
                beginAtZero: true
              }
            }
          ]
        },

        animation: {
          duration: 1300
        }
      }
    });
  }, [yearData]);

  console.log("this is year data", yearData);

  return (
    <Container>
      <Title>Avg temperature for last 3 years</Title>
      {did_getData ? (
        <React.Fragment></React.Fragment>
      ) : (
        <React.Fragment>
          <NoInfoDiv>No info in the api for this place yet</NoInfoDiv>
        </React.Fragment>
      )}
      <canvas ref={chartRef} />
    </Container>
  );
};

export default YearChart;

const Container = styled.div`
  position: relative;
  width: 90%;
  // margin-top: 8%;
  // height: 100%;
`;

const NoInfoDiv = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  text-align: center;
`;
