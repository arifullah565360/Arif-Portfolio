import React from 'react';
import Header from '../Header/Header';
import Navber from '../Navber/Navber';
import plimg from '../../Image/plyr.jpg';
import ec from '../../Image/AmoEec.jpg';
import shop from '../../Image/shop.jpg';
import food from '../../Image/foodjpg.jpg'
import nutr from '../../Image/nutr.jpg'
import team from '../../Image/Teamhubjpg.jpg'
import './Project.css'




const Projects = () => {

    return (
        <div>
            <Navber></Navber>
            <Header></Header>
            <section className="project" id="project">
                <div className="max-width">
                    <h2 className="title">Projects</h2>
                    <div className="project-content">
                        <div className="column left">
                            <img src={ec} alt="" />
                            <h3>Amos-Educational-Center</h3>
                            <p> User Dashboard ( Admission, Payment Confirmation, Review) Admin Panel (Add Service, Delete Service, Make New Admin)</p>
                            <a href="#"><button type="button" class="btn btn-outline-danger">Project Live</button></a>  
                        </div>

                        <div className="column left">
                            <img src={shop} alt="" />
                            <h3>Al-Mudaraba-Online-Shop</h3>
                            <p>This is a demo e-commerce Online-shop. Admin Panel (Add Product, Delete Product)</p>
                            <a href="#"><button type="button" class="btn btn-outline-danger">Project Live</button></a> 
                        </div>

                        <div className="column left">
                            <img src={plimg} alt="" />
                            <h3>Comilla Victorians</h3>
                            <p>lodding</p>
                            <a href="#"><button type="button" class="btn btn-outline-danger">Project Live</button></a> 
                        </div>

                        <div className="column left">
                            <img src={food} alt="" />
                            <h3>Arif's Food Valley</h3>
                            <p>lodding</p>
                            <a href="#"><button type="button" class="btn btn-outline-danger">Project Live</button></a> 
                        </div>

                        <div className="column left">
                            <img src={nutr} alt="" />
                            <h3>Fency Slider</h3>
                            <p>lodding</p>
                            <a href="#"><button type="button" class="btn btn-outline-danger">Project Live</button></a> 
                        </div>

                        <div className="column left">
                            <img src={team} alt="" />
                            <h3>Players Team Hub</h3>
                            <p>lodding</p>
                            <a href="#"><button type="button" class="btn btn-outline-danger">Project Live</button></a> 
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;