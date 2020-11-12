import React from 'react';
import './PostList.css';
import './Home.css';
import NewPost from './NewPost';

function PostList(props) {

    let postList = props.postList;

    let liElements = postList.map((postObj) => {

        return (

            <div key={postObj.id}>
                <h3>{postObj.user.username}</h3>
                <p>{postObj.content}</p>
            </div>

        );
    })

    return (
        <div className="TheList">
            <div className="posts">
                <NewPost />
            </div>
            <h2 className="PostsList">Ostatnie posty:</h2>
            {liElements}
        </div>

    );
}

export default PostList;