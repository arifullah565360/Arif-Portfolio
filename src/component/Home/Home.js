import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Navber from '../Navber/Navber';
import Skills from '../Skills/Skills';



const Home = () => {
    return (
        <div>

            <Navber></Navber>
            <Header></Header>
            
            <Skills></Skills>
          

        </div>
    );
};

export default Home;