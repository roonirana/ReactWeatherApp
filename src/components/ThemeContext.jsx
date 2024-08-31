import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const theme = {
        container: {
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isDarkTheme ? '#333' : '#f0f0f0',
            color: isDarkTheme ? '#f0f0f0' : '#333',
            fontFamily: 'Arial, sans-serif',
        },
        card: {
            backgroundColor: isDarkTheme ? '#444' : '#108daa',
            color: isDarkTheme ? '#f0f0f0' : '#333',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 20px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            width: '100%',
            maxWidth: '350px',
        },
        button: {
            padding: '10px 15px',
            backgroundColor: isDarkTheme ? 'wheat' : 'purple',
            color: isDarkTheme ? 'black' : 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            margin: '5px',
        },
        input: {
            padding: '10px',
            width: '100%',
            fontSize: '16px',
            borderRadius: '5px',
            // border: isDarkTheme ? '1px solid #666' : '1px solid #ccc',
            border: 'none',
            marginBottom: '15px',
            backgroundColor: isDarkTheme ? '#555' : '#fff',
            color: isDarkTheme ? '#f0f0f0' : '#333',
        },
        error: {
            color: 'red',
            marginTop: '15px',
        },
        weather: {
            marginTop: '20px',
        },
        icon: {
            height: '80px',
            marginBottom: '10px',
        },
        temp: {
            fontSize: '2rem',
            fontWeight: 'bold',
            color: isDarkTheme ? '#f0f0f0' : '#333',
        },
        desc: {
            fontSize: '1.2rem',
            color: isDarkTheme ? '#bbb' : '#555',
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };
