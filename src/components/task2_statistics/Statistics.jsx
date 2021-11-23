// import React from 'react'
import PropTypes from "prop-types";

const Statistics = ({ stats, title }) => {
  return (
    <section className="statistics">
      {/* rendering title only if avaiable */}
      {title !== "" && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="item">
            <span className="label">{label}</span>
            <br></br>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
