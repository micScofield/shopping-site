import React from 'react';

import PropTypes from 'prop-types'

import 'components/button/button.styles.scss';

const availableButtonTypes = ['google-sign-in', 'inverted']

function Button(props) {
  const { type, onClick, buttonType, buttonTypeClasses, children } = props;
  return (
    <button
      className={`button-container ${buttonTypeClasses[buttonType]}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  buttonType: PropTypes.oneOf([...availableButtonTypes]),
  onClick: PropTypes.func,
  buttonTypeClasses: PropTypes.object,
  children: PropTypes.string.isRequired
}
