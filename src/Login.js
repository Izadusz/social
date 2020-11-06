import React, { Component} from 'react';

class Login extends Component {

    render() {

        return (
            <div className="users-main">
                <h1>Login</h1>      
                {/* <form onSubmit={this.addUser}> */}
                <form>
                    <input ref={(element) => { this._inputName = element; }} type="text" placeholder="Enter name"></input>
                    <input ref={(element) => { this._inputPassword = element; }} type="text" placeholder="Enter password"></input>
                    <button type="submit">Log in</button>
                </form>
            </div>
        )
    }       
} 
export default Login;