import React, { useEffect } from 'react';
// Change the SVG import to treat it as a React Component
import { ReactComponent as Img } from '../images/img74.svg';
import { NavLink } from 'react-router-dom';
// Import gsap and the useGSAP hook
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// ✅ IMPORT THE ICONS
import { FaPaperPlane, FaCloudSun, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Typed from 'typed.js';


const Home = () => {
    // Add the animation logic inside the Home component
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".my-img-1", {
            scale: 0,
            delay: 0.5,
            duration: 0.4
        });

        tl.to(".my-img-1", {
            scale: 0.9,
            repeat: -1,
            yoyo: true,
            duration: 0.8
        });
    });

    // Typed.js for the profession line
    useEffect(() => {
        const typed = new Typed('#typed-js', {
            strings: [
                'Software Developer',
                'UI/UX Designer',
                'Web Developer',
                'Prompt Engineer',
                'Software Debugger'
            ],
            typeSpeed: 60,
            backSpeed: 35,
            backDelay: 1400,
            startDelay: 300,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <div className="container">
                <section className="header d-flex align-items-center">
                    <div className="row">
                        <div className="col-12 head-box col-md-6 col-xl-6 temp-1 d-flex flex-column justify-content-center order-2 order-lg-1 px-4">
                            <h1 className="fw-bolder fs-1 lh-base lg-heading">
                            Hi, I am <span>Deepanshu</span> Sharma 
                            </h1>
                            {/* replaced static line with typed span — same place as before */}
                            <h4 className="fw-bolder mt-4">I am a <span id="typed-js" className="typed">Software Developer</span></h4>
                            <p className="sm-text fw-light desc my-3">I am a software developer focused on crafting scalable, high-performance applications. With expertise in software design and AI prompt engineering for LLMs like ChatGPT and Gemini, I build intelligent, interactive solutions that merge automation with real-world usability.</p>
                            
                            {/* ✅ Added mt-4 for extra spacing */}
                            <div className="btns d-flex gap-5 mb-5 mt-4">
                                <NavLink to="/react-1/form">
                                    <button type="button" className="btn fw-normal btn-primary text-capitalize interactive-btn">
                                        <span>contact us</span>
                                        <FaPaperPlane className="btn-icon" />
                                    </button>
                                </NavLink>
                                <NavLink to="/react-1/weather">
                                    <button type="button" className="btn fw-normal btn-primary text-capitalize interactive-btn">
                                        <span>Check Weather</span>
                                        <FaCloudSun className="btn-icon" />
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-12 head-img-box col-md-6 col-xl-6 temp-2 text-end order-1 order-lg-2">
                            {/* Use the imported SVG as a component */}
                            <Img className="img-fluid my-img-1" />
                        </div>
                    </div>
                </section>

                <div className="para">
                    <h1 className='fw-normal fs-1 mb-4 px-3 px-lg-0'>We deliver top notch SaaS .Every <span className='fw-bolder'>industry depends</span> on technology especially in SaaS and <span className='fw-bolder'>tech sectors</span> where speed, scalability, and <span className='fw-bolder'>innovation</span> are vital. I <span className='fw-bolder'>develop applications</span> that exceed those demands.</h1>
                </div>
            </div>

            <div className="animated-text">
                <h1>Software Developers are the <span className="text-style">fantastic species</span> on Earth .</h1>
                <h1>Software Developers are the <span className="text-style">fantastic species</span> on Earth .</h1>
            </div>

            <div className="container mb-3">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-11 my-box mx-auto my-3">
                        <h1 className="fw-lighter fs-4 text-justify p-3">This website lays the foundation to solidify my core concepts in software and web development. Leveraging modern technologies, I’m strengthening my fundamentals to architect and deliver advanced, feature-rich projects.</h1>
                    </div>
                </div>
            </div>

            {/* social icons above the copyright, placed after the end box */}
            <footer className="site-footer">
                <div className="container text-center">
                    <div className="social-icons mb-3">
                        <a href="mailto:deepanshusharma1420@gmail.com" target="_blank" rel="noreferrer" aria-label="Gmail"><FaEnvelope /></a>
                        <a href="https://github.com/deepanshu1420" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/deepanshu-sharma12/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://x.com/deepanshushh" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
                    </div>
                    <p className="copyright">© 2025 Deepanshu Sharma. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}
export default Home;
