import React from 'react';
import { Line } from 'react-chartjs-2';
import './Chart.css'

const Chart = ({dailyData,categories}) => {
    const data = {
      labels: [
       ...categories
      ],
      datasets: [
        {
          label: 'Daily Cases',
          data: [...dailyData.data],
          fill: false,          // Don't fill area under the line
          borderColor: 'green'  // Line color
        }
      ]
    }

    const options = {
      maintainAspectRatio: true	// Don't maintain w/h ratio
    }

    return (
      <div >
        
          
        <article className="chart-container" >
          <Line data={data} options={options}/>
        </article>
      </div>
    );
  }

export default Chart