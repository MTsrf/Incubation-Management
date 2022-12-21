import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import './Application.css'

const PendingList = ({newPendingtList,handleApprove,handleDecline}) => {
  


  return (
    <div className='main'>
      {/* <h2 className='heading1' >New Applicant list</h2> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead className='tablehead' >
            <TableRow>
              <TableCell style={{ color: '#000' }}>S.no </TableCell>
              <TableCell style={{ color: '#000' }}>Company name</TableCell>
              <TableCell style={{ color: '#000' }}>Company details</TableCell>
              <TableCell>View</TableCell>
              <TableCell>Approve</TableCell>
              <TableCell>Decline</TableCell>


            </TableRow>
          </TableHead>
          <TableBody>

            {newPendingtList?.map((data, index) => (

              <TableRow >
                <TableCell component="th" scope="row" key={index}>
                  {parseInt(index) + 1}
                </TableCell>
                <TableCell >{data.name}</TableCell>

                <TableCell >{data.application.address},{data.application.city},{data.application.state}</TableCell>
                <TableCell >
                  <Button
                    variant="contained"
                    color="success"
                  // onClick={(event) => {
                  //   handleClick(event, cellValues);
                  // }}
                  >
                    Open
                  </Button>
                </TableCell>
                <TableCell >{
                  data.application.decline?<TableCell className='status-approved'>{data.application.status}</TableCell>:
                  data.application.approveStatus?<TableCell className='status-approved'>{data.application.status}</TableCell>:
                  <Button
                  variant="contained"
                  color="primary"
                  onClick={()=>{handleApprove(data)}}
                >
                  Approve
                </Button>
                  }
                 

               
                </TableCell>
                { data.application.approveStatus?<TableCell className='status-approved'>{data.application.status}</TableCell>:
                data.application.decline?<TableCell className='status-approved'>{data.application.status}</TableCell>:
                <TableCell >
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={()=>{handleDecline(data)}}
                  >
                    Decline
                  </Button>
                </TableCell>
                }
                
              </TableRow>
              

            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default PendingList
