import React, { useEffect, useRef, useContext, useState } from "react";
import Chart from "chart.js";
import styled from "styled-components";
import { Forecast_Context } from "./Context";
import * as Api from "./Api";

const AnnualChart = () => {
  const chartRef = useRef();
  const { stationId } = useContext(Forecast_Context);
  const [annualData, set_annualData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await Api.fetchAnnualData(stationId);
      // if (fetchedData)
      set_annualData(fetchedData);
      // else set_annualData({});
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
      option: {
        animation: {
          duration: 2500
        }
      }
    });
  }, [annualData]);

  console.log("station id", stationId);

  return (
    <Container>
      <h2>Multiannual Temperature Avg</h2>
      {annualData === {} ? (
        <div>sorry no info found from api</div>
      ) : (
        <canvas ref={chartRef} />
      )}
    </Container>
  );
};

export default AnnualChart;

const Container = styled.div`
  position: relative;
  width: 90vw;
  margin-top: 8%;
`;
