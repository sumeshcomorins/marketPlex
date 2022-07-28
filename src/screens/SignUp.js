import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {BrowserRouter, Route, useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
import { config } from '../config';
import Axios from 'axios';
const theme = createTheme();

export default function SignUp() {
    let {id} = useParams();
  let navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
    let getData =  {
                  email: data.get('email'),
                  password: data.get('password'),
                  fname: data.get('firstName'),
                  lname: data.get('lastName'),
                  mp_name: data.get('marketName'),
                }

                const notNullObj = !Object.values(getData).some(x =>  x == '');
console.log('getData', getData)
if(notNullObj){

    let formData = new FormData();
    formData.append('request', 'createUser')
    formData.append('fname', getData.fname)
    formData.append('lname', getData.lname)
    formData.append('email', getData.email)
    formData.append('password', getData.password)
    formData.append('mp_name', getData.mp_name)
    formData.append('mp_id', getData.mp_name.split(" ").join(""))
    Axios({
        method: 'post',
        url:config.TEST,
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
    console.log('response', response)
        if(response.data.status=='success'){
            navigate('/create-a-marketplace/sign-in')
        }else{
            alert(' Please Tyr Again Later.')
        }
    })
}else{
    alert('please fill all details')
}

      };


  return (
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
            Sign up
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="marketName"
                  label="Market Name"
                  name="marketName"
                  autoComplete="market-name"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/create-a-marketplace/sign-in" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
