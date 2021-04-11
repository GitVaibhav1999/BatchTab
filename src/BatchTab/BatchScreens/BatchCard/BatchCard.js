import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import "./BatchCard.css";
import BatchDetail from "../BatchDetail";
import { DataContext } from "../../batchData/batchCONTEXT";

function BatchCard(props) {
  const batch_name = props.batch_name;
  const batch_students = props.batch_students;

  return (
    <Paper variant="outlined" className="batch-div" elevation="0">
      <Grid style={{ height: "100%", width: "100%" }} container>
        <Grid
          item
          xs={3}
          sm={4}
          style={{
            height: "100%",
            backgroundColor: "#CFC1FF",
            paddingRight: "0.5em",
          }}
        >
          <Typography style={{ marginTop: "4em" }}>{batch_name}</Typography>
        </Grid>
        <Grid
          item
          xs={7}
          sm={8}
          style={{
            height: "100%",
            width: "10%",
            padding: "1em",
          }}
        >
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing="3"
          >
            <Grid item xs={12} sm={8}>
              <Typography variant="subtitle">Number of Students:</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h4">{batch_students}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default BatchCard;
