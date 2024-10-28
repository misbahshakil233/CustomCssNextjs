"use client"
import React, { useState } from 'react';


const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="background">
            <div className="container">
                <h1 style={{ fontFamily: "revert-layer", fontSize: '44px', textShadow: "none" }}>Portfolio</h1>
                <div className={`menu ${open ? 'active' : ''}`}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="hamburger" onClick={() => setOpen(!open)}>
                    ☰
                </div>
            </div>
            <style jsx>{`
                nav {
                    display: flex;
                    justify-content: space-between;
                    padding: 20px;
                    position: sticky;
                    top: 0;
                    z-index: 1000; /* Keep the navbar on top */
                    background: black;
                }
                .container {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    margin-left: 100px;
                }
                .menu {
                    display: flex;
                    gap: 40px; /* Increased gap to create more space */
                    margin-left: auto; /* Aligns menu to the right */
                    padding-right: 20px; /* Add some padding to the right */
                    justify-content: center; /* Ensures items are pushed to the end */
                    margin-right: 200px;
                }
                .menu a {
                    font-size: 20px; /* Increased font size */
                    text-decoration: none;
                    color: white;
                    font-weight: bold; /* Make the text bold */
                    transition: color 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
                    padding: 8px 12px; /* Add padding for hover background */
                    border-radius: 30px; /* Make the hover effect circular */
                }
                .menu a:hover {
                    color: red; /* Change to red on hover */
                    background-color: rgba(255, 255, 255, 0.1); /* Subtle background color */
                    transform: scale(1.1); /* Slightly enlarge on hover for animation */
                }
                .hamburger {
                    display: none;
                    cursor: pointer;
                }
                @media (max-width: 1024px) {
                    .menu {
                        margin-right: 20px; /* Adjust for mid-sized screens */
                    }
                }
                @media (max-width: 768px) {
                    .menu {
                        display: ${open ? 'block' : 'none'};
                        position: absolute;
                        top: 60px;
                        background: black;
                        width: 100%;
                        text-align: center;
                        margin-left: 0; /* Reset to default on mobile */
                        padding: 10px 0;
                        gap: 20px; /* Reduce gap on smaller screens */
                        z-index: 1000; /* Ensure menu stays above other content */
                    }
                    .menu a {
                        display: block;
                        font-size: 24px; /* Adjust font size for smaller screens */
                        padding: 10px 0;
                    }
                    .hamburger {
                        display: block;
                        margin-left: auto; /* Align hamburger to the right */
                        z-index: 1001; /* Ensure it's on top of the menu */
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
