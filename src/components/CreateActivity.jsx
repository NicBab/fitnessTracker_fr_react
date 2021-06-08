import React, { useState } from 'react';
import { Button, TextField }from '@material-ui/core';

const BASE = process.env.REACT_APP_FITNESS_TRACKR_API_URL
const myToken = JSON.parse(localStorage.getItem('token'))

const createActivity = () => {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [myActivities, setMyActivities] = useState([]);


    const createActivityPost = async () => {
    }

    const onActivitySubmit = (event) => {
        event.preventDefault();
        console.log(event)
    }

    return (
        <div id="main">
            <h1>My Activities</h1>
            <form id="form" noValidate autoComplete="off" onSubmit={onActivitySubmit}>
                <TextField
                    id="name"
                    label="name"
                    onInput={(event) => {
                        setName(event.target.value);
                    }}
                />

                <TextField
                    id="description"
                    label="description"
                    onInput={(event) => {
                        setDescription(event.target.value)
                    }}
                />
              <Button type="submit">Create Activity</Button>
           </form>
        </div>
    )
}

export default createActivity;