import React, { Component } from 'react';

// import UsersList from './UsersList';
// import SignUp from './SignUp';
import PostList from './PostList';
import './Home.css';
import axios from 'axios';
// import NewPost from './NewPost'


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postList: [],
            lastPostDate: new Date().toISOString()
        };
    }

    componentDidMount() {
        this.getPostData();
    }



    getPostData = () => {

        axios.post('https://akademia108.pl/api/social-app/post/latest')
            .then(res => {
                const latest = res.data;
                this.setState({
                    postList: latest,
                    lastPostDate: latest[9].updated_at
                })

            });
    }

    getNextPosts = () => {

        axios.post(
            'https://akademia108.pl/api/social-app/post/older-then',
            {
                "date": this.state.lastPostDate
            }

        ).then(res => {
            const next = res.data;

            if (next && next.length > 0) {
                this.setState(prevState => {
                    return {
                        postList: prevState.postList.concat(next),
                        lastPostDate: next[next.length - 1].created_at
                    }

                });

            }
            console.log(next);

        });
        console.log('Działa');
    }

    render() {

        return (
            <div>
                <header className="home-header">
                    <h1>Home</h1>
                </header>
                <div className="main-section">
                    <div className="post-list">                        
                        <PostList postList={this.state.postList} />
                        <button onClick={this.getNextPosts}>Pobierz kolejne</button>
                    </div>
                    <div className="sidenav">Users List: </div>
                </div>

            </div>
        );

    }
}

export default Home;