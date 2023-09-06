import React, { useState, createContext } from "react";
import { useEffect } from "react";

import './BodyTheme.scss';


export const ThemeContext = createContext(null);


export default function BodyTheme({ children }) {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };


    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div className='App' id={theme === "light" ? "light" : "dark"}>
                    {children}
                </div>
            </ThemeContext.Provider>


        </>
    )
}