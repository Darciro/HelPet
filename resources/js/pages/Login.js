import React, {Component} from 'react';

export default class Login extends Component {

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

    doLogin() {
        const user = {
            email: $('#email').val(),
            password: $('#password').val(),
        }

        axios.post(baseUrl + '/api/login', user)
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
                            <div className="card bg-secondary shadow border-0">
                                <div className="card-header bg-white pb-5">
                                    <div className="text-muted text-center mb-3"><small>Autenticar com</small></div>
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
                                        <small>Ou autenticar com suas credenciais</small>
                                    </div>
                                    <form role="form">
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
                                        <div className="text-center">
                                            <button id="signin" type="button" className="btn btn-primary mt-4" onClick={this.doLogin}>Create account</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <h1 className="text-white display-3">Login</h1>
                            <h2 className="display-5 font-weight-normal text-white">Preencha com seus dados.</h2>
                            <div id="error-box" className="alert btn-warning mt-5 d-none" role="alert">
                                <p><b>Atenção, houve um problema com seu registro, corrija-os e tente novamente.</b></p>
                                <div id="error-message"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

