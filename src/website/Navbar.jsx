import { NavLink, useLocation } from 'react-router-dom';
import React, { useEffect, useRef, useContext, useState } from "react";
import Typed from "typed.js";
import { ThemeContext } from './App';
import './Navbar.css';
import { AiFillHome, AiOutlineProject, AiOutlineCloud, AiOutlineCheckCircle, AiOutlineMail } from 'react-icons/ai';
import { FiSun, FiMoon } from 'react-icons/fi';

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const el = useRef(null);
    const location = useLocation();
    const dropdownRef = useRef(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // --- ADDED: Refs for the menu and its button ---
    const collapseRef = useRef(null);
    const togglerRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Developer", "Writer", "Programmer", "Coder", "Player"],
            typeSpeed: 50,
            loop: true,
            loopCount: Infinity,
            cursorChar: "|"
        });
        return () => typed.destroy();
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // --- ADDED: This useEffect handles clicks outside the hamburger menu ---
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                collapseRef.current &&
                collapseRef.current.classList.contains('show') &&
                !collapseRef.current.contains(event.target) &&
                !togglerRef.current.contains(event.target)
            ) {
                togglerRef.current.click();
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setDropdownOpen(false);
    }, [location]);

    const isProjectsMain = location.pathname === "/react-1/projects";
    const isMoreProjects = location.pathname.startsWith("/react-1/projects/foodcorner") ||
                           location.pathname.startsWith("/react-1/projects/under-development");

    return (
        <div className="my-block">
            <div className="container">
                <nav className="navbar nav-bg navbar-expand-lg navbar-light py-3">
                    <div className="container-fluid">

                        <h1 className="fs-4 fw-bold mb-0">
                            <NavLink className="navbar-brand brand-glow" to="/react-1">
                                Deepanshu <span ref={el} id="my-name" className="my-logo"></span>
                            </NavLink>
                        </h1>

                        <div className="d-flex align-items-center">
                            <button
                                onClick={toggleTheme}
                                className="theme-toggle-btn d-lg-none me-2"
                                aria-label="Toggle theme"
                                title="Toggle theme"
                            >
                                {theme === 'light' ? <FiMoon className="theme-icon" /> : <FiSun className="theme-icon" />}
                            </button>
                            {/* --- ADDED: ref is attached to the hamburger button --- */}
                            <button 
                                ref={togglerRef}
                                className="navbar-toggler" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#navbarSupportedContent" 
                                aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                        {/* --- ADDED: ref is attached to the collapsible menu --- */}
                        <div ref={collapseRef} className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "nav-link is-active animated-icon" : "nav-link not-active animated-icon"} to="/react-1" end>
                                        <AiFillHome className="me-1" /> Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={isProjectsMain ? "nav-link is-active animated-icon" : "nav-link not-active animated-icon"} to="/react-1/projects">
                                        <AiOutlineProject className="me-1" /> Projects
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "nav-link is-active animated-icon" : "nav-link not-active animated-icon"} to="/react-1/weather">
                                        <AiOutlineCloud className="me-1" /> Check Weather
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "nav-link is-active animated-icon" : "nav-link not-active animated-icon"} to="/react-1/todo">
                                        <AiOutlineCheckCircle className="me-1" /> Todo App
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "nav-link is-active animated-icon" : "nav-link not-active animated-icon"} to="/react-1/form">
                                        <AiOutlineMail className="me-1" /> Contact Us
                                    </NavLink>
                                </li>
                                <li ref={dropdownRef} className="nav-item dropdown-parent">
                                    <button
                                        className={`nav-link dropdown-button ${isMoreProjects ? 'is-active' : 'not-active'}`}
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                    >
                                        Further Innovations 
                                        <span className={`dropdown-icon ${dropdownOpen ? 'open' : ''}`}>▼</span>
                                    </button>
                                    <ul className={`custom-dropdown ${dropdownOpen ? 'open' : ''}`}>
                                        <li>
                                            <NavLink 
                                                className={({ isActive }) => isActive ? "dropdown-item is-active" : "dropdown-item not-active"} 
                                                to="/react-1/projects/foodcorner"
                                                onClick={() => setDropdownOpen(false)}
                                            >
                                                Food Corner
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink 
                                                className={({ isActive }) => isActive ? "dropdown-item is-active" : "dropdown-item not-active"} 
                                                to="/react-1/projects/under-development"
                                                onClick={() => setDropdownOpen(false)}
                                            >
                                                Under Development
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item ms-lg-1 d-none d-lg-block">
                                    <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme" title="Toggle theme">
                                        {theme === 'light' ? <FiMoon className="theme-icon" /> : <FiSun className="theme-icon" />}
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