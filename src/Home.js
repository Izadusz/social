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
            // latestPostList: [],
        };
    }

    componentDidMount() {
        this.getPostData();
        // this.timerID = setInterval(() => this.getPostData(),);
    }

    // componentWillUnmount() {
    //     clearInterval(this.timerID);
    // }

    getPostData = () => {

        axios.post('https://akademia108.pl/api/social-app/post/latest')
            .then(res => {
                const latest = res.data;

                this.setState((state) => {
                    let newPostList = [];

                    for (const [latest, post] of Object.entries(latest)) {
                        let lastPostObj = state.postList.find((postObj) => {
                            return (postObj.content === latest);

                        })

                        let newPostObj = {
                            posts: latest,
                            id: post.id,
                            userID: post.user_id,
                            content: post.content
                        }

                        if (lastPostObj !== undefined) {

                            if (newPostObj.lastContent) {
                                newPostObj.htmlArray = String;
                           
                            }                       
                        }

                        newPostList.push(newPostObj);
                    }

                    console.log(newPostList);

                    return ({
                        postList: newPostList
                    })
                });

                this.filterPostList();

            });
    }

    filterPostList = () => {
        this._inputFilter.value = this._inputFilter.value.trim().toUpperCase();

        this.setState((state) => {
            let newlatestPostList = state.postList.filter((postObj) => {

                return (postObj.content.includes(this._inputFilter.value));
            });

            return ({
                latestPostList: newLatestPostList
            });
        });

    //     // console.log(this._inputFilter.value);
    }


    render() {

        return (
            <div>
                <header className="home-header">
                    <h1>Home</h1>
                </header>
                <div className="main-section">                    
                    <PostList />
                    {/* <input ref={element => this._inputFilter = element} on change={this.filterPostList} type="text" /> */}
                    {/* <PostList postList={this.state.LatestPostList} /> */}                    
                    <div className="sidenav">Users List: </div>
                </div>
                {/* <UsersList usersList={this.state.users} />  */}
            </div>
        );

    }
}

export default Home;