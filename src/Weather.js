import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Block from './Block'
import unixToDay from "./helper/unix_to_day";
import kelvinToCelsius from "./helper/kelvin_to_celsius";

const weatherKey = process.env.REACT_APP_OPEN_WEATHER;


const handleClick = (e) => {
  console.log(e.target)
}


const Weather = () => {
  // state setup
  const [currentWeather, SetCurrentWeather] = useState({
    weather: [0],
    main: {
      temp_max: null,
      temp_min: null,
    }
  });

  const [foreCasts, SetforeCasts] = useState([])

  // api's called once
  useEffect(() => {
    requestWeather();
    requestforeCasts();
  }, [])

  async function requestWeather() {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=49.28&lon=-123.11&appid=${weatherKey}`
    );
    SetCurrentWeather(res.data)
  }

  async function requestforeCasts() {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=49&lon=-123.11&exclude={part}&appid=${weatherKey}`
    );
    console.log(res.data)
    SetforeCasts(res.data.daily)
    console.log('SetforeCasts', foreCasts);
  }


  return (
    <div className='container'>
      {/* <Block
        day={unixToDay(currentWeather.dt)} icon={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
        max={kelvinToCelsius(currentWeather.main.temp_max)}
        min={kelvinToCelsius(currentWeather.main.temp_min)}
        selected={true}
        onClick={handleClick}

      /> */}

      {foreCasts.map((foreCast) => (
        <Block
          day={unixToDay(foreCast.dt)}
          icon={`http://openweathermap.org/img/wn/${foreCast.weather[0].icon}@2x.png`}
          max={kelvinToCelsius(foreCast.temp.max)}
          min={kelvinToCelsius(foreCast.temp.min)}
          selected={false}
          onClick={handleClick}

        />
      ))}

    </div>

  )


}



export default Weather;


