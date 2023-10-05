import React from "react";

import ChartBar from "./ChartBar";
import "../sass/component/Chart.scss";

const Chart = (props) => {
  return (
    <div className="chart">
      {
        //create ChartBar as many chartbar Components as we habe data points
        props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={null}
          />
        ))
      }
    </div>
  );
};
export default Chart;
