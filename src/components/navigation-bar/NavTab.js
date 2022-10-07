import React from 'react';

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function NavTab({ navTab }) {
  const { route, text, onClick, isIcon, IconComponent } = navTab;
  console.log(IconComponent && IconComponent)
  if (isIcon) return <IconComponent />

  if (text === 'Sign Out') return (
    <Link className='nav-link' onClick={onClick}>
      {text}
    </Link>
  );

  return (
    <Link className='nav-link' to={`${route}`}>
      {text}
    </Link>
  );
}

NavTab.propTypes = {
    navTab: PropTypes.shape({
        route: PropTypes.string,
        text: PropTypes.string
    })
  };

export default NavTab;
