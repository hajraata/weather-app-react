import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import Search from "./Search";
import WeatherDisplay from "./WeatherDisplay";

class App extends React.Component {
  state = { weather_data: {} };
  onSearchSubmit = async (term) => {
    const res = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: term,
          appid: "",
          units: "metric",
        },
      }
    );

    this.setState({ weather_data: res.data.main });
    console.log(this.state.weather_data);
  };
  render() {
    return (
      <div>
        <div
          style={{
            width: "50%",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Weather Updates</h2>
        </div>
        <Search onSubmit={this.onSearchSubmit} />
        <WeatherDisplay weather_data={this.state.weather_data} />
      </div>
    );
  }
}

export default App;
