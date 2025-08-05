import React, { useState, useContext, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Container,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import {
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import { Helmet } from "react-helmet";

import { i18n } from "../../translate/i18n";
import { AuthContext } from "../../context/Auth/AuthContext";
import ColorModeContext from "../../layout/themeContext";
import useSettings from "../../hooks/useSettings";

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${props.loginEnterImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    position: "relative",
  }),
  paper: {
    backgroundColor:
      theme.mode === "light"
        ? "rgba(255, 255, 255, 0.7)"
        : "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    boxShadow:
      theme.mode === "light"
        ? "0 4px 6px rgba(0, 0, 0, 0.1)"
        : "0 4px 6px rgba(255, 255, 255, 0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "55px 30px",
    borderRadius: "10px",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    position: "relative",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: "10px",
    padding: theme.spacing(1.5),
    textTransform: "none",
  },
  textField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '10px',
    },
  },
  logoImg: {
    width: "100%",
    maxWidth: "350px",
    height: "auto",
    maxHeight: "120px",
    margin: "0 auto",
    content: `url(${theme.mode === "light" ? theme.calculatedLogoLight() : theme.calculatedLogoDark()})`,
  },
  iconButton: {
    position: "absolute",
    top: 10,
    right: 10,
    color: theme.mode === "light" ? "black" : "white",
  },
  toggleButton: {
    position: "fixed",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  passwordWrapper: {
    position: "relative",
    width: "100%",
  },
  visibilityToggle: {
    position: "absolute",
    right: 15,
    top: "55%",
    transform: "translateY(-50%)",
  },
}));

const Login = () => {
  const { colorMode } = useContext(ColorModeContext);
  const { appLogoFavicon, appName, mode, loginEnterImage } = colorMode;
  const classes = useStyles({ loginEnterImage });

  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [userCreation, setUserCreation] = useState(false);
  const { getPublicSetting } = useSettings();
  const { handleLogin } = useContext(AuthContext);

  const handleChangeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    getPublicSetting("userCreation")
      .then((data) => {
        setUserCreation(data === "enabled");
      })
      .catch((error) => {
      });
  }, [getPublicSetting]);

  return (
    <>
      <Helmet>
        <title>{appName || "O Plano"}</title>
        <link rel="icon" href={appLogoFavicon || "/default-favicon.ico"} />
      </Helmet>
      <IconButton
        className={classes.toggleButton}
        onClick={colorMode.toggleColorMode}
      >
        {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <div className={classes.root}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <div>
              <img className={classes.logoImg} alt="logo" />
            </div>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                size="small"
                id="email"
                label={i18n.t("login.form.email")}
                name="email"
                value={user.email}
                onChange={handleChangeInput}
                autoComplete="email"
                autoFocus
                className={classes.textField}
              />
              <div className={classes.passwordWrapper}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  size="small"
                  name="password"
                  label={i18n.t("login.form.password")}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={user.password}
                  onChange={handleChangeInput}
                  autoComplete="current-password"
                  className={classes.textField}
                />
                <IconButton
                  className={classes.visibilityToggle}
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </div>
              <Button
                type="submit"
                fullWidth
                size="small"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {i18n.t("login.buttons.submit")}
              </Button>
              {userCreation && (
                <Grid container>
                  <Grid item>
                    <Link
                      href="#"
                      variant="body2"
                      component={RouterLink}
                      to="/signup"
                    >
                      {i18n.t("login.buttons.register")}
                    </Link>
                  </Grid>
                </Grid>
              )}
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Login;
