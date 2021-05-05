import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nabver.css'
const Navber = () => {
    const [navber , setNavber] = useState(false);


const changeBackground = () =>{
    if(window.scrollY >=90){
        setNavber(true);
    }else{
        setNavber(false);
    }
}

window.addEventListener('scroll', changeBackground)

    return (
        <div>
        <div className={navber ? 'navBar active' : 'navBar'}>
            <div className="max-width">
                <div className="logo"><h1>Portfo<span style={{ color: "crimson" }}>lio.</span></h1></div>
                <nav className="menu">
                    
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/project">Projects</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/blog">Blog</Link>
                </nav>
                <div className="menu-btn">
                    <i className="fas fa-bars">Menu</i>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Navber;