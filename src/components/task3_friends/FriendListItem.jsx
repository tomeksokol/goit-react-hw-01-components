// import React from 'react';
import PropTypes from "prop-types";
import {
  itemClasses,
  statusOnlineClasses,
  statusOfflineClasses,
  avatarClasses,
  nameClasses,
} from "./Friend.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  let status = isOnline ? statusOnlineClasses : statusOfflineClasses;
  return (
    <li className={itemClasses}>
      <span className={status}>
      </span>
      <br></br>
      <img
        className={avatarClasses}
        src={avatar}
        alt="User avatar"></img>
      <p className={nameClasses}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
