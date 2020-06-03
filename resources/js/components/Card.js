import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Card extends Component {

    coolFunction() {
        if(this.props.isSingle) {
            return <img src="https://www.edgarcosta.net/wp-content/uploads/gmaps_exemplo.jpg" />
        } else {
            return <Link to={"/pets/" + this.props.id}>Leia mais</Link>
        }
    }

    render() {
        return <div className="card-wrapper" style={{marginBottom: "100px"}}>
            {/*<div className="card card-profile shadow mt--150">*/}
            <div className="card card-profile shadow">
                <div className="px-4">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 order-lg-2">
                            <div className="card-profile-image pet">
                                <a href="javascript:;">
                                    <img src={this.props.petPhotoPath} className="pet rounded-circle" style={{width: "180px",height: "180px",}}/>
                                </a>
                                <a href="javascript:;">
                                    <img src="https://demos.creative-tim.com/argon-design-system/assets/img/faces/team-4.jpg" className="owner rounded-circle"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                            <div className="card-profile-actions py-4 mt-lg-0">
                                <a style={{color: "#fff"}} href="#" className="btn btn-sm btn-info"><i className="fas fa-star" style={{marginRight: "5px", color: "#fff"}}></i> Seguir</a>
                                <a style={{color: "#fff"}} href="#" className="btn btn-sm btn-info"><i className="fab fa-whatsapp" style={{marginRight: "5px", color: "#fff"}}></i> Mensagem</a>
                            </div>
                        </div>
                        <div className="col-lg-4 order-lg-1">
                            <div className="card-profile-stats d-flex justify-content-center">
                                <div>
                                    <span className="heading">22</span>
                                    <span className="description">Seguidores</span>
                                </div>
                                <div>
                                    <span className="heading">10</span>
                                    <span className="description">Fotos</span>
                                </div>
                                <div>
                                    <span className="heading">89</span>
                                    <span className="description">Comentários</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <h3>{this.props.name}<span className="font-weight-light">, {this.props.age}</span></h3>
                        <div className="h6 font-weight-300"><i className="ni location_pin mr-2"></i>Dono(a): Fulano de Tal</div>
                        <div className="h6 mt-4"><i className="ni business_briefcase-24 mr-2"></i>Perdido, Última localização: {this.props.last_known_location}</div>
                        <div><i className="ni education_hat mr-2"></i>Some cool description here</div>
                    </div>
                    <div className="mt-5 py-5 border-top text-center">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <p>{this.props.description}</p>
                                {this.coolFunction()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
