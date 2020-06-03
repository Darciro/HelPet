import React, { Component } from 'react';
import Hero from "../components/Hero";

export default class About extends Component  {
    render() {
        return (
            <div className="about">

                <Hero title="About"
                      sub-title="A little about our projects and our love for pets!"  />

                <div className="section">
                    <div className="container">
                        <h1 className="bd-title" id="content">Spinners</h1>
                        <p className="bd-lead">Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.</p>
                        <h2 id="about"><span className="bd-content-title">About</span></h2>
                        <p>Bootstrap “spinners” can be used to show the loading state in your projects. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.</p>
                    </div>
                </div>
            </div>
        );
    }
}
