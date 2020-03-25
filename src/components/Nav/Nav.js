import React from 'react'
import { NavLink } from 'react-router-dom'

import { ToggleThemeContext } from '../../context/theme'
import useStyles from './styles'

const Nav = () => {
  const classes = useStyles()
  const { toggleTheme, theme } = React.useContext(ToggleThemeContext)

  return (
    <nav className={classes.nav}>
      <ul className={classes.navList}>
        <li className={classes.navItem}>
          <NavLink
            className={classes.navLink}
            activeClassName={classes.navLinkActive}
            exact
            to='/'
          >
            Top
          </NavLink>
        </li>
        <li className={classes.navItem}>
          <NavLink
            className={classes.navLink}
            activeClassName={classes.navLinkActive}
            to='/new'
          >
            New
          </NavLink>
        </li>
        <li className={classes.navItem}>
          <NavLink
            className={classes.navLink}
            activeClassName={classes.navLinkActive}
            to='/user?id=bryanrasmussen'
          >
            User
          </NavLink>
        </li>
        <li className={classes.navItem}>
          <NavLink
            className={classes.navLink}
            activeClassName={classes.navLinkActive}
            to='/post?id=22674342'
          >
            Post
          </NavLink>
        </li>
      </ul>
      <button
        onClick={toggleTheme}
        className={classes.toggleThemeBtn}
      >
        {theme === 'light' ? '🌚' : '🌞'}
      </button>
    </nav>
  )
}

export default Nav
