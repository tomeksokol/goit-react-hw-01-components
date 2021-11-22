// import React from 'react'
// import user from "./user.json";
import PropTypes from 'prop-types';

const Profile = ({ avatar, tag, username, location, stats }) => {
  return (
    <div className="profile">
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
  avatar: PropTypes.string,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
