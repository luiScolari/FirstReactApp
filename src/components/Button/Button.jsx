import React from 'react';
import P from 'prop-types';

import './Button.css';
const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  children: 'sem valor',
};

Button.propTypes = {
  children: P.string,
  onClick: P.func,
};
