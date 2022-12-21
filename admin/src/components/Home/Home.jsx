import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import PendingList from '../ApplicantList/PendingList';
import NewApplicant from '../ApplicantList/NewApplicant';
import { useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Context/AuthContext';
import { useContext } from 'react';



const Home = () => {

    const [newList, setNewList] = useState()
    const [newPendingtList, setNewPendingList] = useState()
    const { admin } = useContext(AuthContext)


    const token = admin.jwt
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const fetchData = (async () => {
        try {

            let res = await axios.get("/admin/allApplications", config)
            const newApplicants = await res.data?.filter((item) => {
                return item.application.pending == true
            })
            setNewList(newApplicants)
            const pendingList = await res.data?.filter((item) => {
                return item.application.approve == true
            })
            setNewPendingList(pendingList)
        } catch (error) {

        }

    })
    useEffect(() => {

        fetchData()

    }, [])


    //Pending List approvel
    const handleClick = async (data) => {
        console.log(data);
        let d = await axios.put("/admin/pending", data, config)
        fetchData()
    };
    //approve request
    const handleApprove = async (data) => {
        let d = await axios.put("/admin/approve", data, config)
        console.log(d.data);
        if (d.data.updated) {
            fetchData()
        }

    }

    //declined Request
    const handleDecline = async (data) => {
        console.log(data);
        let d = await axios.patch("/admin/declined", data, config)
        if (d.data.updated) {
            fetchData()
        }

    }
    return (
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
                            <NewApplicant newList={newList} handleClick={handleClick} />
                        </Paper>
                    </Grid>
                    {/* Recent Deposits */}

                    {/* Pending List */}
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <Typography>
                                Pending Application List
                            </Typography>
                            <PendingList newPendingtList={newPendingtList} handleApprove={handleApprove} handleDecline={handleDecline} />
                        </Paper>
                    </Grid>
                </Grid>
                {/* <Copyright sx={{ pt: 4 }} /> */}
            </Container>
        </Box>
    )
}

export default Home
