import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";

const Nav = () => {
    const [navbarBlur, setNavbarBlur] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            setNavbarBlur(window.scrollY >= 20);
        };

        // Add event listener for scroll
        window.addEventListener("scroll", scrollHandler);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    const toggleMenu = () => {
        const bars = document.getElementsByClassName("bar");
        const ham = document.getElementsByClassName("NavbarLinks");
        Array.from(bars).forEach((bar, index) => {
            bar.classList.toggle(`bar${index + 1}`);
        });
        ham[0].classList.toggle("showNavbar");
    };

    const hideMenu = () => {
        const bars = document.getElementsByClassName("bar");
        const ham = document.getElementsByClassName("NavbarLinks");
        Array.from(bars).forEach((bar, index) => {
            bar.classList.remove(`bar${index + 1}`);
        });
        ham[0].classList.remove("showNavbar");
    };

    return (
        <nav className={navbarBlur ? 'Navbar blur' : 'Navbar'}> 
            <h1 title='Reload' onClick={() => window.location.reload(true)} className='Logo'>Portfolio</h1>

            <div className='Hamburger' onClick={toggleMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>       
            </div>

            <ul className='NavbarLinks'>
                <li onClick={hideMenu}><Link to="/"><AiOutlineHome /> Home</Link></li>
                <li onClick={hideMenu}><Link to="/About"><BsPerson /> About</Link></li>
                <li onClick={hideMenu}><Link to="/Project"><BsCodeSlash /> Project</Link></li>
                <li onClick={hideMenu}><Link to="/Services"><CgFileDocument /> Services</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
