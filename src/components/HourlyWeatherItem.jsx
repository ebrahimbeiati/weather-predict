import { weatherCodes } from "../constants";
const HourlyWeatherItem = ({ hour }) => {
  const weatherIcon = Object.keys(weatherCodes).find((icon) =>
    weatherCodes[icon].includes(hour.condition.code)
  );
  const temperature = Math.floor(hour.temp_c);
  const time = hour.time.slice(11, 16);
  
  return (
    <div>
      <li className="weather-item">
        <p className="time">{time}</p>
        <img src={`/${weatherIcon}.png`} alt="" className="weather-icon" />
        <p className="temperature">
           <span> {temperature}◦c </span>
        </p>
      </li>
    </div>
  );
};

export default HourlyWeatherItem