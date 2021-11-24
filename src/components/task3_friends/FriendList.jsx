// import React from 'react'
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import {friendList} from "./Friend.module.css"

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
