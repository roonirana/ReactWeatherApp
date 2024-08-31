import React from 'react';
import Weather from './components/Weather';
import { WeatherProvider } from './api/WeatherContext';
import { ThemeProvider } from './components/ThemeContext';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <ThemeProvider>
            <WeatherProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/weather" element={<Weather />} />
                    </Routes>
                </Router>
            </WeatherProvider>
        </ThemeProvider>
    );
};

export default App;
