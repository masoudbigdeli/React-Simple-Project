import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <Fragment>
        <Navbar/>
        <Outlet/>
    </Fragment>
  )
}

export default Home
