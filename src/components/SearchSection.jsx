const SearchSection = ({getWeatherDetails, searchInputRef}) => {
    const handleCitySearch = (e) => {
        e.preventDefault();
        const searchInput = e.target.querySelector('.search-input');
        // Perform API call to fetch weather data for the entered city
        const API_KEY = import.meta.env.VITE_API_KEY; 
        const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}&days=2`;
        getWeatherDetails(API_URL)
    }

  const handleLocationSearch = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=2`;
        getWeatherDetails(API_URL)
      },
      (error) => {
        console.error(error);
      }
    );
  };
      
  return (
    <div className="search-section">
      <form action="" className="search-form" onSubmit={handleCitySearch}>
        <span className="material-symbols-rounded">search</span>
        <input
          type="search"
          placeholder="Enter the city name"
          required
          className="search-input"
          ref={searchInputRef}
        />
      </form>
      <button className="location-button" onClick={handleLocationSearch}>
        <span className="material-symbols-rounded">my_location</span>{" "}
      </button>
    </div>
  );
}

export default SearchSection