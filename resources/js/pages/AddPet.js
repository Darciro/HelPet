import React, {Component} from 'react';
import {userContext} from "../helpers/userContext";
import Hero from "../components/Hero";
import {Link} from "react-router-dom";

export default class AddPet extends Component {
    static contextType = userContext;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            userIsLoggedIn: false
        };
    }

    addPet() {
        const pet = {
            pet_owner: 1,
            name: $('#name').val(),
            age: $('#age').val(),
            type: $('#type').val(),
            breed: $('#breed').val(),
            sex: $('#sex').val(),
            size: $('#size').val(),
            description: $('#description').val(),
            last_known_location: $('#last_known_location').val(),
            petPhotoPath: $('#petPhotoPath').val(),
            state: 'missing',
        }

        axios.post('http://127.0.0.1:8000/api/pets', pet)
            .then((response)=>{
                if( response.status === 200 ) {
                    window.location.href = response.data.redirectTo;
                }
            })
    }

    componentDidMount() {
        let userIsLoggedIn = false;
        if( typeof this.context != 'undefined' && this.context ) {
            userIsLoggedIn = true;
            this.setState({
                user: this.context,
                userIsLoggedIn: userIsLoggedIn,
            });
        }

        this.setState({isLoaded: true});
    }

    render() {
        const { error, isLoaded, user, userIsLoggedIn } = this.state;

        if (!isLoaded) {
            return(
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-secondary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            console.log( 'userIsLoggedIn', userIsLoggedIn );

            if( !userIsLoggedIn ) {
                return (
                    <div className="about">

                        <Hero title="Ops"
                              sub-title="Join us, so you can ask for our help"  />

                        <div className="section">
                            <div className="container">
                                <h1 className="bd-title" id="content">Register...</h1>
                                <p className="bd-lead"><Link className="" to="/register">Click here to register!</Link></p>
                                <h2 id="about">Or, if already have an account</h2>
                                <p className="bd-lead"><Link className="" to="/login">Log in here!</Link></p>
                            </div>
                        </div>
                    </div>
                );
            } else {
                return <section className="section section-shaped section-lg">
                    <div className="shape shape-style-1 bg-gradient-default">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="container pt-lg-7">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card bg-secondary shadow border-0">
                                    <div className="card-body px-lg-5 py-lg-5">
                                        <div className="text-center text-muted mb-4">
                                            <small>Or sign in with credentials</small>
                                        </div>
                                        <form role="form">
                                            <div className="form-group mb-3">
                                                <div className="input-group input-group-alternative">
                                                    <input id="name" className="form-control" placeholder="Name" type="text"/>
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <div className="input-group input-group-alternative">
                                                    <input id="age" className="form-control" placeholder="Age" type="number"/>
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <select id="type" className="custom-select">
                                                    <option value="dog">Dog</option>
                                                    <option value="cat">Cat</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                            <div className="form-group mb-3">
                                                <div className="input-group input-group-alternative">
                                                    <input id="breed" className="form-control" placeholder="Breed" type="text"/>
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <select id="sex" className="custom-select">
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </div>
                                            <div className="form-group mb-3">
                                                <select id="size" className="custom-select">
                                                    <option value="small">Small</option>
                                                    <option value="medium">Medium</option>
                                                    <option value="large">Large</option>
                                                </select>
                                            </div>
                                            <div className="form-group mb-3">
                                                <textarea className="form-control" id="description" rows="3" placeholder="Description"></textarea>
                                            </div>
                                            <div className="form-group mb-3">
                                                <div className="input-group input-group-alternative">
                                                    <input id="last_known_location" className="form-control" placeholder="Last known location" type="text"/>
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <div className="input-group input-group-alternative">
                                                    <input id="petPhotoPath" className="form-control" placeholder="Pet photo path" type="text"/>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button id="addBtn" type="button" className="btn btn-primary my-4" onClick={this.addPet}>Add Pet</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }

        }
    }
}
