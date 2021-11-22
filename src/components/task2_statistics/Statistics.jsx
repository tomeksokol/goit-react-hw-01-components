// import React from 'react'
import PropTypes from "prop-types";

const Statistics = ({ stats, title }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map((stat) => (
          <li key={stat.id} className="item">
            <span className="label">{stat.label}</span>
            <br></br>
            <span className="percentage">{stat.percentage}</span>
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
