import React from 'react';
import useTitle from '../../Hook/useTitle';

const Blogs = () => {
    useTitle('Blog')
    return (
        <div>
            <div>

                <div className='p-12 text-center'>

                    <h1 className='py-12 text-4xl font-sans'>Here are the 4 questions answer!</h1>
                    <div tabIndex={0} className="mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:w-1/2 lg:w-2/3 my-8">
                        <div className="collapse-title text-xl font-medium bg-[#ff6e13] opacity-75 text-white">
                            1.What is an access token and refresh token? How do they work and where should we store them on the client-side?
                        </div>
                        <div className="collapse-content text-sm sm:text-base ">
                            <p className='py-5 text-left'><strong>Access Token:</strong> A credential used to access protected resources, valid for a limited time. It contains user information and authorization scope. <br /> <br />

                                <strong>Refresh Token:</strong> A long-lived credential used to obtain a new access token when the current one expires. It helps with session management and token renewal. <br /> <br />

                                <strong>How they work:</strong>

                                When a user authenticates and obtains an access token and refresh token pair, the access token is sent with each request to access protected resources.
                                The server validates the access token to ensure it is valid and has not expired.
                            </p>
                        </div>
                    </div>
                    <div tabIndex={0} className="mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:w-1/2 lg:w-2/3 my-5">
                        <div className="collapse-title text-xl font-medium bg-[#ff6e13] opacity-75 text-white">
                            2.Compare SQL and NoSQL databases?
                        </div>
                        <div className="collapse-content text-sm sm:text-base ">
                            <p className='py-5 text-left'>
                                <strong>SQL Databases:</strong>

                                <li>Predefined structure with rigid schema.</li>
                                <li>Relational data model with tables and predefined relationships.</li>
                                <li>SQL query language.</li>
                                <li>Vertically scalable.</li>
                                <li>Suitable for applications with complex relationships</li> <br /> <br />
                                <strong>NoSQL Databases:</strong>

                                <li>Flexible and schema-less structure.</li>
                                <li>Various data models like key-value, document, columnar, or graph.</li>
                                <li>Query languages specific to the database type (e.g., MongoDB uses MongoDB Query Language).</li>
                                <li>Horizontally scalable.</li>
                                <li>Suitable for handling large volumes of unstructured or semi-structured data.
                                </li>
                            </p>
                        </div>
                    </div>
                    <div tabIndex={0} className="mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:w-1/2 lg:w-2/3 my-5">
                        <div className="collapse-title text-xl font-medium bg-[#ff6e13] opacity-75 text-white">
                            3.What is express js? What is Nest JS?
                        </div>
                        <div className="collapse-content text-sm sm:text-base ">
                            <p className='py-5 text-left'><strong>Express.js:</strong>
                                Express.js is a minimal and flexible web application framework for Node.js. It provides a robust set of features for building web applications and APIs. With Express.js, developers can define routes, handle HTTP requests and responses, manage middleware, and implement various functionalities required for web development. <br /> <br />

                                <strong>NestJS:</strong>
                                NestJS is a progressive, TypeScript-based web application framework built on top of Node.js. It is designed to make server-side application development more structured, efficient, and scalable. NestJS follows the architectural principles of Angular, adopting concepts like dependency injection, modules, decorators, and providers. It provides a layered modular structure, making it easy to organize code into reusable modules and components.
                            </p>
                        </div>
                    </div>
                    <div tabIndex={0} className="mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:w-1/2 lg:w-2/3 my-5">
                        <div className="collapse-title text-xl font-medium bg-[#ff6e13] opacity-75 text-white">
                            4.What is MongoDB aggregate and how does it work?
                        </div>
                        <div className="collapse-content text-sm sm:text-base ">
                            <p className='py-5 text-left'><strong>MongoDB aggregate :</strong> is a feature that enables advanced data processing and analysis within MongoDB. It uses a pipeline of stages to perform operations on input documents. Each stage applies a specific operation, such as filtering, grouping, or reshaping data. Aggregation functions and pipeline operators allow for performing calculations, joins, and more complex operations. </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;