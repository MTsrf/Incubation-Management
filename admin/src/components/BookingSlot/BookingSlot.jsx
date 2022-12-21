import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useFetch from '../../Hooks/useFetch'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import axios from 'axios';
import './BookingSlot.css'
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingSlot = () => {


    const {admin} = useContext(AuthContext)

    const token = admin.jwt;
    const config = {
        headers:{
            Authorization: `Bearer ${token}`,
        },
    }
    const { isLoading, serverError, apiData, reFetch } = useFetch("/admin/allApprove");

    const [slotData, setSlotData] = useState('')


    // Modal functionalities
    const [open, setOpen] = useState(false);
    const handleOpen = (data) => {
        setSlotData(data)
        setOpen(true)
    };
    const handleClose = (data) => {

        setOpen(false)
    };





    const [company, setCompany] = useState('');

    const handleChange = (event) => {
        setCompany(event.target.value);
    };



    //geting data
    const [slot, setSlot] = useState()

    //geting data
    const fetchData = (async () => {
        let res = await axios.get("/admin/slotset",config)
        setSlot(res.data)

    })
    useEffect(() => {

        fetchData()

    }, [])


    const onSubmit = async () => {
        const bookslot = await axios.patch('/admin/bookSlot', { slotData, company },config)
        console.log(bookslot);
        if (bookslot.data.updated) {
            fetchData()
            reFetch()
            handleClose()
        }
    }


    return (
        <div>
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 75,
                            height: 75,
                        },
                    }}
                >
                    {
                        slot?.map((data,index) => (
                            data.isBooked ? <Paper key={index}>{data.Slot}</Paper> : <Paper elevation={0} onClick={() => { handleOpen(data) }} key={index}>{data.Slot}</Paper>
                        ))
                    }



                    {/* <Paper elevation={0} />
                    <Paper />
                    <Paper elevation={3} />
                    <Paper elevation={3} /> */}
                </Box>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <Typography id="transition-modal-title" variant="h6" component="h2" mb={5}>
                                Select Company
                            </Typography>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Company Name</InputLabel>
                                {
                                    isLoading ? null : <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={company}
                                        label="Comapny Names"
                                        onChange={handleChange}
                                    >

                                        {apiData?.map((data , index) => (
                                            <MenuItem value={data._id} key={index}>:{data.application.companyName}</MenuItem>
                                        ))}
                                    </Select>
                                }

                                <Button onClick={onSubmit}>Submit</Button>
                            </FormControl>
                        </Box>
                    </Fade>
                </Modal>
            </Container>
        </div>
    )
}

export default BookingSlot
