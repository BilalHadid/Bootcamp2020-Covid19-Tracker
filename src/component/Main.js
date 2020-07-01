import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles({
  Body: {
    color: "white",
    fontWeight: 1200,
  },
  hbody: {
    marginBottom: "5%",
    fontWeight: "bolder",
    fontSize: "2.0rem",
    "@media (min-width:600px)": {
      fontSize: "3.8rem",
    },
  },
  pbody: {
    fontSize: "1.0rem",
    "@media (min-width:600px)": {
      fontSize: "1.3rem",
    },
  },
  btn: {
    background: "red",
    marginTop: "5%",
  },
});
export const Main = () => {
  const classes = useStyles();
  return (
    <Box className={classes.Body}>
      <Typography variant="h2" className={classes.hbody}>
        coronavirus disease (Covid 19) outbreak
      </Typography>
      <Typography className={classes.pbody}>
        Most people infected with the COVID-19 virus will experience mild to
        moderate respiratory illness <br></br>and requiring special treatment.
        Older people, and those with underlying medical problems
      </Typography>
      <Button variant="contained" color="secondary" className={classes.btn}>
        About Covid19
      </Button>
    </Box>
  );
};
