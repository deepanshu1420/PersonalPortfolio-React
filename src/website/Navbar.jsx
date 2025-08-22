import { NavLink } from 'react-router-dom';
import React, { useEffect, useRef, useContext } from "react";
import Typed from "typed.js";
import { ThemeContext } from './App';

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Developer", "Writer", "Programmer", "Coder", "Player"],
            typeSpeed: 50, loop: true, loopCount: Infinity, cursorChar: "|"
        });
        return () => { typed.destroy(); };
    }, []);

    return (
        <div className="my-block">
            <div className="container">
                <nav className="navbar nav-bg navbar-expand-lg navbar-light py-3">
                    <div className="container-fluid">
                        
                        {/* Brand/Logo stays on the left */}
                        <h1 className='fs-4 fw-bold'>
                            <NavLink className="navbar-brand" to="/react-1">Deepanshu <span ref={el} id="my-name" className='my-logo'></span></NavLink>
                        </h1>

                        {/* --- THIS IS THE FIX: A new container for the action buttons on the right --- */}
                        <div className="d-flex align-items-center">
                            {/* Mobile-only theme toggle, now positioned here */}
                            <button onClick={toggleTheme} className="theme-toggle-btn d-lg-none me-2">
                                {theme === 'light' ? '🌙' : '☀️'}
                            </button>

                            {/* Hamburger menu button */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                                {/* Nav Links */}
                                <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link is-active" : "nav-link not-active"} to="/react-1" end>Home</NavLink></li>
                                <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link is-active" : "nav-link not-active"} to="/react-1/weather">Check Weather</NavLink></li>
                                <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link is-active" : "nav-link not-active"} to="/react-1/todo">Todo App</NavLink></li>
                                <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link is-active" : "nav-link not-active"} to="/react-1/form">Contact Us</NavLink></li>
                                
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle not-active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        More Projects
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><NavLink className="dropdown-item" to="/react-1/projects/foodcorner">Food Corner</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/react-1">Under Development</NavLink></li>
                                    </ul>
                                </li>

                                {/* Desktop-only theme toggle button */}
                                <li className="nav-item ms-lg-3 d-none d-lg-block">
                                    <button onClick={toggleTheme} className="theme-toggle-btn">
                                        {theme === 'light' ? '🌙' : '☀️'}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
export default Navbar;