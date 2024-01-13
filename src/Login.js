import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Stack,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Login() {
  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 280,
    margin: "20px auto",
  };

  const avatarStyle = {
    backgroundColor: "green",
  };
  const chkStyle = {
    margin: "2px 0px",
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Login</h2>
        </Grid>
        <Stack spacing={4}>
          <TextField
            variant="outlined"
            label="Username"
            placeholder="Enter username"
            required
          />
          <TextField
            variant="outlined"
            label="Password"
            placeholder="enter password"
            type="password"
            required
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember Me"
            style={chkStyle}
          />
          <Button variant="contained">LOGIN</Button>
        </Stack>
        <Typography>
          <Link href="#" underline="hover">
            ForgotPassword?
          </Link>
        </Typography>
        <Typography>
          Don't have an account?
          <Link href="#">Sign-up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Login;
