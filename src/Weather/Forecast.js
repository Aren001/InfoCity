import React from "react";

const Forecast = ({ forecastdata, unit }) => {
  const forecastElements = Object.keys(forecastdata).map((key, i) => (
    <div className="block" key={i}>
      <h3 className="secondary">{key}</h3>
      <h2 className="high">{forecastdata[key].max}</h2>
      <h4 className="secondary">{forecastdata[key].min}</h4>
    </div>
  ));

  return (
    <div className="forecast" id="forecast">
      {forecastElements}
    </div>
  );
};

export default Forecast;
