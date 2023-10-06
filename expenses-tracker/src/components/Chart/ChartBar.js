import React from "react";

import "../sass/component/Chart.scss";

//props from chart= key, label, value, maxValue

const ChartBar = (props) => {

  //vale of chart fill
  let chartHight = "0%";

  //height compared to the max
  if(props.maxValue > 0){
    chartHight = Math.round((props.value / props.maxValue) * 100) + "%";
  }


  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: chartHight}}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
