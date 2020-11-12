import React, { Component } from 'react';
import './SignUp.css';
import UsersList from './UsersList';
import axios from 'axios';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            nameError: '',
            emailError: '',
            passwordError: '',
            passwordConfirmError: ''
        };
    }

    addUser = (event) => {
        event.preventDefault();

        if (this._inputName.value === '') {
            this.setState({ nameError: 'Uzupełnij pole' });
           
        } else {
            this.setState({ nameError: '' })
        }

        if (this._inputEmail.value === '') {
            this.setState({ emailError: 'Uzupełnij pole' });
            
        } else {
            this.setState({ emailError: '' })
        }

        if (this._inputPassword.value === '') {
            this.setState({ passwordError: 'Uzupełnij pole' });
        
        } else {
            this.setState({ passwordError: '' })
        }
        if (this._inputPasswordConfirm.value !== this._inputPassword.value) {
            this.setState({ passwordConfirmError: 'Hasła nie są takie same' });
        } else {
            this.setState({ nameError: '' })
        }

        let newUser = {
            username: this._inputName.value,
            email: this._inputEmail.value,
            password: this._inputPassword.value,
        }

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

        axios.post(
            'http://akademia108.pl/api/social-app/user/signup',
            JSON.stringify(newUser),
            { 'headers': headers })
            .then((req) => {

                // your code :)     
                
                if(!req.data.signedup) {


                    let userExistMessage = (req.data.message.username)?req.data.message.username[0]:'';
                    let emailExistMessage = (req.data.message.email)?req.data.message.email[0]:'';

                    this.setState({ 
                        nameError: userExistMessage,
                        emailError: emailExistMessage
                    });
                }

                console.log(req.data);
            }).catch((error) => {
                console.error(error);
            })

    

    }

    render() {

        return (
            <div className="users-main">
                <h1>Sign up</h1>
                <form onSubmit={this.addUser}>
                    <input ref={(element) => { this._inputName = element; }} placeholder="Enter name" type="text" ></input>
                    <span>{this.state.nameError}</span>
                    <input ref={(element) => { this._inputEmail = element; }} type="email" placeholder="jan@nowak.pl" ></input>
                    <span>{this.state.emailError}</span>
                    <input ref={(element) => { this._inputPassword = element; }} type="password" placeholder="Enter password" ></input>
                    <span>{this.state.passwordError}</span>
                    <input ref={(element) => { this._inputPasswordConfirm = element; }} type="password" placeholder="Confirm password"></input>
                    <span>{this.state.passwordConfirmError}</span>
                    <button type="submit">Sign up</button>
                </form>

                
            </div>

        );

    }
}

export default SignUp;