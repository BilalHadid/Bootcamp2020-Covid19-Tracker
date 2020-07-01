import React, { useState } from "react";

import { Pie, Bar } from "react-chartjs-2";
import { Button } from "@material-ui/core";
export const ChartBar = ({ allData }) => {
  const state = {
    charData: {
      labels: ["Total Confirmed", "Total Deaths", "Total Recovered"],
      datasets: [
        {
          label: "Population",
          data: [
            allData.TotalConfirmed,
            allData.TotalDeaths,
            allData.TotalRecovered,
          ],
          backgroundColor: [
            "#8300E4", //total Confirmd #8300E4
            "#FF006A", //Total Death #FF006A
            "#00F1A5", //total Reacovered #00F1A5
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(255, 99, 132, 0.6)",
          ],
        },
      ],
    },
  };

  const [set, setSet] = useState(false);
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setSet(!set)}
      >
        {!set ? "Change Pie to Bar" : "Change Bar to Pie"}
      </Button>
      {set ? (
        <Pie
          data={state.charData}
          options={{
            title: {
              display: true,
              // text: 'Largest Population are effected covid 19',
              fontSize: 25,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      ) : (
        <Bar
          data={state.charData}
          options={{
            title: {
              display: true,
              // text: 'Largest Population are effected covid 19',
              fontSize: 25,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      )}
      {/* <Pie
        data={state.charData}
        options={{
          title: {
            display: true,
            // text: 'Largest Population are effected covid 19',
            fontSize: 25,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      /> */}
    </div>
  );
};
