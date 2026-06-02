import { NavLink } from "react-router-dom";
import '../styles/Navbar.css';
import { createTextScramble } from '../utils/textScramble';
import { useEffect, useRef } from 'react';
import { BsFillMoonFill } from "react-icons/bs";

export default function Navbar({ onThemeToggle }) {
    const navRefs = useRef([]);

    // hacker text scramble effect
    useEffect(() => {
        const cleanupFunctions = navRefs.current.map((element) => {
            if (element) {
                return createTextScramble(element, {
                    speed: 30,
                    iterationStep: 1/3
                });
            }
            return () => {};
        });

        return () => {
            cleanupFunctions.forEach(cleanup => cleanup());
        };
    }, []);

    return (
        <>
        <nav className="navbar top-navbar">
            <div className="container nav-container nav-width">
                <div className="profile-container">
                    <img src="/facepic.png" alt="Profile Picture" id="profile-pic" />
                    <div className="profile-info">
                        <h2 className="profile-name">Rishabh Shah</h2>
                        <p className="profile-title">Student, Photographer, Engineer</p>
                    </div>
                </div>
                <div className="social-links">
                    <a href="https://github.com/risshhabh" target="_blank" className="social-icon">
                        <img src="/github-icon.svg" className="social-svg" alt="GitHub" />
                    </a>
                    <a href="https://rishabhsh.medium.com" target="_blank" className="social-icon">
                        <img src="/medium-icon.svg" className="social-svg" alt="Medium" />
                    </a>
                    <a href="https://linkedin.com/in/rishabh-shah-58065531a" target="_blank" className="social-icon">
                        <img src="/linkedin-icon.svg" className="social-svg" alt="LinkedIn" />
                    </a>
                    <span className="nav-divider"></span>
                </div>
            </div>
            <button 
                onClick={onThemeToggle}
                className="dark-mode-toggle" 
                aria-label="Toggle Dark Mode"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="sun-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
                <BsFillMoonFill className="moon-icon" style={{ width: '18px', height: '18px' }} />
            </button>
        </nav>

        <nav className="navbar main-navbar">
            <div className="navbar-container">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <NavLink 
                            to="/about" 
                            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                            ref={el => navRefs.current[0] = el}
                        >
                            ABOUT
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink 
                            to="/projects" 
                            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                            ref={el => navRefs.current[1] = el}
                        >
                            PROJECTS
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}