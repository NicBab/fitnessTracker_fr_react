import React, { useState } from 'react';
import axios from 'axios';
import{ Button, TextField } from '@material-ui/core';
import {loginUser} from '../api';
import './Login.css';

const Login = () => {
    const [username,setUsername] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const onFormSubmit = (event)=> {
        event.preventDefault();
        loginUser();
    };

    return (
      <>
       {errorMessage}
        <form id="form" noValidate autoComplete="off" onSubmit={onFormSubmit}>
          <TextField 
            id="username" 
            label="Username"
            onInput={(event) => {
                setUsername(event.target.value);
            }} 
          />

          <TextField 
            id="password" 
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