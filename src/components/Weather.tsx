import * as React from "react";
import { useState } from "react";
import axios from "axios";
//
import "../styles/Weather.css";

function Weather() {

    const [weather, setWeather] = useState([]);

    const datasource = "https://api.openweathermap.org/data/3.0/onecall?lat=59.93&lon=30.33&units=metric&appid=7f2ba21c9ebb4a387740f763d24a1078"

   // const datasource = "https://api.openweathermap.org/data/3.0/onecall?lat=38.8&lon=12.09&callback=test"

    if(!weather.length) {
      axios.get(datasource).then( wdata => {
          console.log(wdata);
          setWeather(wdata.data);
      });
    }
    return (
        <table>
            <thead>

                <tr>
                    <th>Minute</th>
                    <th>Hour</th>
                    <th>Day</th>
                </tr>
            </thead>
            <tbody>
            {weather.map(temperature =>
              <tr>
                <td>{temperature.current.temp}</td>
                <td>{temperature.hourly.temp}</td>
                <td>{temperature.daily.temp}</td>
              </tr>
                     )}
            </tbody>
        </table>
      );

}

export default Weather;
