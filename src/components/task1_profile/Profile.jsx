// import React from 'react'
import {
  profileClasses,
  avatarClasses,
  nameClasses,
  tagClasses,
  locationClasses,
  statsClasses,
  labelClasses,  
  quantityClasses,
  labelItemClasses,
} from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = ({ avatar, tag, username, location, stats }) => {
  return (
    <div className={profileClasses}>
      <div className="description">
        <img className={avatarClasses} src={avatar} alt="User avatar" />
        <p className={nameClasses}>{username}</p>
        <p className={tagClasses}>{tag}</p>
        <p className={locationClasses}>{location}</p>
      </div>
      <ul className={statsClasses}>
      <li className={labelItemClasses}>
          <span className={labelClasses}>{Object.keys(stats)[0]}</span>
          <br></br>
          <span className={quantityClasses}>{stats.followers}</span>
        </li>
        <li className={labelItemClasses}>
          <span className={labelClasses}>{Object.keys(stats)[1]}</span>
          <br></br>
          <span className={quantityClasses}>{stats.views}</span>
        </li>
        <li>
          <span className={labelClasses}>{Object.keys(stats)[2]}</span>
          <br></br>
          <span className={quantityClasses}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
