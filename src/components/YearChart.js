import React, { useEffect, useRef, useContext, useState } from "react";
import Chart from "chart.js";
import styled from "styled-components";
import { Forecast_Context } from "./Context";
import * as Api from "./Api";

const YearChart = () => {
  const chartRef = useRef();
  const { stationId } = useContext(Forecast_Context);
  const [yearData, set_yearData] = useState([]);

  useEffect(() => {
    const fetch_data = async () => {
      const date = new Date();
      const year = date.getFullYear();
      const start = `${year - 3}-01`;
      const end = `${year - 1}-12`;
      const fetched = await Api.fetchYearData(stationId, start, end);
      set_yearData(fetched);
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

      for (let i = 0; i < avgTemp.length; i++) {
        if (i % 11 === 0 && i !== 0) {
          avgYearArr.push(avgYear);
          avgYear = 0;
        }
        avgYear += avgTemp[i];
      }
      return avgYearArr;
    };

    const avgYears = getAvgYears(avgTemp);

    const labelArr = [year - 3, year - 2, year - 1];

    const chartCtx = chartRef.current.getContext("2d");
    console.log(avgYears);

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
        animation: {
          duration: 2500
        }
      }
    });
  }, [yearData]);

  return (
    <Container>
      <h2>Avg temperature for last 3 years</h2>
      <canvas ref={chartRef} />
    </Container>
  );
};

export default YearChart;

const Container = styled.div`
  position: relative;
  width: 90vw;
  margin-top: 8%;
`;
