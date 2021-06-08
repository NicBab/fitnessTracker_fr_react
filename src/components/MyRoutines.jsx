import React, { useState, useEffect } from 'react';
import {
	Paper,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from "@material-ui/core";
import axios from 'axios'
import CreateRoutine from './CreateRoutine'
import '../css/MyRoutines.css';

const BASE = process.env.REACT_APP_FITNESS_TRACKR_API_URL
const myToken = JSON.parse(localStorage.getItem('token'))


const myUsernameFetch = (myToken) => {
    try {
        return axios.get(`${BASE}users/me`, {
            headers: {
                "content-Type": 'application/json',
                "Authorization": `Bearer ${myToken}`,
            }
        }).then(({ data: { username } }) => {
            return username
        })
    } catch (error) {
      console.error(error)
    }
}


const myRoutinesFetch = (username, myToken) => {
    try {
        return axios.get(`${BASE}users/${username}/routines`, {
            headers: {
                "content-Type": 'application/json',
                "Authorization": `Bearer ${myToken}`,
            }
        }).then(({ data }) => {
            return data
        })
    } catch (error) {
      console.error(error)
    }
}


const MyRoutines = () => {
    let myUsername
    const [myRoutines, setMyRoutines] = useState([])

    useEffect(async () => {
        if (myToken) {
            myUsername = await myUsernameFetch(myToken)
            const routines = await myRoutinesFetch(myUsername, myToken)
            setMyRoutines(routines)
        }
    }, [])

    return (
        <>
        <CreateRoutine />
        <br />
        <br />
        <TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell align="left">ID</TableCell>
						<TableCell align="left">Name</TableCell>
						<TableCell align="left">Goal</TableCell>
						<TableCell align="left">Creator Name</TableCell>
						<TableCell align="left">Is Public</TableCell>
						<TableCell align="left"></TableCell>
					</TableRow>
				</TableHead>

                <TableBody>
                      {myRoutines.map((routine) => {
                          return (
                            <TableRow key={routine.name}>
                                <TableCell component="th" scope="row">{routine.id}</TableCell>
                                <TableCell align="left">{routine.name}</TableCell>
                                <TableCell align="left">{routine.goal}</TableCell>
                                <TableCell align="left">{routine.creatorName}</TableCell>
                            </TableRow>
                          )
                      })}
                  </TableBody>

			</Table>
		</TableContainer>
      </>

    )
 
}

export default MyRoutines;

