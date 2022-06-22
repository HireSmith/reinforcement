import React, { useState } from 'react';
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
import { connect, useDispatch } from 'react-redux';

// reference
// const mapDispatchToProps = dispatch => ({
//   addMarketActionCreator: (payload) => dispatch(actions.addMarketActionCreator(payload)) //addMarketActionCreator is from actions.js
// });

const theme = createTheme();

function LoginPage() {

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   fetch('/auth/google') // meant to re route to google authentication, not from individual email/password
  //   // will be sent back ssid
  //   // will set a cookie and session id
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // }
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      //if successfully logged in, we get ssid passed back on res.locals
      if (data.ssid) {
        // setLoggedIn(true);
        dispatch({
          type: 'LOGGED_IN',
          payload: data.ssid,
        });
        console.log('User is Logged In')
      }
    })
    .catch((err) => console.log(err));
  };
    
  const handleGoogleLogin = () => {
    fetch('http://localhost:3000/api/auth/google', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then((res) => res.json())
    .then((ssid) => {
      // setLoggedIn(true);
      dispatch({
        type: 'LOGGED_IN',
        payload: ssid,
      });
      console.log('User logged in through Google')
    })
    .catch((err) => console.log(err))
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setLoggedIn(false);
    fetch('http://localhost:3000/api/logout')
    .then((res) => res.json())
    .catch((err) => console.log(err));
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 18,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              value={username}
              onChange={handleUsername}
              label="Username"
              name="username"
              type="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              value={password}
              onChange={handlePassword}
              label="Password"
              type="password"
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
              onClick={handleLogin}
            >
              Sign In
            </Button>


            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleGoogleLogin}
            >
              Sign In With Google
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogout}
            >
              Log out
            </Button>



            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}

export default connect(null, null)(LoginPage);