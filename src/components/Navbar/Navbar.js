import { AppBar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './Navbar-styles'

const Navbar = () => {

    const classes = useStyles();
  return (
    <AppBar position='static' sx={{marginBottom: '20px'}}>
        <ul className={classes.navbarItems}>
            <Link to="/"> <li className={classes.navItem}>خانه</li> </Link>
            <Link to="/about-us"> <li className={classes.navItem}>درباره ما</li> </Link>
        </ul>
    </AppBar>
  )
}

export default Navbar
