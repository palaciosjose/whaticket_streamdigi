import React, { useState, useEffect, useContext } from "react";
import qs from 'query-string';

import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Form, Field } from "formik";

import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  makeStyles,
  Container,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from "@material-ui/core";

import usePlans from '../../hooks/usePlans';
import { i18n } from "../../translate/i18n";

import { openApi } from "../../services/api";
import toastError from "../../errors/toastError";

import ColorModeContext from "../../layout/themeContext";

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${props.loginRegisterImage})`,
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
  logoImg: {
    width: "100%",
    maxWidth: "250px",
    height: "auto",
    margin: "0 auto 20px auto",
    content: `url(${theme.mode === "light" ? theme.calculatedLogoLight() : theme.calculatedLogoDark()})`,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
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
  selectField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '10px',
      height: '40px',
    },
    '& .MuiSelect-select': {
      padding: '10px',
      minHeight: 'unset',
    },
    '& .MuiInputLabel-outlined': {
      transform: 'translate(14px, 14px) scale(1)',
    },
  },
}));

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Muito curto!")
    .max(50, "Muito longo!")
    .required("Obrigatório"),
  companyName: Yup.string()
    .min(2, "Muito curto!")
    .max(50, "Muito longo!")
    .required("Obrigatório"),
  password: Yup.string().min(5, "Muito curto!").max(50, "Muito longo!"),
  email: Yup.string().email("Email inválido").required("Obrigatório"),
  phone: Yup.string().required("Obrigatório"),
});

const SignUp = () => {
  const { colorMode } = useContext(ColorModeContext);
  const { loginRegisterImage } = colorMode;
  const classes = useStyles({ loginRegisterImage });

  const history = useHistory();
  const { getPlanList } = usePlans();
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);

  let companyId = null;
  const params = qs.parse(window.location.search);
  if (params.companyId !== undefined) {
    companyId = params.companyId;
  }

  const initialState = { name: "", email: "", password: "", phone: "", companyId, companyName: "", planId: "" };

  const [user] = useState(initialState);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const planList = await getPlanList({ listPublic: "false" });
        setPlans(planList);
      } catch (error) {
        toastError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignUp = async values => {
    try {
      await openApi.post("/auth/signup", values);
      toast.success(i18n.t("signup.toasts.success"));
      history.push("/login");
    } catch (err) {
      toastError(err);
    }
  };

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img className={classes.logoImg} alt="logo" />
          <Typography component="h1" variant="h5">
            {i18n.t("signup.title")}
          </Typography>
          <Formik
            initialValues={user}
            enableReinitialize={true}
            validationSchema={UserSchema}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                handleSignUp(values);
                actions.setSubmitting(false);
              }, 400);
            }}
          >
            {({ touched, errors, isSubmitting }) => (
              <Form className={classes.form}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      size="small"
                      id="companyName"
                      label={i18n.t("signup.form.company")}
                      error={touched.companyName && Boolean(errors.companyName)}
                      helperText={touched.companyName && errors.companyName}
                      name="companyName"
                      autoComplete="companyName"
                      autoFocus
                      className={classes.textField}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      autoComplete="name"
                      name="name"
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                      variant="outlined"
                      fullWidth
                      size="small"
                      id="name"
                      label={i18n.t("signup.form.name")}
                      className={classes.textField}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      size="small"
                      id="email"
                      label={i18n.t("signup.form.email")}
                      name="email"
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      autoComplete="email"
                      inputProps={{ style: { textTransform: 'lowercase' } }}
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      size="small"
                      name="password"
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                      label={i18n.t("signup.form.password")}
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      size="small"
                      id="phone"
                      label={i18n.t("signup.form.phone")}
                      name="phone"
                      autoComplete="phone"
                      className={classes.textField}
                    />
                  </Grid>

                  {/* TOKEN */}
                  {/* <Grid item xs={12}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      id="token"
                      label={i18n.t("auth.token")}
                      name="token"
                      autoComplete="token"
                    />
                  </Grid> */}

                  <Grid item xs={12}>
                    <FormControl variant="outlined" fullWidth size="small" className={classes.selectField}>
                      <InputLabel id="plan-selection-label">Plano</InputLabel>
                      <Field
                        as={Select}
                        labelId="plan-selection-label"
                        id="plan-selection"
                        label="Plano"
                        name="planId"
                        required
                      >
                        {plans.map((plan, key) => (
                          <MenuItem key={key} value={plan.id}>
                            {`${plan.name} - Atendentes: ${plan.users} - WhatsApp: ${plan.connections} - Filas: ${plan.queues} - R$ ${plan.amount}`}
                          </MenuItem>
                        ))}
                      </Field>
                    </FormControl>
                  </Grid>

                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  size="small"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={isSubmitting}
                >
                  {i18n.t("signup.buttons.submit")}
                </Button>
                <Grid container>
                  <Grid item>
                    <Link
                      href="#"
                      variant="body2"
                      component={RouterLink}
                      to="/login"
                    >
                      {i18n.t("signup.buttons.login")}
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </div>
        <Box mt={5}>{/* <Copyright /> */}</Box>
      </Container>
    </div>
  );
};

export default SignUp;
