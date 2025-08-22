import React, { useState, useEffect, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Form from "./Form";
import Navbar from "./Navbar";
import TodoApp from "./TodoApp";
import Page from "./projects/Page";
import WeatherApp from "./WeatherApp";
import FoodCorner from "./projects/FoodCorner";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './index.css';

// Create the context
export const ThemeContext = createContext(null);

function App() {
    // State to manage the theme, saved to localStorage
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    // Function to toggle the theme
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    // Apply the theme class to the <body> tag
    useEffect(() => {
        document.body.className = '';
        document.body.classList.add(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Navbar />
            <Routes>
                <Route path="/react-1" element={<Home />} />
                <Route path="/react-1/form" element={<Form />} />
                <Route path="/react-1/todo" element={<TodoApp />} />
                <Route path="/react-1/projects/foodcorner" element={<FoodCorner />} />
                <Route path="/react-1/projects/foodcorner/:id" element={<Page />} />
                <Route path="/react-1/weather" element={<WeatherApp />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </ThemeContext.Provider>
    );
};

export default App;