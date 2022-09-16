import React from "react";
import "./WeatherDisplay.css";

class WeatherDisplay extends React.Component {
  render() {
    let display;
    if (this.props.weather_data.temp !== undefined) {
      display = (
        <div className="data-container">
          <div className="temp">
            <h1>{this.props.weather_data.temp}°C</h1>
          </div>
          <div className="feels-like">
            <h4>Feels Like {this.props.weather_data.feels_like}°C</h4>
          </div>
          <div className="weather-details">
            <div className="humidity">
              <h4>Humidity: {this.props.weather_data.humidity}%</h4>
            </div>
            <div className="max">
              <h4>Highest Temp: {this.props.weather_data.temp_max}°C </h4>
            </div>
            <div className="min">
              <h4>Lowest Temp: {this.props.weather_data.temp_min}°C </h4>
            </div>
          </div>
        </div>
      );
    } else {
      display = (
        <div className="no-data">
          <h4>Enter a city name to view weather conditions</h4>
        </div>
      );
    }
    return <div className="weather">{display}</div>;
  }
}

export default WeatherDisplay;
