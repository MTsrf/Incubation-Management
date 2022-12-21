import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField/TextField';
// import { useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio,Button } from '@mui/material';

const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(2)
        }
    }
}));
// const initialvalues = {
//     name: "",
//     address: '',
//     city: '',
//     state: '',
//     images: '',
// }

const Register = () => {
    // const [values,setValues] = useState(initialvalues);
    const classes = useStyles();
    return (
        <form className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField variant='outlined' name='name' label="Name" type='text' />
                    <TextField variant='outlined' label="City" name='city' type='text' />
                    <TextField variant='outlined' label="Email" name='email' type="email" />
                    <TextField variant='outlined' label="Company Name" name='companyname' type='text' />
                </Grid>
                <Grid item xs={6}>
                    <TextField variant='outlined' name='address' label='Address' type='text' />
                    <TextField variant='outlined' name='state' label='State' type='text' />
                    <TextField variant='outlined' name='phone_number' type='tel' label='Phone Number' />
                    <TextField variant='outlined' name='image' type='file' />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant='outlined'
                        label="Dscribe Your Team and Background"
                        multiline
                        rows={2}
                        maxRows={4}
                    />
                    <TextField
                        variant='outlined'
                        label="Dscribe Your Company and Products"
                        multiline
                        rows={2}
                        maxRows={4}
                    />
                    <TextField
                        variant='outlined'
                        label="Dscribe the problem yor are trying to solve"
                        multiline
                        rows={2}
                        maxRows={4}
                    />
                    <TextField
                        variant='outlined'
                        label="What is unique about your solution"
                        multiline
                        rows={2}
                        maxRows={4}
                    />
                    <TextField
                        variant='outlined'
                        label="What is your value proposition for the customer"
                        multiline
                        rows={2}
                        maxRows={4}
                    />
                    <TextField
                        variant='outlined'
                        label="What are your competitors and what is your competative advantage?"
                        multiline
                        rows={2}
                        maxRows={4}
                    />
                    <TextField
                        variant='outlined'
                        label="Explain your revenue modal"
                        multiline
                        rows={2}
                        maxRows={4}
                    />
                    <TextField
                        variant='outlined'
                        label="What is potential market size of the products"
                        multiline
                        rows={2}
                        maxRows={4}
                    />
                    <TextField
                        variant='outlined'
                        label="How do you market or plan to market your prodcuts and service"
                        multiline
                        rows={2}
                        maxRows={4}
                    />

                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel>Types of Incubation Needed:</FormLabel>
                        <RadioGroup row
                            name='incubation'>
                            <FormControlLabel value='physical' control={<Radio />} label='Physical Incubation' />
                            <FormControlLabel value='virtual' control={<Radio />} label='Virtual Incubation' />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant='outlined'
                        label="How do you market or plan to market your prodcuts and service"
                        multiline
                        rows={2}
                        maxRows={4}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" size="large">
                        
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default Register
