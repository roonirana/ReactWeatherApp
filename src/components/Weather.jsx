import React, { useContext } from 'react';
import { WeatherContext } from '../api/WeatherContext';
import { ThemeContext } from './ThemeContext';

const Weather = () => {
    const { city, setCity, weatherData, error, getWeather } = useContext(WeatherContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <p className='bg-yellow-400'>hteiakjsdb jasbhbdjhasbdcahbsjch kjsadh</p>
            <div style={theme.container}>
                <div style={theme.card}>
                    <h1 style={theme.title}>Weather App</h1>
                    <input
                        type="text"
                        placeholder="Enter city name"
                        style={theme.input}
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button onClick={getWeather} style={theme.button}>Get Weather</button>
                    <button onClick={toggleTheme} style={theme.button}>
                        Toggle Theme
                    </button>
                    {error && <p style={theme.error}>{error}</p>}
                    {weatherData && (
                        <div style={theme.weather}>
                            <img src={weatherData.icon} alt="Weather icon" style={theme.icon} />
                            <p style={theme.temp}>{weatherData.temp}°C</p>
                            <p style={theme.desc}>Weather in {city} is {weatherData.main} with {weatherData.description}.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Weather;
