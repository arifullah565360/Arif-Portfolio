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
                        <div>
                            <h1>Most important things about JavaScript you must know</h1>
                            <h4>What is JavaScript</h4>
                            <p>JavaScript, often abbreviated as JS, is a dynamic computer programming language. It is lightweight and most commonly used for web development. It used both on the client-side and server-side that allows you to make web pages interactive. It is an interpreted programming language with object-oriented capabilities.</p>
                         
                         </div>
                         <div>
                             <h4>Objects</h4>
                             <p>One of the reasons keep coming back to the topic of objects is because in javaScript almost everything is an object. Let’s break that down a bit to see exactly
The object category includes everything else that means all the JavaScript built-in object Like.
1.	Math
2.	Date
3.	json
4.	window
5.	document
6.	objects you create
</p>
                         </div>
                        </div>

                </div>
            </div>
        </section>
    </div>
    );
};

export default Blog;