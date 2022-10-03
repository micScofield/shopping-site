import NavigationBar from 'components/navigation-bar/NavigationBar';
import React, { useContext } from 'react';
import { v4 } from 'uuid';

import { ReactComponent as Logo } from 'assets/crown.svg';
import { links } from 'data/nav-links';
import { UserContext } from 'contexts/user.context';

function Navigation() {

  const { currentUser } = useContext(UserContext)

  // Add IDs to link object
  const formattedLinks =
    links &&
    links.map((link) => {
      if (link.text === 'Sign Out') return { ...link, id: v4(), show: currentUser ? true : false }
      if (link.text === 'Sign In') return { ...link, id: v4(), show: currentUser ? false : true }
      return { ...link, id: v4()};
    });

  return <NavigationBar Logo={Logo} links={formattedLinks} />;
}

export default Navigation;
