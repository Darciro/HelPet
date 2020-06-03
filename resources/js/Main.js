import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';

import About from './pages/About';
import Partners from './pages/Partners';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Pets from './pages/Pets';
import Pet from './pages/Pet';

import {userContext} from './helpers/userContext';
import AddPet from "./pages/AddPet";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/partners",
        component: Partners
    },
    {
        path: "/pets",
        component: Pets
    },
    {
        path: "/pets/:id",
        component: Pet
    },
    {
        path: "/add-pet",
        component: AddPet
    },
    /*{
        path: "/pets",
        component: Pets,
        routes: [
            {
                path: "/pets/:id",
                component: Pet
            },
        ]
    }*/
];

export default class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            user: null
        };
    }

    componentDidMount() {
        $('#main-header, #main-footer').addClass('d-none');

        axios.get(baseUrl + '/api/user')
            .then(
                (loggedInUser) => {
                    this.setState({
                        isLoaded: true,
                        user: loggedInUser
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
        const { error, isLoaded, user } = this.state;

        $('#main-header, #main-footer').removeClass('d-none');

        if (!isLoaded) {
            return(
                <div className="container vh-100">
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
            console.log('Logged User', user);
            return (
                <userContext.Provider value={this.state.user}>
                    <div className="page">
                        <Router>
                            <Header/>

                            <main>
                                {routes.map((route, i) => (
                                    <Route exact
                                           key={route.path}
                                           path={route.path}
                                           component={route.component}
                                           {...route} />
                                ))}
                            </main>

                            <Footer/>
                        </Router>
                    </div>
                </userContext.Provider>
            );
        }
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
