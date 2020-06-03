/*
import React, {Component} from 'react';

export default class User extends Component {

    static getUser() {
        axios.get('http://127.0.0.1:8000/api/user')
            .then(
                (result) => {
                    return result;
                },
                (error) => {
                    console.error(error);
                    return false;
                }
            )
    }

    render() {}
}

*/
import React, {Component} from 'react';
const userContext = React.createContext({user: {}}); // Create a context object

export {
    userContext // Export it so it can be used by other Components
};
