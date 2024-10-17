
const CurrentWeather = ({currentWeather}) => {
  return (
    <div className="current-weather">
      <img src="/cloudy.png" alt="" className="weather-icon" />
      <h2 className="temperature">
        {currentWeather.temperature} <span> ◦c </span>
      </h2>
      <p className="description">{currentWeather.description}</p>
    </div>
  );
}

export default CurrentWeather