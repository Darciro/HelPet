import React, { Component } from 'react';
import Hero from "../components/Hero";

export default class Partners extends Component  {
    render() {
        return (
            <div className="partners">

                <Hero title="Partners"
                      sub-title="The companies that can lend a help"  />

                <div className="section">
                    <div className="container">
                        <h1 className="bd-title" id="content">Some cool intro text</h1>
                        <p className="bd-lead">Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.</p>
                        <h2 id="about"><span className="bd-content-title">About</span></h2>
                        <p>Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.</p>
                    </div>
                </div>
            </div>
        );
    }
}
