import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateRoutine from './CreateRoutine'
import '../css/Routines.css'
import {
    Paper,
    TableContainer,
    Table,
    TableHead, 
    TableRow,
    TableCell,
    TableBody
} from '@material-ui/core';

const Routines = () => {
    const [routines, setRoutines] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_FITNESS_TRACKR_API_URL}routines`)
         .then(({ data }) => {
             if (data.length) {
                 setRoutines(data)
                 
             }
         });
    }, []);

    return (
        <>
          <h1>Routines Page</h1>
            <TableContainer component={Paper}>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell align="left">ID</TableCell>
                          <TableCell align="left">Name</TableCell>
                          <TableCell align="left">Goal</TableCell>
                          <TableCell align="left">CreatorName</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {routines.map((routine) => {
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

export default Routines;