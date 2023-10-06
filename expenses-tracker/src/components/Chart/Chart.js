import React from "react";

import ChartBar from "./ChartBar";
import "../sass/component/Chart.scss";

const Chart = (props) => {
  //Helper Array, Array of Numbers
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  //max Ammounts
  const totalMaximum = Math.max(...dataPointValues);


  return (
    <div className="chart">
      {
        //create ChartBar as many chartbar Components as we habe data points
        props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
          />
        ))
      }
    </div>
  );
};
export default Chart;
