import React from 'react';

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function NavTab({ navTab }) {
  const { route, text } = navTab;
  return (
    <Link className='nav-link' to={`${route}`}>
      {text}
    </Link>
  );
}

NavTab.propTypes = {
    navTab: PropTypes.shape({
        route: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
  };

export default NavTab;
