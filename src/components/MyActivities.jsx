import React, { useState, useEffect } from 'react';
import axios from 'axios'
import  { 
    Paper,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from '@material-ui/core';
import CreateActivity from './CreateActivity'

const URL = process.env.REACT_APP_FITNESS_TRACKR_API_URL
const myToken = JSON.parse(localStorage.getItem('token'))


const myUsernameFetch = (myToken) => {
    try {
        return axios.get(`${URL}users/me`, {
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${myToken}`,
            }
        }).then(({data: { username } }) => {
            return username
        })
    } catch (error) {
      console.error(error)
    }
}


const myActivitiesFetch = (username, myToken) => {
    try {
        return axios.get(`${URL}activities${id}`, {
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${myToken}`,
            }
        }).then(({ data }) => {
            return data
        })
    } catch (error) {
      console.error(error)
    }
}


const MyActivities = () => {
    let myUsername
    const [myActivities, setMyActivities] = useState([]);

    useEffect(async() => {
        if (myToken) {
            myUsername = await myUsernameFetch(myToken)
            const activities = await myActivitiesFetch(myUsername, myToken)
            setMyActivities(activities)
        }
    }, [])

    return (
        <>
        <CreateActivity />
        <br />
        <br />
        <TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell align="left">ID</TableCell>
						<TableCell align="left">Name</TableCell>
						<TableCell align="left">Description</TableCell>
                        <TableCell align="left">Creator Name</TableCell>
					</TableRow>
				</TableHead>

                <TableBody>
                    {myActivities &&
                      myActivities.map((activity) => {
                        return (
                          <TableRow key={activity.name}>
                            <TableCell component="th" scope="row">{activity.id}</TableCell>
                            <TableCell align="left">{activity.name}</TableCell>
                            <TableCell align="left">{activity.description}</TableCell>
                            <TableCell align="left">{activity.creatorName}</TableCell>
                          </TableRow>
                        )
                    })}
                </TableBody>
        	</Table>
		 </TableContainer>
      </>
    )
}

export default MyActivities;