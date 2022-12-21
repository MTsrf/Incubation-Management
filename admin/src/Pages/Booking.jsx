import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import RecordLIst from '../components/Record Track/RecordLIst';
import BookingSlot from '../components/BookingSlot/BookingSlot';
const Booking = () => {
  return (
    <div>
            <Box>
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        {/* New Applicant List*/}
                        <Grid item lg={12}>
                            <Paper
                                sx={{
                                    p: 2,
                                }}
                            >
                                <Typography>
                                    New Applicant List
                                </Typography>
                                <BookingSlot/>
                            </Paper>
                        </Grid>
                        {/* Recent Deposits */}

                        
                    </Grid>
                    {/* <Copyright sx={{ pt: 4 }} /> */}
                </Container>
            </Box>
        </div>
  )
}

export default Booking
