// import React from 'react'
import PropTypes from "prop-types";
import {
  statiscticsClasses,
  titleClasses,
  statListClasses,
  itemClasses,
  percentageClasses,
} from "./Statistics.module.css";

const Statistics = ({ stats, title }) => {
  const randomHexColor = () =>
  "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  return (
    <section className={statiscticsClasses}>
      {/* rendering title only if avaiable */}
      {title !== "" && <h2 className={titleClasses}>{title}</h2>}

      <ul className={statListClasses}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={itemClasses} style={{backgroundColor: `${randomHexColor()}`}}>
            <span className="label">{label}</span>
            <br></br>
            <span className={percentageClasses}>{percentage}%</span>
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
