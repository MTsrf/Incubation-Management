import React, { useContext } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form'
import {AuthContext} from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="#">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const Login = () => {
    const navigate = useNavigate()
    const { loading, error, dispatch } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit =async (data) => {
        dispatch({ type: "LOGIN_START" });
        try {
            // "proxy": "http://localhost:5000"
            let res = await axios.post("/admin/login", data, { withCredentials: true })
            console.log(res.data);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            if (res.data.created) {
                navigate('/home')
            }
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
        }
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Container >
                <Box sx={{ flexGrow: 1 }} mt={5}>
                    <Grid container spacing={2} mt={10}>
                        <Grid item xs={6}>
                            <Item>
                                <Typography variant='h4' component='h1' color="#01579b" mt={15} mb={10}>
                                    Incubation Management
                                </Typography>
                                <Typography mb={10}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis eveniet impedit similique, necessitatibus, asperiores aliquam doloremque laudantium pariatur accusantium sunt ea ullam beatae facilis? Veniam ut itaque eaque molestias delectus.
                                </Typography>
                                <Button variant='outlined' size='large' style={{ marginBottom: "139px" }}>
                                    Admin Panel
                                </Button>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <ThemeProvider theme={theme}>
                                    <Container component="main" maxWidth="xs">
                                        <CssBaseline />
                                        <Box
                                            sx={{
                                                marginTop: 8,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                                <LockOutlinedIcon />
                                            </Avatar>
                                            <Typography component="h1" variant="h5">
                                                Sign in
                                            </Typography>
                                            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                                                <TextField
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="email"
                                                    label="Email Address"
                                                    name="email"
                                                    autoComplete="email"
                                                    autoFocus
                                                    error={!!errors?.email}
                                                    helperText={errors?.email ? errors.email.message : null}
                                                    {...register("email", {
                                                        required: "Email Address is required",
                                                        pattern: {
                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                            message: "Invalid email address",
                                                        },
                                                    })}
                                                />
                                                <TextField
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    name="password"
                                                    label="Password"
                                                    type="password"
                                                    id="password"
                                                    autoComplete="current-password"
                                                    error={!!errors?.password}
                                                    helperText={errors?.password ? errors.password.message : null}
                                                    {...register("password", {required: "Password is required"})}
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox value="remember" color="primary" />}
                                                    label="Remember me"
                                                />
                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="contained"
                                                    sx={{ mt: 3, mb: 2 }}
                                                >
                                                    Sign In
                                                </Button>
                                                <Grid container>
                                                    <Grid item xs>
                                                        <Link href="#" variant="body2">
                                                            Forgot password?
                                                        </Link>
                                                    </Grid>
                                                    <Grid item>
                                                        <Link href="#" variant="body2">
                                                            {"Don't have an account? Sign Up"}
                                                        </Link>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Box>
                                        <Copyright sx={{ mt: 8, mb: 4 }} />
                                    </Container>
                                </ThemeProvider>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Login
