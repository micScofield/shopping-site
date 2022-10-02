import React from 'react';

import { BUTTON_TYPE_CLASSES } from 'common/constants';

import 'components/button/button.styles.scss';

function Button(props) {
  const { type, onClick, buttonType } = props;
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      type={type}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
