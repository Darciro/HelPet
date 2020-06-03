import React, {Component} from 'react';

export default class Login extends Component {

    doLogin() {
        const user = {
            email: $('#email').val(),
            pass: $('#pass').val(),
        }

        axios.post('http://127.0.0.1:8000/api/login', user)
            .then((response)=>{
                if( response.status === 200 ) {
                    console.log(response.data);
                    window.location.href = response.data.redirectTo;
                }
            })
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
                                    <div className="text-muted text-center mb-3"><small>Sign up with</small></div>
                                    <div className="text-center">
                                        <a href="#" className="btn btn-neutral btn-icon mr-4">
                                            <span className="btn-inner--icon"><img src="../assets/img/icons/common/github.svg"/></span>
                                            <span className="btn-inner--text">Github</span>
                                        </a>
                                        <a href="#" className="btn btn-neutral btn-icon">
                                            <span className="btn-inner--icon"><img src="../assets/img/icons/common/google.svg"/></span>
                                            <span className="btn-inner--text">Google</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="card-body px-lg-5 py-lg-5">
                                    <div className="text-center text-muted mb-4">
                                        <small>Or sign up with credentials</small>
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
                                                <input id="pass" className="form-control" placeholder="Password" type="password"/>
                                            </div>
                                        </div>
                                        <div className="row my-4">
                                            <div className="col-12">
                                                <div className="custom-control custom-control-alternative custom-checkbox">
                                                    <input className="custom-control-input" id="customCheckRegister" type="checkbox"/>
                                                    <label className="custom-control-label" htmlFor="customCheckRegister"><span>I agree with the <a href="#">Privacy Policy</a></span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button id="signin" type="button" className="btn btn-primary mt-4" onClick={this.doLogin}>Create account</button>
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

