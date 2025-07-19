import  { useRef, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import SearchSection from "./components/SearchSection";
import HourlyWeatherItem from "./components/HourlyWeatherItem";
import { weatherCodes } from "./constants";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const [noResult, setNoResult] = useState(false);
  const searchInputRef = useRef(null);

  const filterHourlyForecast = (hourlyData) => {
    const currentHour = new Date().setMinutes(0, 0, 0);
    const next24Hour = currentHour + 24 * 60 * 60 * 1000;
    const filteredData = hourlyData.filter(({ time }) => {
      const forecastTime = new Date(time).getTime();
      return forecastTime >= currentHour && forecastTime <= next24Hour;
    });

    setHourlyWeather(filteredData);
  };

  const getWeatherDetails = async (API_URL) => {
    setNoResult(false); // Reset error flag

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(); // Error if response is not OK
      }

      const data = await response.json();
      const temperature = Math.floor(data.current.temp_c);
      const description = data.current.condition.text;
      const weatherIcon = Object.keys(weatherCodes).find((icon) =>
        weatherCodes[icon].includes(data.current.condition.code)
      );

      setCurrentWeather({ temperature, description, weatherIcon });

      const combinedHourlyData = [
        ...data.forecast.forecastday[0].hour,
        ...data.forecast.forecastday[1].hour,
      ];

      searchInputRef.current.value = data.location.name;
      filterHourlyForecast(combinedHourlyData);
    } catch {
      setNoResult(true); // Set error flag to true on failure
    }
  };

  return (
    <div className="container">
      <SearchSection
        getWeatherDetails={getWeatherDetails}
        searchInputRef={searchInputRef}
      />

      {/* Display the shaped alert box if no results found */}
      {noResult && (
        <div className="alert-box">
          <span className="alert-message">
            City not found. Please try again!
          </span>
          <button className="close-alert" onClick={() => setNoResult(false)}>
            &times;
          </button>
        </div>
      )}

      <div className="weather-section">
        <CurrentWeather currentWeather={currentWeather} />
        <div className="hourly-forecast">
          <ul className="weather-list">
            {hourlyWeather.map((hour) => (
              <HourlyWeatherItem key={hour.time_epoch} hour={hour} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
