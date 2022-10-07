import NavigationBar from 'components/navigation-bar/NavigationBar';
import React, { Fragment, useContext } from 'react';
import { v4 } from 'uuid';

import { ReactComponent as Logo } from 'assets/crown.svg';
import { links } from 'data/nav-links';
import { UserContext } from 'contexts/user.context';
import { signOutUser } from 'utils/firebase/firebase.utils';
import CartIcon from 'components/app-specific/cart/cart-icon/CartIcon';

function Navigation() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();

    setCurrentUser(null);
  };

  // Add IDs to link object
  const formattedLinks =
    links &&
    links.map((link) => {
      if (link.isIcon) {
        if (link.text === 'Cart') {
          return {
            ...link,
            IconComponent: <CartIcon />
          }
        }
      }
      if (link.text === 'Sign Out')
        return {
          ...link,
          id: v4(),
          onClick: signOutHandler,
          show: currentUser ? true : false,
        };
      if (link.text === 'Sign In')
        return { ...link, id: v4(), show: currentUser ? false : true };
      return { ...link, id: v4() };
    });

  return (
    <div>
      <NavigationBar Logo={Logo} links={formattedLinks} />
    </div>
  );
}

export default Navigation;
