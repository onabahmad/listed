import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../assets/LineChart.css";

const Linechart = () => {
  const chartRef = useRef(null);
  const userdata = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData);
    const datatime = actualData.cases_time_series.map((item) => item.date);
    const datauser = actualData.cases_time_series.map(
      (item) => item.totalconfirmed
    );
    const dataguest = actualData.cases_time_series.map(
      (item) => item.totalrecovered
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
  };
  useEffect(() => {
    userdata();
  }, []);
  return (
    <div className="card">
      <canvas ref={chartRef} id="myChart"></canvas>
    </div>
  );
};

export default Linechart;
