import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { AuthContext } from '../common/Context'
import {BrowserRouter, Route, useParams} from "react-router-dom";
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom"; 
import '../common/css/PlainCssSlider.css'




function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="https://marketplex.com/">
        marketplex.com
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function Home() {
    let {id} = useParams();
  let navigate = useNavigate();
  const user = React.useContext(AuthContext);
  const userDetail = user.userDetail
  console.log('User', user)
  const logoutHandler = () => {
    user.setUserToken(null)
    navigate('/create-a-marketplace/sign-up')
  }

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <CssBaseline />
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
    <Box
  m={1}
  display="flex"
  justifyContent="center"
  alignItems="center"
//   sx={boxDefault}
>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome
      </Typography>
      </Box>
    <Box
  m={1}
  display="flex"
  justifyContent="center"
  alignItems="center"
//   sx={boxDefault}
>
      <Typography variant="h3" component="h1" gutterBottom color='red'>
        {userDetail.email}
      </Typography>
      </Box>
      <Box
  m={1}
  display="flex"
  justifyContent="center"
  alignItems="center"
//   sx={boxDefault}
>

      <Typography variant="h5" component="h2" gutterBottom>
          Your URl is marketplex.com/{id}
      </Typography>
</Box>
      <Box
  m={1}
  display="flex"
  justifyContent="center"
  alignItems="center"
//   sx={boxDefault}
>

      <Button variant="outlined" startIcon={<LogoutIcon />}  onClick={() =>logoutHandler()}  >
  Log-out
</Button>
</Box>
    </Container>
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        {/* <Typography variant="body1">
          My sticky footer can be found here.
        </Typography> */}
        <Copyright />
      </Container>
    </Box>
  </Box>
  )
}
