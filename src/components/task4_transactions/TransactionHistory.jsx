// import React from 'react';
import PropTypes from 'prop-types';
import {transactionHistory} from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
items: PropTypes.array,
}

export default TransactionHistory;
