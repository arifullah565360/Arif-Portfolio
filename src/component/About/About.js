import React from 'react';
import './About.css'
import ArifPrf from '../../Image/arifprof.jpg'
import Navber from '../Navber/Navber';
import Header from '../Header/Header';

const About = () => {
    return (
        <div> 
            <Navber></Navber>
            <Header></Header>
        <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About</h2>
            <div className="about-content">
                <div className="column left">
                    <img src={ArifPrf} alt=""/> 
                </div>
             <div className="column right">
                <div className="text">I am Arif ulla And I Am A Full Stack <span>Wab Developer</span> </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium odit ratione minima explicabo, animi unde beatae nam delectus, magni minus nemo quibusdam dicta culpa molestiae, fuga ut rerum nostrum aliquid ad? Maiores est officiis quidem quo sunt doloribus perspiciatis excepturi minima laborum nihil cum, possimus ducimus corrupti voluptates necessitatibus cumque obcaecati optio deserunt consequuntur aspernatur explicabo aut modi ex fugiat?</p>
               
                <button type="button" class="btn btn-outline-danger">Download Resume</button>
            </div>

            </div>
       </div>  
      </section>
      </div>
    );
};

export default About;