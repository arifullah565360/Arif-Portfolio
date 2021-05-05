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
                        <div className="text">
                            <h5>10 Basic things About JavaScript</h5>
                        </div>

                        <div className="component">
                            <h4>What is JavaScript</h4>
                            <p>JavaScript, often abbreviated as JS, is a dynamic computer programming language. It is lightweight and most commonly used for web development. It used both on the client-side and server-side that allows you to make web pages interactive. It is an interpreted programming language with object-oriented capabilities.</p>

                        </div>
                        <div className="component">
                            <h4>Objects</h4>
                            <p>One of the reasons keep coming back to the topic of objects is because in javaScript almost everything is an object. Let’s break that down a bit to see exactly
                            The object category includes everything else that means all the JavaScript built-in object Like.
                            1.	Math
                            2.	Date
                            3.	json
                            4.	window
                            5.	document
                            6. 	objects you create
                            </p>
                        </div>
                        <div className="component">
                            <h4>Array</h4>
                            <p>In JavaScript, an array is an ordered list of values. Each value is called an element specified by an index. Indexes are zero based which means the first item is stored at Oth index, second at first and so on, last item is stored at n-1th index.</p>
                        </div>
                        <div className="component">
                            <h4>Difference between Object and Array</h4>
                            <p>Both objects and arrays are considered “special” in JavaScript. Objects represent a special data type that is mutable and can be used to store a collection of data (rather than just a single value). Arrays are a special type of variable that is also mutable and can also be used to store a list of values.</p>
                        </div>
                        <div className="component">
                            <h4>When to Use Objects</h4>
                            <p>Objects are used to represent a “thing” in your code. That could be a person, a car, a building, a book, a character in a game — basically anything that is made up or can be defined by a set of characteristics. In objects, these characteristics are called properties that consist of a key and a value.</p>
                        </div>
                        <div className="component">
                            <h4>When to Use Arrays</h4>
                            <p>We use arrays whenever we want to create and store a list of multiple items in a single variable. Arrays are especially useful when creating ordered collections where items in the collection can be accessed by their numerical position in the list. Just as object properties can store values of any primitive data type (as well as an array or another object), so too can arrays consist of strings, numbers, booleans, objects, or even other arrays.</p>
                        </div>
                        <div className="component">
                            <h4>Variable </h4>
                            <p>Variable means anything that can vary. A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data. It can be changed anytime. JavaScript uses reserved keyword var to declare a variable. A variable must have a unique name.</p>
                        </div>
                        <div className="component">
                            <h4>Variable Declaration </h4>
                            <p>You can assign a value to a variable using equal to (=) operator when you declare it or before using it.
                            Syntax : var (variable-name) = (value);
                            Example : var country = “Bangladesh”
                                </p>
                        </div>

                        <div className="component">
                            <h4>Declare a Variable without var Keyword</h4>
                            <p>JavaScript allows variable declaration without var keyword. You must assign a value when you declare a variable without var keyword.
                            Syntax : var ("variable-name") = (value);
                            Example : var country = “Bangladesh”
                                </p>
                        </div>
                        <div className="component">
                            <h4>Multiple Variable in a single line</h4>
                            <p>Multiple variables can also be declared in a single line separated by comma.
                              var district = ‘Cumilla’, Division = 'Chittagong', country = 'Bangladesh';
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;