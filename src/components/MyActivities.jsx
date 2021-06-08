import React from 'react';
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

const MyActivities = () => {
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
						<TableCell align="left">Goal</TableCell>
						<TableCell align="left">Creator Name</TableCell>
						<TableCell align="left">Is Public</TableCell>
						<TableCell align="left"></TableCell>
					</TableRow>
				</TableHead>

        		</Table>
		</TableContainer>
      </>
    )
}

export default MyActivities;