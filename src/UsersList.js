import React from 'react';

function UsersList(props) {
    let usersList = props.usersList;
    let usersLiElements = usersList.map((user) => 
    <li key={user.id}>{[user.email, user.email, user.password]}</li>)
    console.log(usersList);

    return(
        <ul className="user-list">
            {usersLiElements}
        </ul>
    );
}
export default UsersList;