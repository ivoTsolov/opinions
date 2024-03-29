import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from 'react-router';
import {GoogleLogin} from 'react-google-login';
import Input  from './Input';
import Icon from './Icon';
import { signup, signin } from '../../../actions/auth/auth';

import useStyles from './styles';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const classes = useStyles();
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (isSignup) {
          dispatch(signup(formData, history));
        } else {
          dispatch(signin(formData, history));
        }
      };
    

    const handleChange = (e) => {
        setFormData((prevFormDate => prevFormDate = {...prevFormDate, [e.target.name] : e.target.value}));
    }

    const handleShowPassword = () => setShowPassword((prevShowPassword)=> !prevShowPassword);

    const switchMode = () => {
        setFormData(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
      };


    const googleSuccess = async(res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
     
        try {
            dispatch({type: 'AUTH', data: { result, token }});
            history.push('/blog');
        } catch (error) {
            console.log(error);
        }
    }

    const googleFailure = () => {
        console.log('Google Sign In was unsuccessful, try again later');
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} ecaulation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography>{isSignup ? 'Sign up' : 'Sign in'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>

                        {isSignup && (
                                <> 
                                    <Input name="firstName" label="First Name" handleChange ={handleChange} autoFocus half/>
                                    <Input name="lastName" label="Last Name" handleChange ={handleChange}  half/>
                                </>
                            )
                        }
                        <Input name="email" label="Email Adress" handleChange={handleChange} type="email" />
                        <Input name="password" label="Enter Your Password" handleChange={handleChange} type={showPassword ? "text" : "password"}
                        handleShowPassword = {handleShowPassword}
                        />
                        {isSignup && <Input name="confirmPassword" label="Repeat Your Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin
                    clientId="103469233777-48vfvqigh8i2t5r416sqetpbgn5tuobs.apps.googleusercontent.com"
                    render={(renderProps)=>(
                        <Button className={classes.googleButton} color="primary" fullWidth
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        startIcon={<Icon/>}
                        variant="contained"
                        >
                            Google Sign up
                        </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                    />
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                          <Button onClick={switchMode} type="text">{isSignup ? 'U allready have an account? Sign In' : 'Dont have an account? Sign Up' }</Button>
                        </Grid>

                    </Grid>

                </form>
            </Paper>
        </Container>
    )
}

export default Auth
