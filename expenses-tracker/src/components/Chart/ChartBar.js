import React from "react";

import "../sass/component/Chart.scss";

//props from chart= key, label, value, maxValue

const ChartBar = (props) => {

  //vale of chart fill
  const chartHight = "0%";

  //height compared to the max
  if(props.max > 0){
    chartHight += ((props.height / props.max) * 100) + "%";
  }


  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: chartHight}}></div>
      </div>
      <div className="chart-bar__label"></div>
    </div>
  );
};
export default ChartBar;
