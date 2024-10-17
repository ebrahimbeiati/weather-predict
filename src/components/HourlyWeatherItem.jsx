
const HourlyWeatherItem = () => {
  return (
    <div>
      
      <li className="weather-item">
        <p className="time">00.00</p>
              <img src="/sunny.png" alt="" className="weather-icon" />
              <p className="temperature">
                20 <span> ◦c </span>
              </p>
             
      </li>
    </div>
  );
}

export default HourlyWeatherItem