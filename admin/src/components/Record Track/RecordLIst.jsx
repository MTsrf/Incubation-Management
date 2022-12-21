import React from 'react'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LinearProgress } from '@mui/material';
import useFetch from '../../Hooks/useFetch'
import Progress from '../Progressbar/Progress';



const RecordLIst = () => {
    const { isLoading, serverError, apiData } = useFetch("/admin/allApplications");
 
    return (
        <div className='main'>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead className='tablehead' >
                        <TableRow>
                            <TableCell style={{ color: '#000' }}>S.no </TableCell>
                            <TableCell style={{ color: '#000' }}>Company name</TableCell>
                            <TableCell style={{ color: '#000' }}>Company details</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {apiData?.map((data, index) => (
               
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        {parseInt(index) + 1}
                                    </TableCell>
                                    <TableCell >{data.name}</TableCell>

                                    <TableCell >{data.application.address}</TableCell>
                                    <TableCell >


                                        {/* <LinearProgress color="success" variant='determinate'  /> */}
                                        {/* <Progress_bar status={data.status}/> */}
                                    </TableCell>
                                    <TableCell >
                                        

                                        {/* <LinearProgress color="success" variant='determinate' value={data.status === 'cancelled' ? 0 :data.status === 'new' ? 30 : data.status === 'pending' ? 80 : 100 } /> */}
                                        <Progress status={data.application.status}/>
                                    </TableCell>
                                </TableRow>
                        ))
                        }




                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default RecordLIst
