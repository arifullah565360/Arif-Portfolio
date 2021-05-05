import React from 'react';
import './About.css'
import ArifPrf from '../../Image/arifprof.jpg'


const About = () => {
    return (
        <div>
            <section className="about" id="about">
                <div className="max-width">
                    <h2 className="title">About</h2>
                    <div className="about-content">
                        <div className="column left">
                            <img src={ArifPrf} alt="" />
                        </div>
                        <div className="column right">
                            <div className="text">I am Arif ulla And I Am A Full Stack <span>Wab Developer</span> </div>
                            <p>A self-motivated, creative, and ambitious IT professional with knowledge and proficiency in HTML, CSS, JavaScript, React, MongoDB and mobile responsive web development, as well as skills and ability in writing clean and efficient code, seeking for the job of Entry Level Web Developer.</p>
                            <a href={`https://drive.google.com/file/d/1db-am9yQANPiLW-Ly7IG3d34FIxHVvM8/view?usp=sharing`}> <button type="button" class="btn btn-outline-danger">Download Resume</button>  </a>
                       </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;