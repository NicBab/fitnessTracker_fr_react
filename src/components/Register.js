import React from 'react';

import { useState } from 'react';

import{ Button, TextField } from '@material-ui/core';

import './Register.css'


const Register = () => {
    const [username,setUsername] = useState();
    const [password, setPassword] = useState();

    const onFormSubmit = (event)=> {
        event.preventDefault();
        console.log(username,password)
    };

    return (
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
          <Button type="submit">Register</Button>
        </form>
    )
}

export default Register;