import React, { Component } from 'react';
import axios from 'axios';
// import UsersList from './UsersList';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameError: '',
            passwordError: '',                      
        };
    }

    enterUser = (event) => {
        event.preventDefault();

        if (this._inputName.value === '') {
            this.setState({ nameError: 'Uzupełnij pole' });
            return
        } else {
            this.setState({ nameError: '' })
        }
        if (this._inputPassword.value === '') {
            this.setState({ passwordError: 'Uzupełnij pole' });
            return
        } else {
            this.setState({ passwordError: '' })
        }
  
        
        
        const headersLogin = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

        let user = {
            username: this._inputName.value,        
            password: this._inputPassword.value,
            ttl: 3600,
                    
        }

        axios.post(
            'https://akademia108.pl/api/social-app/user/login',

            JSON.stringify(user),
            { 'headers': headersLogin })
            .then((req) => {

                // your code :)      

                console.log(req.data);
            }).catch((error) => {
                console.error(error);
            })

        this._inputName.value = '';        
        this._inputPassword.value = '';
        
    }
        render() {

            return (
                <div className="users-main">
                    <h1>Login</h1>                  
                    <form>
                        <input ref={(element) => { this._inputName = element; }} type="text" placeholder="Enter name"></input>
                        <span>{this.state.nameError}</span>
                        <input ref={(element) => { this._inputPassword = element; }} type="text" placeholder="Enter password"></input>
                        <span>{this.state.passwordError}</span>                        
                        <button type="submit">Log in</button>
                    </form>                   
                </div>
            );
        }
    
}
export default Login;