import React, { PropTypes } from 'react';

const Counter = ({ label = 'default label', onClick, count, onFetch, loading }) => {
  return (
    <div style={{border: 'solid 1px #000', margin: '8px', padding: '4px'}}>
        <h2> {label} </h2>
        {currentValue(count, loading)}
        <button onClick={onClick}>up</button>
        <button onClick={onFetch}>fetch value</button>
    </div>
  )};

const currentValue = (count, loading) =>
        !loading ? (
          <p>Count: {count}</p>
        ) : (
          <p>Loading...</p>
        )

Counter.propTypes = {
  onClick: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  label: PropTypes.string
};

export default Counter;
