import React, { createContext, useState } from 'react';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState("");

    const API_key = "efeb18b0f66dcc4837185d3e98f590c4";
    
    const getWeather = () => {
        if (city === "") {
            setError("Please enter a city name.");
            setWeatherData(null);
            return;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const iconcode = data.weather[0].icon;
                const iconurl = `http://openweathermap.org/img/w/${iconcode}.png`;
                const temp = Math.round(data.main.temp - 273);

                setWeatherData({
                    main: data.weather[0].main,
                    description: data.weather[0].description,
                    temp,
                    icon: iconurl,
                });
                setError("");
            })
            .catch(() => {
                setError("Unable to fetch weather data. Please check the city name.");
                setWeatherData(null);
            });
    };

    return (
        <WeatherContext.Provider value={{ city, setCity, weatherData, error, getWeather }}>
            {children}
        </WeatherContext.Provider>
    );
};

export { WeatherProvider, WeatherContext };
