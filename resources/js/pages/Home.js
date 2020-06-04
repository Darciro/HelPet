import React, { Component } from 'react';
import Hero from "../components/Hero";
import Card from "../components/Card";

// const home = () => {
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        //$('#main-header, #main-footer').addClass('d-none');
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

    openIntrovideo() {
        var $videoSrc = $('.video-btn').data( "src" );
        // when the modal is opened autoplay it
        $('#introModal').on('shown.bs.modal', function (e) {
            // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
            $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" );
        })

        // stop playing the youtube video when I close the modal
        $('#introModal').on('hide.bs.modal', function (e) {
            // a poor man's stop video
            $("#video").attr('src',$videoSrc);
        })
    }

    render() {
        let today = new Date();
        console.log(today, today.toISOString() )
        const { error, isLoaded, pets } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return(
                <div className="home">

                    <div className="container py-9">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="d-flex justify-content-center">
                                <div className="d-flex align-items-center">
                                    <span className="mr-2">Carregando os pets</span>
                                    <div className="spinner-grow spinner-grow-sm ml-auto" role="status" aria-hidden="true"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            );
        } else {
            $('#main-header, #main-footer').removeClass('d-none');
            return (
                <div className="home">

                    <Hero title="Ajude um Pet"
                          sub-title="A hora é agora!!!"
                          desc={[
                              <div>
                                  <button onClick={this.openIntrovideo} type="button" className="btn btn-warning btn-icon mt-3 mb-sm-0 video-btn" data-toggle="modal" data-target="#introModal" data-src="https://www.youtube.com/embed/NGC8IS4gjpM">
                                      <span className="btn-inner--icon"><i className="ni ni-button-play"></i></span>
                                      <span className="btn-inner--text">Veja como contribuir</span>
                                  </button>

                                  <div className="modal intro-modal fade" id="introModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                      <div className="modal-dialog modal-xl">
                                          <div className="modal-content">
                                              <div className="modal-body">
                                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                      <span aria-hidden="true">&times;</span>
                                                  </button>
                                                  <div className="embed-responsive embed-responsive-16by9">
                                                      <iframe className="embed-responsive-item" src="" id="video" allowscriptaccess="always" allow="autoplay"></iframe>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          ]} />

                    <div className="section">
                        <div className="container">
                            <div className="row flex-xl-nowrap">
                                <div className="col" style={{marginTop: "15px"}}>

                                    {pets.map(pet => (
                                        <Card id={pet.id}
                                              pet_owner={pet.pet_owner}
                                              createdAt={pet.createdAt}
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
                                <div className="d-none d-xl-block col-xl-2 ct-toc">
                                    <ul className="section-nav">
                                        <li className="toc-entry toc-h3"><a href="#nav-pills">Atualizações</a></li>
                                        <li className="toc-entry toc-h2"><a href="#circled-nav-pills">Seguindo</a></li>
                                        <li className="toc-entry toc-h2"><a href="#tabs">Minha área</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

