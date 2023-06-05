import React, { useState, useEffect, useRef } from "react";
import "../assets/PieChart.css";
import Chart from "chart.js/auto";
import { BiChevronRight } from "react-icons/bi";

const Piechart = () => {
  const pieChartRef = useRef(null);
  const userdata = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    const producttees = actualData.cases_time_series.map(
      (item) => item.totaldeceased
    );
    const productshortpants = actualData.cases_time_series.map(
      (item) => item.dailyrecovered
    );
    const producthoodies = actualData.cases_time_series.map(
      (item) => item.dailyrecovered
    );
    // Pie Chart
    const existingPieChart = pieChartRef.current.chart;
    if (existingPieChart) {
      existingPieChart.destroy();
    }
    const pieCtx = pieChartRef.current.getContext("2d");
    const pieData = {
      labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
      datasets: [
        {
          data: [
            producttees[producttees.length - 1],
            productshortpants[productshortpants.length - 1],
            producthoodies[producthoodies.length - 1],
          ],
          backgroundColor: [
            "rgba(152, 216, 158)",
            "rgba(246, 220, 	125)",
            "rgba(	238, 132, 132)",
          ],
          borderWidth: 0,
        },
      ],
    };
    const newPieChartInstance = new Chart(pieCtx, {
      type: "pie",
      data: pieData,
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: "right",
            labels: {
              usePointStyle: true,
              boxWidth: 20,
              boxHeight: 7,
              font: {
                size: 14,
                weight: 900,
              },
            },
          },
          title: {
            position: "top",
            align: "start",
            display: true,
            text: "Top products",
            font: {
              size: 17,
              weight: "bolder",
            },
          },
        },
      },
    });
    pieChartRef.current.chart = newPieChartInstance;
  };
  useEffect(() => {
    userdata();
  }, []);
  return (
    <div className="bottom_cards">
      <div className="card1">
        {" "}
        <canvas ref={pieChartRef} id="pieChart"></canvas>
      </div>
      <div className="card2">
        <div className="heading">
          <h3>Today's schedule</h3>
          <p>
            See All <BiChevronRight />
          </p>
        </div>

        {/* <div class="row"> */}
        <div class="today_schedule_firstcard">
          <p style={{ fontWeight: 500 }}>
            Meeting with supplier from Kuta Bali
          </p>
          <p style={{ fontWeight: 200 }}>
            14:00-15:00
            <br />
            at Sunset Road,Kuta,Bali
          </p>
        </div>

        {/* <div class="row"> */}
        <div class="today_schedule_secondcard">
          <p style={{ fontWeight: 500 }}>Check operation at Giga Factory 1</p>
          <p style={{ fontWeight: 200 }}>
            18:00-20:00
            <br />
            at Central Jakarta
          </p>
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
};

export default Piechart;
