import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

const URL = process.env.REACT_APP_FITNESS_TRACKR_API_URL
const myToken = JSON.parse(localStorage.getItem('token'))

const CreateRoutine = () => {
    const [name, setName] = useState();
    const [goal, setGoal] = useState();
    const [myRoutines, setMyRoutines] = useState([]);
    const [isPublic, setIsPublic] = useState(true);

    const createRoutinePost = async () => {
        return await fetch(`${URL}/routines`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${myToken}`},
          body: JSON.stringify({
            name: name,
            goal: goal,
            isPublic: isPublic,
          }),
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
          })
          .catch(console.error);
      };
    
    const onRoutineSubmit = (event) => {
        event.preventDefault();
        createRoutinePost();
    }
    
    return (
        <div id="main">
            <h1>My Routines</h1>
             <form id="form" noValidate autoComplete="off" onSubmit={onRoutineSubmit}>
                <TextField 
                    id="name" 
                    label="name"
                    onInput={(event) => {
                        setName(event.target.value);
                    }} 
                />
    
                <TextField 
                    id="goal" 
                    label="goal"
                    onInput={(event) => {
                        setGoal(event.target.value);
                    }} 
                />
          <Button type="submit">Create Routine</Button>
        </form>
      </div>
    )

}


export default CreateRoutine