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
            return
        } else {
            this.setState({ nameError: '' })
        }

        if (this._inputEmail.value === '') {
            this.setState({ emailError: 'Uzupełnij pole' });
            return
        } else {
            this.setState({ emailError: '' })
        }

        if (this._inputPassword.value === '') {
            this.setState({ passwordError: 'Uzupełnij pole' });
            return
        } else {
            this.setState({ passwordError: '' })
        }
        if (this._inputPasswordConfirm.value !== this._inputPassword.value) {
            this.setState({ passwordConfirmError: 'Hasła nie są takie same' });
            return
        } else {
            this.setState({ nameError: '' })
        }

        let newUser = {
            username: this._inputName.value,
            email: this._inputEmail.value,
            password: this._inputPassword.value,
            confirmpassword: this._inputPasswordConfirm.value
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

                console.log(req.data);
            }).catch((error) => {
                console.error(error);
            })

        this._inputName.value = '';
        this._inputEmail.value = '';
        this._inputPassword.value = '';
        this._inputPasswordConfirm = '';

    }

    // let formFields = newUser;
    // let allFields = false;
    // let signNewUser = 
    //     for (let i = 0; i < formFields.length; i++) {
    //     if (formFields[i].value === '') {
    //         allFields = false;
    //         formFields[i].classList.add('error');
    //     } else {
    //         allFields = true;
    //         formFields[i].classList.remove('error');
    //     }
    // }

    // if (allFields) {
    //     signNewUser(newUser);
    // } else {
    //     appointmentMessage.classList.add('error');
    //     appointmentMessage.innerText = `Wypełnij wymagane pola`;
    // }

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