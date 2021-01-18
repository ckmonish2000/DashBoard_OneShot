import React from 'react'
import { Doughnut,Bar,Line } from 'react-chartjs-2';
import {ChartParent} from "./chartStyles"

export default function StateChart(props) {
    const {Courses}=props;
    return (
      
        <div style={ChartParent}>
    
        <Line 
         data={{
           labels:Object.keys(Courses),
           datasets: [{
             label: 'Colleges Based On Courses',
             data:Object.values(Courses),
             backgroundColor: [
                 'rgba(255, 99, 132, 0.2)',
                 'rgba(54, 162, 235, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(75, 192, 192, 0.2)',
                 'rgba(153, 102, 255, 0.2)',
                 'rgba(255, 159, 64, 0.2)'
             ]}]
         }}
         options={{ maintainAspectRatio: false }}
         />
       </div>
    )
}
