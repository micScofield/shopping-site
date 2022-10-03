import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import 'components/navigation-bar/navigation.styles.scss';
import NavTab from './NavTab';

function NavigationBar({ Logo, links }) {
  return (
    <div className='navigation'>
      {Logo && (
        <Link className='logo-container' to='/'>
          <Logo />
        </Link>
      )}

      <div className='nav-links-container'>
        {links.length !== 0 &&
          links.map((link) => {
            if (link.show) {
              return (
                <Fragment key={link.id}>
                  <NavTab navTab={link} />
                </Fragment>
              );
            } else return null
          })}
      </div>
    </div>
  );
}

NavigationBar.propTypes = {
  Logo: PropTypes.any,
  links: PropTypes.arrayOf(PropTypes.object),
};

export default NavigationBar;
