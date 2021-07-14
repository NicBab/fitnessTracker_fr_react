import React from 'react';
import { useState } from 'react';
import{ Button, TextField } from '@material-ui/core';
import {registerUser} from '../api'
import { storeCurrentUser } from '../auth'
import '../css/Register.css'
const URL = process.env.REACT_APP_FITNESS_TRACKR_API_URL

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
        console.log(data)
      
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

