import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import Register from './Register'
import Login from './Login'
import '../css/Home.css';

const Home = () => {
    return(
        <>
          <h1 id="title">Welcome to my Fitness TrackR</h1>
            <Register />
            <Login />
        </>
    )
}

export default Home;