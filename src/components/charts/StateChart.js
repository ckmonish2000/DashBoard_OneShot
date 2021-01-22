import React from 'react'
import { Doughnut,Bar,Line } from 'react-chartjs-2';
import {ChartParent} from "./chartStyles"

export default function StateChart(props) {
    const {Frequency}=props;
    return (
      
  <div style={ChartParent}>

  <Doughnut   
  
   data={{
     labels:Object.keys(Frequency),
     datasets: [{
       label: 'Colleges Based On State',
       data:Object.values(Frequency),
       backgroundColor: [
           'rgba(255, 99, 132, 0.2)',
           'rgba(54, 162, 235, 0.2)',
           'rgba(255, 206, 86, 0.2)',
           'rgba(75, 192, 192, 0.2)',
           'rgba(153, 102, 255, 0.2)',
           'rgba(255, 159, 64, 0.2)'
       ]}]
   }}
   options={{
     maintainAspectRatio: false,
     onClick:(evt,item)=>{if(typeof Object.keys(Frequency)[item[0]?._index]!=="undefined"){
       props.setState(Object.keys(Frequency)[item[0]?._index])
     }
    
    }
   }}
   />
 </div>
    )
}
