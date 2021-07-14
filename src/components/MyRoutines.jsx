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
import RoutineRow from './RoutineRow'
import '../css/MyRoutines.css'; 

const URL = process.env.REACT_APP_FITNESS_TRACKR_API_URL
const myToken = JSON.parse(localStorage.getItem('token'))


const myUsernameFetch = (myToken) => {
    try {
        return axios.get(`${URL}users/me`, {
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
        return axios.get(`${URL}users/${username}/routines`, {
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

    const onRemoveRoutine = (idx) => {
        const copy = [...myRoutines]
        copy.splice(idx, 1)
        setMyRoutines(copy)
    }

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
						<TableCell align="right"> Edit / Delete</TableCell>
					</TableRow>
				</TableHead>

                <TableBody>
                      {myRoutines && myRoutines.map((routine, idx) => {
                          return (
                                <RoutineRow
                                    key={routine.id}
                                    routine={routine}
                                    onRemoveRoutine={() => {
                                        onRemoveRoutine(idx);
                                }}
                            />
                          )
                      })}
                  </TableBody>
			 </Table>
		 </TableContainer>
      </>
    )
}

export default MyRoutines;

