import React from 'react';

import PropTypes from 'prop-types'

import 'components/button/button.styles.scss';

function Button(props) {
  const { type, onClick, buttonType, children } = props;
  return (
    <button
      className={`button-container ${buttonType ? buttonType : ''}`}
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
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired
}
