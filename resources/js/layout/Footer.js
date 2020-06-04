import React, { Component } from 'react';

export default class Footer extends Component  {
    render() {
        return (
            <footer id="main-footer" className="footer">
                <div className="container">
                    <div className="row row-grid align-items-center mb-5">
                        <div className="col-lg-6">
                            <h3 className="text-primary font-weight-light mb-2">Obrigado pela sua contribuição</h3>
                            <h4 className="mb-0 font-weight-light">Siga-nos em outras plataformas e esteja em contato com os pets que precisam da sua ajuda!</h4>
                        </div>
                        <div className="col-lg-6 text-right btn-wrapper">
                            <button target="_blank" href="#" rel="nofollow" className="btn btn-icon-only btn-twitter rounded-circle" data-toggle="tooltip" data-original-title="Follow us">
                                <span className="btn-inner--icon"><i className="fab fa-twitter"></i></span>
                            </button>
                            <button target="_blank" href="#" rel="nofollow" className="btn-icon-only rounded-circle btn btn-facebook" data-toggle="tooltip" data-original-title="Like us">
                                <span className="btn-inner--icon"><i className="fab fa-facebook"></i></span>
                            </button>
                            <button target="_blank" href="#" rel="nofollow" className="btn btn-icon-only btn-dribbble rounded-circle" data-toggle="tooltip" data-original-title="Follow us">
                                <span className="btn-inner--icon"><i className="fab fa-instagram"></i></span>
                            </button>
                            <button target="_blank" href="#" rel="nofollow" className="btn btn-icon-only btn-github rounded-circle" data-toggle="tooltip" data-original-title="Star on Github">
                                <span className="btn-inner--icon"><i className="fab fa-pinterest-p"></i></span>
                            </button>
                        </div>
                    </div>
                    <hr/>
                    <div className="row align-items-center justify-content-md-between">
                        <div className="col-md-6">
                            <div className="copyright">
                                © 2020 <a href="" target="_blank">Galdar Tecnologia</a>.
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ul className="nav nav-footer justify-content-end">
                                <li className="nav-item">
                                    <a href="" className="nav-link" target="_blank">Rick Manu</a>
                                </li>
                                <li className="nav-item">
                                    <a href="" className="nav-link" target="_blank">Licença de uso</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://github.com/Darciro/helpet" className="nav-link" target="_blank">Github</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
