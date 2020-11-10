import React, { Component } from 'react';
import UsersList from './UsersList';
import axios from 'axios';

class NewPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],            
        };
    }

    addPost = (event) => {
        event.preventDefault();

            let newInfo = {
            content: this._inputContent.value,
  
        }

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

        axios.post(
            ' https://akademia108.pl/api/social-app/post/add',
            JSON.stringify(newInfo),
            { 'headers': headers })
            .then((req) => {

                // your code :)      

                console.log(req.data);
            }).catch((error) => {
                console.error(error);
            })

        this._inputContent.value = '';
       

    }

    render() {

        return (
            <div className="users-main">
                <h1>Dodaj nowy post</h1>
                <form onSubmit={this.addPost}>
                    <input ref={(element) => { this._inputContent = element; }} type="text" ></input>                  */}
                    
                </form>                
            </div>

        );

    }
}

export default NewPost;