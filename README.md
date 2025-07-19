# 🌤️ Weather Predict - Modern Weather App

A beautiful, modern weather application built with React and Vite, featuring a stunning glass morphism design and real-time weather data.

[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/ebrahimbeiati/weather-predict)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4.9-purple?style=for-the-badge&logo=vite)
![Weather API](https://img.shields.io/badge/WeatherAPI-Free-green?style=for-the-badge)

## ✨ Features

### 🌟 **Modern Design**
- **Glass morphism interface** with backdrop blur effects
- **Beautiful gradient backgrounds** and smooth animations
- **Responsive design** that works on all devices
- **Professional typography** with Inter and Poppins fonts
- **Hover effects** and micro-interactions

### 🌍 **Weather Functionality**
- **Real-time weather data** from WeatherAPI
- **Current weather conditions** with temperature and description
- **24-hour hourly forecast** with detailed predictions
- **Location-based weather** using geolocation
- **City search** with autocomplete suggestions

### 🎨 **User Experience**
- **Smooth animations** and transitions
- **Custom scrollbars** with hover effects
- **Error handling** with elegant alert messages
- **Loading states** and responsive feedback
- **Accessible design** with proper contrast

## 🚀 Live Demo

**[View Live Demo](https://weather-predict-ebrahim.vercel.app)**

## 📸 Screenshots

### Desktop View
![Desktop View](screenshots/desktop.png)

### Mobile View
![Mobile View](screenshots/mobile.png)

## 🛠️ Technologies Used

- **React 18.2.0** - Modern React with hooks
- **Vite 5.4.9** - Fast build tool and dev server
- **WeatherAPI** - Real-time weather data
- **CSS3** - Modern styling with glass morphism
- **Material Symbols** - Beautiful icons
- **Google Fonts** - Inter and Poppins typography

## 📦 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/ebrahimbeiati/weather-predict.git
   cd weather-predict
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create a .env file in the root directory
   echo "VITE_API_KEY=your_weather_api_key_here" > .env
   ```

4. **Get WeatherAPI Key**
   - Visit [WeatherAPI.com](https://www.weatherapi.com/)
   - Sign up for a free account
   - Copy your API key
   - Add it to the `.env` file

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Enjoy your weather app! 🌤️

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```
weather-predict/
├── public/
│   ├── bg.png
│   ├── clear.png
│   ├── clouds.png
│   ├── mist.png
│   ├── moderate_heavy_rain.png
│   ├── part-rain.png
│   ├── rain.png
│   ├── snow.png
│   ├── thunder_rain.png
│   └── thunder.png
├── src/
│   ├── components/
│   │   ├── CurrentWeather.jsx
│   │   ├── HourlyWeatherItem.jsx
│   │   └── SearchSection.jsx
│   ├── App.jsx
│   ├── constants.js
│   ├── index.css
│   └── main.jsx
├── .env
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🎯 Key Components

### `App.jsx`
- Main application component
- Manages weather data state
- Handles API calls and error states
- Coordinates between components

### `SearchSection.jsx`
- City search functionality
- Location-based weather button
- Form handling and validation

### `CurrentWeather.jsx`
- Displays current weather conditions
- Shows temperature, description, and weather icon
- Responsive design for all screen sizes

### `HourlyWeatherItem.jsx`
- Individual hourly forecast items
- Weather icon, time, and temperature display
- Hover effects and animations

## 🌐 API Integration

The app uses **WeatherAPI** for real-time weather data:

- **Current Weather**: Temperature, conditions, and descriptions
- **Hourly Forecast**: 24-hour detailed predictions
- **Location Data**: City names and coordinates
- **Weather Icons**: Visual representation of conditions

### API Endpoints Used
```javascript
// Current and forecast weather
GET https://api.weatherapi.com/v1/forecast.json?key={API_KEY}&q={LOCATION}&days=2

// Geolocation weather
GET https://api.weatherapi.com/v1/forecast.json?key={API_KEY}&q={LAT},{LON}&days=2
```

## 🎨 Design System

### Color Palette
- **Primary Gradient**: `#667eea` to `#764ba2`
- **Glass Background**: `rgba(255, 255, 255, 0.1)`
- **Text Colors**: White with various opacity levels
- **Accent Colors**: Subtle whites and grays

### Typography
- **Body Font**: Inter (clean, modern)
- **Headings**: Poppins (elegant, readable)
- **Icons**: Material Symbols Rounded

### Spacing & Layout
- **Border Radius**: 16px for cards, 24px for container
- **Padding**: Consistent 24px spacing
- **Gap**: 12px-20px between elements
- **Responsive**: Mobile-first approach

## 📱 Responsive Design

The app is fully responsive with breakpoints:

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

### Mobile Optimizations
- Compact layout with smaller elements
- Touch-friendly button sizes
- Optimized spacing for small screens

### Desktop Enhancements
- Larger weather icons and text
- Enhanced hover effects
- Better use of screen real estate

## 🔒 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_KEY=your_weather_api_key_here
```

**Important**: Never commit your API key to version control!

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Add environment variables in Netlify dashboard

### Other Platforms
The app can be deployed to any static hosting service:
- GitHub Pages
- Firebase Hosting
- AWS S3
- Cloudflare Pages

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines
- Follow React best practices
- Use meaningful component and variable names
- Add comments for complex logic
- Ensure responsive design
- Test on multiple devices

## 🐛 Troubleshooting

### Common Issues

**API Key Not Working**
- Ensure your API key is correct
- Check if you've exceeded the free tier limits
- Verify the `.env` file is in the root directory

**Build Errors**
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for syntax errors in components
- Ensure all dependencies are installed

**Styling Issues**
- Clear browser cache
- Check for CSS conflicts
- Verify all CSS classes are properly applied

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **WeatherAPI** for providing weather data
- **React Team** for the amazing framework
- **Vite Team** for the fast build tool
- **Google Fonts** for beautiful typography
- **Material Design** for icon inspiration

## 📞 Support

If you have any questions or need help:

- **Create an issue** on GitHub
- **GitHub**: [@ebrahimbeiati](https://github.com/ebrahimbeiati)
- **Email**: ebrahim.beiati@gmail.com

---

<div align="center">

**Made with ❤️ by Ebrahim Beiati**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ebrahimbeiati)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ebrahim-beiati)

</div>
