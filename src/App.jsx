import CurrentWeather from "./components/CurrentWeather";
import SearchSection from "./components/SearchSection";
import HourlyWeatherItem from "./components/HourlyWeatherItem";
import {weatherCodes} from "./constants";
import { useState } from "react";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({})
  // Fetch weather data for the current location
  const getWeatherDetails = async(API_URL) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const temperature = Math.floor(data.current.temp_c);
      const description = data.current.condition.text;
const weatherIcon = Object.keys(weatherCodes).find((icon) =>
  weatherCodes[icon].includes(data.current.condition.code)
);


      setCurrentWeather({ temperature, description, weatherIcon });

      
    } catch (error) {
      // Handle error if API call fails
      console.error('Error fetching weather data:', error);
      
    }
    

  }
  return (
    <div className="container">
      <SearchSection getWeatherDetails={getWeatherDetails} />
      <div className="weather-section">
        <CurrentWeather currentWeather={currentWeather} />
        <div className="hourly-forecast">
          <ul className="weather-list">
         <HourlyWeatherItem />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
