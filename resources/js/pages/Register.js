import React, {Component} from 'react';
import {Route} from "react-router-dom";
import {userContext} from "../helpers/userContext";

export default class Register extends Component {
    static contextType = userContext;

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let userIsLoggedIn = false;
        if( typeof this.context != 'undefined' && this.context ) {
            userIsLoggedIn = true;
            this.setState({
                user: this.context,
                userIsLoggedIn: userIsLoggedIn,
            });

            window.location.href = baseUrl;
        }

        this.setState({isLoaded: true});
    }

    doRegister(event) {
        event.preventDefault();

        const user = {
            name: $('#name').val(),
            email: $('#email').val(),
            password: $('#password').val(),
        }

        axios.post(baseUrl + '/api/register', user)
            .then(response => {
                $('#error-box').addClass('d-none');
                if(response.data.registered)  {
                    window.location.href = response.data.redirectTo;
                } else {
                    console.log(response);
                }

            })
            .catch(error => {
                const errorsData = error.response.data.errors;
                const keys = Object.keys(errorsData);
                const values = Object.values(errorsData)
                // console.log(keys, values);
                $('#error-box').removeClass('d-none');
                $('#error-message').html('<ul></ul>');

                values.map((error, index) => (
                    $('#error-message').append('<li><b>'+ error +'</b></li>')
                ))
            });
    }

    render() {
        return (
            <section className="section section-shaped section-lg">
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
                            <h1 className="text-white display-3">Registre-se</h1>
                            <h2 className="display-5 font-weight-normal text-white">E usufrua dos nossos serviços gratuitamente.</h2>
                            <div id="error-box" className="alert btn-warning mt-5 d-none" role="alert">
                                <p><b>Atenção, houve um problema com seu registro, corrija-os e tente novamente.</b></p>
                                <div id="error-message"></div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="card bg-secondary shadow border-0">
                                <div className="card-header bg-white pb-5">
                                    <div className="text-muted text-center mb-3"><small>Continuar registro com</small></div>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-facebook btn-icon mr-4">
                                            <span className="btn-inner--icon">
                                                <i className="fab fa-facebook-f" style={{marginRight: "15px"}}></i>
                                            </span>
                                            <span className="btn-inner--text">Facebook</span>
                                        </a>
                                        <a href="#" className="btn btn-google-plus btn-icon">
                                            <span className="btn-inner--icon">
                                                <i className="fab fa-google" style={{marginRight: "15px"}}></i>
                                            </span>
                                            <span className="btn-inner--text">Google</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="card-body px-lg-5 py-lg-5">
                                    <div className="text-center text-muted mb-4">
                                        <small>Ou cadastre-se com as suas credenciais</small>
                                    </div>
                                    <form role="form" onSubmit={this.doRegister}>
                                        <div className="form-group">
                                            <div className="input-group input-group-alternative mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-hat-3"></i></span>
                                                </div>
                                                <input id="name" className="form-control" placeholder="Nome" type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group input-group-alternative mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                                </div>
                                                <input id="email" className="form-control" placeholder="Email" type="email"/>
                                            </div>
                                        </div>
                                        <div className="form-group focused">
                                            <div className="input-group input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                                </div>
                                                <input id="password" className="form-control" placeholder="Senha" type="password"/>
                                            </div>
                                        </div>
                                        <div className="row my-4">
                                            <div className="col-12">
                                                <div className="custom-control custom-control-alternative custom-checkbox">
                                                    <input className="custom-control-input" id="customCheckRegister" type="checkbox"/>
                                                    <label className="custom-control-label" htmlFor="customCheckRegister"><span>Eu conconrdo com os <a href="#">Termos de privacidade</a></span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button id="register" type="submit" className="btn btn-primary mt-4">Criar conta</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
