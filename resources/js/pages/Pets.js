import React, { Component } from 'react';
import Card from "../components/Card";
import Hero from "../components/Hero";

export default class Pets extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            pets: []
        };
    }

    componentDidMount() {
        fetch(baseUrl + "/api/pets")
            .then( res => res.json() )
            .then(
                (pets) => {
                    let petsArray = [];
                    for (var pet in pets) {
                        pets[pet]['id'] = pet;
                        petsArray.push(pets[pet]);
                    }
                    this.setState({
                        isLoaded: true,
                        pets: petsArray
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

    render() {
        const { error, isLoaded, pets } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return(
                <div className="home">
                    <Hero/>
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
            console.log(pets);
            return (
                <div className="home">
                    <Hero/>
                    <div className="section">
                        <div className="container">
                            <div className="row flex-xl-nowrap">
                                <div className="col" style={{marginTop: "15px"}}>
                                    {pets.map(pet => (
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
                                              state={pet.state} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
