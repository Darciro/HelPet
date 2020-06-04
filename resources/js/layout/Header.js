import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {userContext} from '../helpers/userContext';

export default class Header extends Component  {

    static contextType = userContext;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            userIsLoggedIn: false
        };
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

    logOut() {
        const user = {}
        axios.post(baseUrl + '/api/logout', user)
            .then((response)=>{
                if( response.status === 200 ) {
                    window.location.href = response.data.redirectTo;
                }
            })
    }

    showUserNav(uid) {
        if( this.state.userIsLoggedIn ) {
            return <nav className="navbar navbar-expand-md navbar-light">
                <ul className="nav navbar-nav">
                    <li className="dropdown">
                        <a href="#" className="nav-link dropdown-toggle user-avatar" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
                            <img src="https://demos.creative-tim.com/argon-design-system/assets/img/faces/team-4.jpg" className="owner rounded-circle"/>
                            <b className="caret"></b>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right position-absolute" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Perfil</a>
                            <a className="dropdown-item" href="#">Meus Pets</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#" onClick={this.logOut}>
                                 <span className="btn-inner--icon">
                                    <i className="fas fa-power-off" style={{marginRight: "15px"}}></i>
                                </span>
                                Sair
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        }
    }

    showRegisterButton() {
        if( !this.state.userIsLoggedIn ) {
            return <li className="nav-item d-block d-lg-block">
                <Link className="btn btn-light btn-icon" to="/register">
                    <span className="btn-inner--icon">
                        <i className="fas fa-sign-in-alt" style={{marginRight: "15px"}}></i>
                    </span>
                    <span className="nav-link-inner--text">Registro</span>
                </Link>
            </li>
        }
    }

    showLogginButton() {
        if( !this.state.userIsLoggedIn ) {
            return <li className="nav-item d-block d-lg-block">
                <Link className="btn btn-light btn-icon" to="/login">
                    <span className="btn-inner--icon">
                        <i className="fas fa-sign-in-alt" style={{marginRight: "15px"}}></i>
                    </span>
                    <span className="nav-link-inner--text">Login</span>
                </Link>
            </li>
        }
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
            return (
                <header id="main-header" className="navbar navbar-expand-lg navbar-horizontal navbar-dark flex-row align-items-md-center bg-primary py-2">

                    <Link className="navbar-brand" to="/">
                        <i className="fas fa-paw" style={{marginRight: "15px"}}></i> Helpet
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="main-navbar">

                        <ul className="navbar-nav align-items-lg-center">
                            <li className="nav-item dropdown">
                                <Link className="nav-link" to="/about">
                                    <i className="ni ni-ui-04 d-lg-none"></i>
                                    <span className="nav-link-inner--text">Sobre</span>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link" to="/partners">
                                    <i className="ni ni-ui-04 d-lg-none"></i>
                                    <span className="nav-link-inner--text">Parceiros</span>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link" data-toggle="dropdown" role="button">
                                    <i className="ni ni-collection d-lg-none"></i>
                                    <span className="nav-link-inner--text">Informações importantes</span>
                                </a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/pets">Pets</Link>
                                    <Link className="dropdown-item" to="/add-pet">Add a pet</Link>
                                    <Link className="dropdown-item" to="/">Page #2</Link>
                                    <Link className="dropdown-item" to="/">Some another cool link</Link>
                                    <Link className="dropdown-item" to="/">I have no more ideas</Link>
                                </div>
                            </li>
                        </ul>

                        <ul className="navbar-nav align-items-lg-center ml-lg-auto">
                            <li className="nav-item">
                                <a className="nav-link nav-link-icon" href="https://www.facebook.com/" target="_blank" data-toggle="tooltip" title="Like us on Facebook">
                                    <i className="fab fa-facebook-square"></i>
                                    <span className="nav-link-inner--text d-lg-none">Facebook</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-icon" href="https://www.instagram.com/" target="_blank" data-toggle="tooltip" title="Follow us on Instagram">
                                    <i className="fab fa-instagram"></i>
                                    <span className="nav-link-inner--text d-lg-none">Instagram</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-icon" href="https://wa.me/000123456789" target="_blank" data-toggle="tooltip" title="Follow us on Twitter">
                                    <i className="fab fa-whatsapp"></i>
                                    <span className="nav-link-inner--text d-lg-none">WhatsApp</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-icon" href="https://github.com/creativetimofficial/argon-design-system" target="_blank" data-toggle="tooltip" title="Star us on Github">
                                    <i className="fas fa-envelope"></i>
                                    <span className="nav-link-inner--text d-lg-none">Email</span>
                                </a>
                            </li>


                            {this.showRegisterButton()}
                            {this.showLogginButton()}
                            {this.showUserNav()}

                        </ul>

                    </div>

                </header>
            )
        }

    }
}
