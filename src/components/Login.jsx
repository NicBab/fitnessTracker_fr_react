import React, { useState } from 'react';
import axios from 'axios';
import{ Button, TextField } from '@material-ui/core';
import {loginUser} from '../api';

import '../css/Login.css';

const Login = () => {
    const [username,setUsername] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const URL = process.env.REACT_APP_FITNESS_TRACKR_API_URL

   
    const loginUser = async () => {
      return await axios
        .post(`${URL}users/login`, {
          username,
          password,
        })
        .then(({ data: { token } }) => {
         
          if (token) {
            localStorage.setItem("token", JSON.stringify(token));
            window.location.href = `${window.location.origin}/home`;
          } else {
            setErrorMessage("Something went horribly wrong");
            // show some error message
          }
        })
        .catch((error) => {
          console.log(error);
         
          setErrorMessage("Something went horribly wrong");
          // set some error message
        });
    };


    const onLoginSubmit = (event)=> {
      event.preventDefault();
      loginUser();
  };


    return (
      <>
       {errorMessage}
        <form id="form" noValidate autoComplete="off" onSubmit={onLoginSubmit}>
          <TextField 
            id="username" 
            label="Username"
            onInput={(event) => {
                setUsername(event.target.value);
            }} 
          />

          <TextField 
            id="password" 
            type="password"
            label="Password"
            onInput={(event) => {
                setPassword(event.target.value);
            }} 
          />
          <Button type="submit">LOGIN</Button>
        </form>
      </>
    )
}

export default Login