import React from 'react';
import './Header.css'
import Arif from '../../Image/20210501_041039-removebg-preview.png'
import Typewriter from 'typewriter-effect'

const Header = () => {
    return (
        <section className="home" id="home">
            <div className="max-width">
                <div className="home-content">
                    <div className="column left">
                        <div className="text-1">Hello , my name is</div>
                        <div className="text-2">Arif Ullah</div>
                        <div className="text-3">And I am a Web <span> <Typewriter
                            onInit={(typewriter) => {typewriter.typeString("developer").pauseFor(2000).deleteAll().typeString("Developer").start();}}/>
                         </span>
                            <a href={`https://drive.google.com/file/d/1db-am9yQANPiLW-Ly7IG3d34FIxHVvM8/view?usp=sharing`}> <button type="button" class="btn btn-outline-danger">Download Resume</button>  </a>
                        </div>
                    </div>
                    <div className="column right">
                      
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;