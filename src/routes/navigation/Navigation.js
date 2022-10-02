import NavigationBar from 'components/navigation-bar/NavigationBar'
import React from 'react'
import { v4 } from 'uuid'

import { ReactComponent as Logo } from 'assets/crown.svg'
import { links } from 'data/nav-links'

function Navigation() {

  // Add IDs to link object
  const formattedLinks = links && links.map(link => {
    return { ...link, id: v4() }
  })

  return (
    <NavigationBar Logo={Logo} links={formattedLinks} />
  )
}

export default Navigation