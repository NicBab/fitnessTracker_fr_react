import React from 'react';
import { useState } from 'react';
import{ Button, TextField } from '@material-ui/core';
import {registerUser} from '../api'
import '../css/Register.css'

const Register = () => {
    const [username,setUsername] = useState();
    const [password, setPassword] = useState();

    async function registerUser() {
      try {
        const response =
            await fetch(`${URL}/users/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            })
        const data = await response.json()
        const token = await data.token
        storeCurrentUser(token)
      } catch (error) {
          console.log(error)
      }
    };


    const onFormSubmit = (event)=> {
      event.preventDefault();
      registerUser();
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
            type="password" 
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

