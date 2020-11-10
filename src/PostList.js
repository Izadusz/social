import React from 'react';
import './PostList.css';
import './Home.css';

function PostList(props) {

    let postList = props.postList;

    let liElements = postList.map((postObj) => {

        return (
            <div>
                <input placeholder="Nowy post" type="text" ></input>
                <button type="submit">Dodaj post</button>
                <span className="PostsList">Ostatnie posty:</span>
                <li key={postObj.id}>
                    {/* <span className={`PostContent ${postObj.cssClass}`}>{postObj.last} {postObj.htmlArray}</span>
              <span className="LatestContent">{postObj.content}</span>
                    {/* <span className="PostId">{postObject.id}</span> */}
                    {/* <span className="UserId">{postObject.user_id}</span><hr>qq</hr> */}
                    
                </li>
            </div>
        );
    })

    return (
        <div className="PostList">
            <ul className="TheList">
                <li></li>
                {liElements}
            </ul>
        </div>
    );
}

export default PostList;