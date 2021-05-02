import React from 'react';
import './Header.css'
import Arif from '../../Image/20210501_041039-removebg-preview.png'
import Typewriter from 'typewriter-effect'

const Header = () => {
    return (
       <section className="home" id="home">
         <div className="max-width">
             <div className="home-content">
                 <div className="text-1">Hello , my name is</div>
                 <div className="text-2">Arif Ullah</div>
                 <div className="text-3">And I am a Web <span> <Typewriter
                       onInit={(typewriter) =>{
                         typewriter.typeString("developer").pauseFor(2000) .deleteAll() .typeString("Developer"). start();
                     } }
                     />
                    
                     </span>
                     <button type="button" class="btn btn-outline-danger">Hire Me</button>
                      </div>
             </div>
        </div>  
       </section>
    );
};

export default Header;