import React, { useState, useEffect, useRef } from "react";
import "../assets/Dashboard.css";
import { FaRegBell } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import Chart from "chart.js/auto";
import Cards from "./cards";

const Dashboard = ({ photoURL }) => {
  const chartRef = useRef(null);
  const pieChartRef = useRef(null);

  const userdata = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    const datatime = actualData.cases_time_series.map((item) => item.date);
    const datauser = actualData.cases_time_series.map(
      (item) => item.totalconfirmed
    );
    const dataguest = actualData.cases_time_series.map(
      (item) => item.totalrecovered
    );
    const producttees = actualData.cases_time_series.map(
      (item) => item.totaldeceased
    );
    const productshortpants = actualData.cases_time_series.map(
      (item) => item.dailyrecovered
    );
    const producthoodies = actualData.cases_time_series.map(
      (item) => item.dailyrecovered
    );
    // Line Chart
    const existingChart = chartRef.current.chart;
    if (existingChart) {
      existingChart.destroy();
    }
    const ctx = chartRef.current.getContext("2d");
    const data = {
      labels: datatime,
      datasets: [
        {
          label: "User",
          data: datauser,
          backgroundColor: "rgba(155, 221, 124)",
          borderColor: "rgba(155, 221, 124)",
          borderWidth: 0,
          pointStyle: true,
          pointStyle: "circle",
        },
        {
          label: "Guest",
          data: dataguest,
          backgroundColor: "rgba(233, 160, 160)",
          borderColor: "rgba(233, 160, 160)",
          borderWidth: 0,
          pointStyle: "circle",
        },
      ],
    };

    const newChartInstance = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        maintainAspectRatio: false,
        plugins: {
          title: {
            position: "top",
            align: "start",
            display: true,
            text: "Activities",
            font: {
              size: 17,
              weight: "bold",
            },
          },
          legend: {
            display: true,
            position: "top",
            align: "end",
            reverse: true,

            labels: {
              usePointStyle: true,
              boxWidth: 20,
              boxHeight: 6,

              generateLabels: function (chart) {
                const labels =
                  Chart.defaults.plugins.legend.labels.generateLabels(chart);
                labels.forEach((label) => {
                  // Increase spacing between user and guest legends
                  if (label.text === "User") {
                    label.text += "     ".repeat(20 / 8);
                  }
                  if (label.text === "Guest") {
                    label.text += "     ".repeat(20 / 8);
                  }
                });
                return labels;
              },
            },
          },
        },

        scales: {
          x: {
            grid: {
              display: false,
            },
            display: true,
            title: {
              display: true,
            },
            ticks: {
              font: {
                family: "Arial",
                size: 8,
              },
              color: "black",
              maxTicksLimit: 5,
            },
          },
          y: {
            display: true,
            ticks: {
              font: {
                family: "Arial",
                size: 8,
              },
              color: "black",
              maxTicksLimit: 5,
            },
          },
        },
      },
    });
    chartRef.current.chart = newChartInstance;

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
    <div>
      <section className="main">
        <div className="main-body">
          <div className="dashboard_header">
            <h1>Dashboard</h1>
            <div className="search_noti_profile">
              <input
                type="search"
                placeholder="Search..."
                className="search_bar"
              />
              <FaRegBell className="search_icon" />
              <div className="profile-image">
                <img src={photoURL} alt="User" />
              </div>
            </div>
          </div>
          <div className="card_container">
            <Cards />
          </div>

          <div className="chart-container">
            <canvas ref={chartRef} id="myChart"></canvas>
          </div>
          <div className="bottom_continer">
            <div className="Pie_chart_container">
              <canvas ref={pieChartRef} id="pieChart"></canvas>
            </div>
            <div className="today_schedule">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Today's schedule</h3>
                <p style={{ fontWeight: 100 }}>
                  See All <BiChevronRight style={{ fontWeight: 100 }} />
                </p>
              </div>

              <div class="row">
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
              </div>
              <div class="row">
                <div class="today_schedule_secondcard">
                  <p style={{ fontWeight: 500 }}>
                    Check operation at Giga Factory 1
                  </p>
                  <p style={{ fontWeight: 200 }}>
                    18:00-20:00
                    <br />
                    at Central Jakarta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
