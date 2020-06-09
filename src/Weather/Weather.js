import React from "react";

function getWeatherIconClassName(icon) {
  const icon_str = icon.substr(0, 2);
  switch (icon_str) {
    case "01":
      return "wi wi-day-sunny";
    case "02":
      return "wi wi-day-sunny-overcast";
    case "03":
      return "wi wi-cloud";
    case "04":
      return "wi wi-cloudy";
    case "09":
      return "wi wi-showers";
    case "10":
      return "wi wi-rain";
    case "11":
      return "wi wi-thunderstorm";
    case "13":
      return "wi wi-snow";
    case "50":
      return "wi wi-fog";
    default:
      return "wi";
  }
}

function formatDateTime(dt) {
  const dtarr = new Date(dt * 1000).toString().split(" ");
  const formated_dt = dtarr[0] + " " + dtarr[4].substring(0, 5);
  return formated_dt;
}

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { unit: "C" };
  }

  render() {
    // Deconstruct openWeather Data
    const {
      name,
      main: { temp, humidity },
      wind: { speed },
      weather: [{ description, icon }],
      dt
    } = this.props;

    const { unit } = this.state;
    return (
      <div className="panel">
        <h2 className="city" id="city">
          {name}
        </h2>
        <div className="weather" id="weather">
          <div className="group secondary">
            <h3 id="dt">{formatDateTime(dt)}</h3>
            <h3 id="description">{description}</h3>
          </div>
          <div className="group secondary">
            <h3 id="wind">Wind: {speed} mph</h3>
            <h3 id="humidity">Humidity: {humidity} %</h3>
          </div>
          <div className="temperature" id="temperature">
            <h1 className="temp" id="temp">
              <i className={getWeatherIconClassName(icon)} id="condition" />
              {unit === "C" ? (
                <span id="num">{Math.round(temp)}</span>
              ) : (
                  <span id="num">{Math.round(temp * 1.8 + 32)}</span>
                )}
              <a
                className={unit === "C" ? "fahrenheit" : "fahrenheit active"}
                id="fahrenheit"
                onClick={() => this.setState({ unit: "F" })}
              >
                &deg;F
              </a>
              <span className="divider secondary">|</span>
              <a
                className={unit === "C" ? "celsius active" : "celsius"}
                id="celsius"
                onClick={() => this.setState({ unit: "C" })}
              >
                &deg;C
              </a>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
