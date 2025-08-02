import React, { useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, TextField, Box, Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, InputAdornment, Switch } from "@mui/material";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../context/Auth/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  imageSide: {
    flex: 7,
    background: `url('https://i.ibb.co/nsxSD1MD/banner.png') no-repeat center center`,
    backgroundSize: "cover",
    height: "100%",
  },
  formSide: {
    flex: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
  formContainer: {
    width: "100%",
    maxWidth: "400px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "30px",
  },
  logoImg: {
    display: "block",
    margin: "0 auto 20px",
    width: "100%",
    maxWidth: "2095px",
    height: "auto",
  },
  submitBtn: {
    marginTop: "20px",
    backgroundColor: "#004aad",
    color: "#fff",
    borderRadius: "8px",
    padding: "12px",
    fontWeight: "bold",
    width: "100%",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#004aad",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
    },
  },
  registerBtn: {
    backgroundColor: "#fff",
    color: "#004aad",
    borderRadius: "8px",
    padding: "12px",
    fontWeight: "bold",
    width: "100%",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "#004aad",
      color: "#fff",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
    },
  },
  whatsappButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "transparent",
    borderRadius: "50%",
    width: "56px",
    height: "56px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
    animation: "$bounce 1s infinite",
    cursor: "pointer",
    zIndex: 999,
    "&:hover": {
      backgroundColor: "transparent",
      transform: "scale(1.1)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
    },
  },
  whatsappIcon: {
    width: "40px",
    height: "40px",
    objectFit: "contain",
  },
  "@keyframes bounce": {
    "0%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-10px)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const { handleLogin } = useContext(AuthContext);
  const [user, setUser] = useState({ email: "", password: "", remember: false });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <div className={classes.root}>
        <div className={classes.imageSide}></div>
        <div className={classes.formSide}>
          <form className={classes.formContainer} onSubmit={handleSubmit}>
            <img src="/logo.png" alt="Logo" className={classes.logoImg} />
            {error && <Typography color="error">{error}</Typography>}
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type={showPassword ? "text" : "password"}
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submitBtn}
              >
                Entrar
              </Button>
              <Button
                component={RouterLink}
                to="/signup"
                variant="contained"
                className={classes.registerBtn}
              >
                Regístrate
              </Button>
            </div>
            <div>
              <Switch
                checked={user.remember}
                onChange={(e) => setUser({ ...user, remember: e.target.checked })}
                name="remember"
                sx={{
                  '& .MuiSwitch-thumb': {
                    backgroundColor: user.remember ? '#004aad' : '#C3C3C3',
                  },
                  '& .Mui-checked': {
                    color: '#004aad',
                  },
                  '& .Mui-checked + .MuiSwitch-track': {
                    backgroundColor: '#004aad',
                  },
                  '& .MuiSwitch-track': {
                    backgroundColor: user.remember ? '#004aad' : '#C3C3C3',
                  }
                }}
              />
              Recordarme
            </div>
          </form>
        </div>
        <div
          className={classes.whatsappButton}
          onClick={() => window.open("https://wa.me/556181581052")}
        >
          <img 
            src="https://img.icons8.com/ios_filled/512/228BE6/whatsapp--v2.png"
            alt="WhatsApp"
            className={classes.whatsappIcon} 
          />
        </div>
      </div>
    </>
  );
};

export default Login;
