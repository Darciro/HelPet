import React, { Component } from 'react';
import Card from "../components/Card";
import Hero from "../components/Hero";

export default class Pet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            pet: []
        };
    }

    componentDidMount() {
        fetch(baseUrl + "/api/pets/" + this.props.match.params.id)
            .then( res => res.json() )
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        pet: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    render() {
        const { error, isLoaded, pet } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return(
                <div>
                    <div className="section">
                        <div className="container">
                            <div className="row flex-xl-nowrap">
                                <div className="d-none d-xl-block col-xl-2 ct-toc">
                                    LOADING
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="pets single">

                    <Hero title={pet.name}
                          sub-title="Desaparecido"/>

                    <div className="section">
                        <div className="container">
                            <div className="row flex-xl-nowrap">
                                <div className="col">

                                    <Card id={pet.id}
                                          pet_owner={pet.pet_owner}
                                          name={pet.name}
                                          age={pet.age}
                                          type={pet.type}
                                          breed={pet.breed}
                                          sex={pet.sex}
                                          size={pet.size}
                                          description={pet.description}
                                          last_known_location={pet.last_known_location}
                                          petPhotoPath={pet.petPhotoPath}
                                          state={pet.state}
                                          isSingle="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
