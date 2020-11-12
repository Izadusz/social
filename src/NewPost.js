import React, { Component } from 'react';
// import UsersList from './UsersList';
import axios from 'axios';
import './NewPost.css'

class NewPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newPosts: [],
        };
    }

    componentDidMount() {
        this.addPost();
        this.timerID = setInterval(() => this.addPost(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    addPost = (event) => {
        event.preventDefault();
        // console.log(`this._inputContent.value`);

        let newInfo = {
            content: this._inputContent.value,
            // created_at: this.date,

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

                this.setState(prevState => {
                    return {
                        postList: prevState.postList.concat(newInfo),

                    }

                });

                console.log(req.data);
            }).catch((error) => {
                console.error(error);
            })

        this._inputContent.value = '';        
    }
   

    render() {

        return (
            <div className="add-post">
                <h1>Dodaj nowy post</h1>
                <form onSubmit={this.addPost}>
                    <textarea ref={(element) => { this._inputContent = element; }}></textarea>
                    <button onClick={this.addPost}>Dodaj post</button>                    
                </form>
                <PostList postList={this.state.addPost}/>
            </div>

        );

    }
}

export default NewPost;