// import React from 'react'
// import user from "./user.json";
import propTypes from 'prop-types';

const Profile = ({ avatar, tag, username, location, stats }) => {
  return (
    <div className="profile">
      {" "}
      <b>Task 1 - social media profile</b>
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="label">{Object.keys(stats)[0]}</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">{Object.keys(stats)[1]}</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">{Object.keys(stats)[2]}</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {

  
}

export default Profile;
