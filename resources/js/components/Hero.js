import React, { Component } from 'react';

export default class Hero extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="section section-hero bg-secondary">
                <div className="page-header">
                    <div className="container shape-container d-flex align-items-center py-lg">
                        <div className="col px-0">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 text-center">
                                    <h1 className="text-white display-3">{this.props.title}</h1>
                                    <h2 className="display-5 font-weight-normal text-white">{this.props["sub-title"]}</h2>
                                    <div className="btn-wrapper mt-4">
                                        {this.props.desc}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
