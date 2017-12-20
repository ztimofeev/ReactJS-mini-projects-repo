import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
renderWeather(cityData) {
  const name = cityData.city.name;
  const temps = cityData.list.map(weather => Math.round((weather.main.temp - 272.15), 2));
  const pressures = cityData.list.map(weather => weather.main.pressure);
  const humiditis = cityData.list.map(weather => weather.main.humidity);

  return (
    <tr key={name}>
      <td>{name}</td>
      <td><Chart data={temps} color="orange" units="&deg;C" /></td>
      <td><Chart data={pressures} color="blue" units="hPa" /></td>
      <td><Chart data={humiditis} color="red" units="%" /></td>
    </tr>
  )
};

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}
//аргумента на функцията е еквивалент на state.weather
function mapStateToProps({ weather }) {
  return { weather }; //  { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);