import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Activities.css'
import {
    Paper,
    TableContainer,
    Table,
    TableHead, 
    TableRow,
    TableCell,
    TableBody
} from '@material-ui/core';
import '../css/Activities.css'
import CreateActivity from './CreateActivity';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const URL = process.env.REACT_APP_FITNESS_TRACKR_API_URL

    useEffect(() => {
        axios.get(`${URL}activities`)
         .then(({ data }) => {
             if (data.length) {
                 setActivities(data)
             }
         });
    },[]);

    return (
        <>
         <h1>Activities Page</h1>
         <CreateActivity />
           <TableContainer component={Paper}>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell align="left">ID</TableCell>
                          <TableCell align="left">Name</TableCell>
                          <TableCell align="left">Description</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {activities.map((activity) => {
                          return (
                            <TableRow key={activity.name}>
                                <TableCell component="th" scope="row">{activity.id}</TableCell>
                                <TableCell align="left">{activity.name}</TableCell>
                                <TableCell align="left">{activity.description}</TableCell>
                            </TableRow>
                          )
                      })}
                  </TableBody>
              </Table>
          </TableContainer> 
      </>  
    )
}

export default Activities;
