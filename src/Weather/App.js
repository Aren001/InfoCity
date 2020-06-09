import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import SearchBar from "./SearchBar";
import {withRouter} from 'react-router-dom'
import './weather.css';

const UNIT = "metric";
const APIKEY = "7b26b01ab33c1a9a53306bef272420ec";

class Weathers extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { data: "", city: "Sevan", forecastdata: "" };
    this.fetchData = this.fetchData.bind(this);
    this.fetchForecastData = this.fetchForecastData.bind(this);
    this. fetchWeatherData = this. fetchWeatherData.bind(this);
    // this.setWeatherData = this.setWeatherData.bind(this);
    this._isMounted = false;
  }

  // setWeatherData(data) {
  //   this.setState({ data });
  // }

  setForecastData(data) {
    const forecastdata = data.list.map(forecast => {
      return {
        date: new Date(forecast.dt * 1000).toString().split(" ")[0],
        temp: {
          high: forecast.main.temp_max,
          low: forecast.main.temp_min
        }
      };
    });

    let dict = {};
    for (let i = 0; i < forecastdata.length; i++) {
      const date = forecastdata[i].date;
      const max = forecastdata[i].temp.high;
      const min = forecastdata[i].temp.low;
      if (date in dict) {
        dict[date].min.push(min);
        dict[date].max.push(max);
      } else {
        dict[date] = { min: [min], max: [max] };
      }
    }

    let newdata = {};
    for (let key in dict) {
      const add = (a, b) => a + b;
      const min_avg = dict[key].min.reduce(add, 0) / dict[key].min.length;
      const max_avg = dict[key].max.reduce(add, 0) / dict[key].max.length;
      newdata[key] = {
        date: key,
        min: Math.round(min_avg),
        max: Math.round(max_avg)
      };
    }
    this.setState({ forecastdata: newdata });
  }

  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  fetchWeatherData(city) {
    const API = "https://api.openweathermap.org/data/2.5/weather";
    const URL = `${API}?q=${city}&appid=${APIKEY}&units=${UNIT}`;
    fetch(URL, { method: "get" })
      .then(this.handleErrors)
      .then(res => res.json())
      .then(result => {
         if (this._isMounted) {
          this.setState({
          data: result
        })}})
      .catch(err => err);
  }

  fetchForecastData(city) {
    const API = "https://api.openweathermap.org/data/2.5/forecast";
    const URL = `${API}?q=${city}&appid=${APIKEY}&units=${UNIT}`;
    fetch(URL, { method: "get" })
      .then(this.handleErrors)
      .then(res => res.json())
      .then(result => {
        if (this._isMounted) {
          this.setForecastData(result)
        }
      }
      )
      .catch(err => console.log(err));
  }

  fetchData(city) {
    this.fetchForecastData(city);
    this.fetchWeatherData(city);
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchData(this.state.city);
  };
  componentWillUnmount() {
    this._isMounted = false;
   
  };

  render() {
    if (this.state.data && this.state.forecastdata) {
      return (
        <div className="wrapper"  style={{border:'5px solid black'}}>
          <SearchBar onSubmit={this.fetchData} />
          <Weather {...this.state.data} />
          <Forecast {...this.state} />
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

export default withRouter(Weathers);
