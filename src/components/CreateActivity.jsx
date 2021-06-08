import React, { useState } from 'react';
import { Button, TextField }from '@material-ui/core';

const URL = process.env.REACT_APP_FITNESS_TRACKR_API_URL
const myToken = JSON.parse(localStorage.getItem('token'))

const createActivity = () => {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [myActivities, setMyActivities] = useState([]);

    const createActivityPost = async () => {
        return await fetch (`${URL}activities`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${myToken}`
            },
            body: JSON.stringify({
                name: name,
                description: description,
            }),
        })
         .then((response) => response.json())
         .then((result) => {
             console.log(result)
         })
         .catch(console.error)
    }

    const onActivitySubmit = (event) => {
        event.preventDefault();
        console.log(event)
        createActivityPost()
    }

    return (
        <div>
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