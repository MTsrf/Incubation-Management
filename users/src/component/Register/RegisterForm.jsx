import React from 'react'
import Paper from '@mui/material/Paper'
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { Container } from 'react-bootstrap';
import Typography from '@mui/material/Typography/Typography';
import Registration from './Registration';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Box from '@mui/material/Box'



const theme = createTheme();
const useStyles = makeStyles(() => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(1)
    },
    register: {
        backgroundColor: "#e0e0e0"
    }
}));
const RegisterForm = () => {
    const classes = useStyles();
    return (
        <div className={classes.register}>
            <Container >
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>

                </Box>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'>
                    <Typography component="h1" variant="h5" color="#2a3eb1">
                        Incubation Registration Form
                    </Typography>
                </Box>
                <Paper className={classes.pageContent}>

                    <Registration />
                </Paper>

            </Container>
        </div>
    )
}

export default RegisterForm
