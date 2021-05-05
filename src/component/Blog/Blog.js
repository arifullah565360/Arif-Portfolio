import React from 'react';
import './Blog.css'
import Navber from '../Navber/Navber';

const Blog = () => {
    return (
        <div>
        <Navber></Navber>
        
       
        <section className="blog" id="blog">
            <div className="max-width">
                <h2 className="title">Blog</h2>
                <div className="blog-content">
                    <div className="column left">
                    <h1>Cooming Soon</h1>
                    </div>
                    <div className="column right">
                        <div> </div>
                       

                    </div>

                </div>
            </div>
        </section>
    </div>
    );
};

export default Blog;