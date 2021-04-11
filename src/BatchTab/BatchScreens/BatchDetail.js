import React, { useContext, useEffect, useState } from "react";
// import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
// import Alert from "@material-ui/lab/Alert";
// import Snackbar from "@material-ui/core/Snackbar";

// import IconButton from "@material-ui/core/IconButton";
// import Collapse from "@material-ui/core/Collapse";
// import CloseIcon from "@material-ui/icons/Close";
// import { makeStyles } from "@material-ui/core/styles";
// import { Scrollbars } from "react-custom-scrollbars";

import { DataContext } from "../batchData/batchCONTEXT";
import { getData } from "../batchData/batchesAPI";

function BatchDetail() {
  const { value_redirect } = useContext(DataContext);
  const [redirect] = value_redirect;
  async function getStudentList() {
    const studentList = await getData(
      `getStudentDetails?batchID=${redirect.id}`
    );
    console.log(studentList.data);
  }
  getStudentList();
  return (
    <div>
      {redirect.name}
      {/* {" "}
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid xs={12} sm={12}>
          <Typography className="prompt-text" variant="h3">
            Are all your students here?
          </Typography>
        </Grid>
        <Grid alignItem="center" style={{ width: "20em" }} item xs={12} sm={2}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12}>
              <TabSelector />
            </Grid>
            <Grid item xs={12}>
              <Button className="share-dpp-div">
                <Typography variant="h5">Share DPP</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ width: "110%" }} sm={9} xs={12}>
          <Grid style={{ width: "70vw" }} container="column">
            <Grid item xs={12}>
              <DataSheet />
              <Grid item xs={12} style={{ height: "6%" }}>
                <div
                  className="alert_div"
                  className={classes.root}
                  onClose={revertEmptyWarnings}
                  style={{ width: "40vw", border: "1px solid back" }}
                >
                  <Snackbar
                    style={{ width: "40vw", border: "1px solid back" }}
                    open={alert}
                    autoHideDuration={2000}
                    onClose={revertEmptyWarnings}
                  >
                    <Alert
                      style={{ width: "40vw", border: "1px solid back" }}
                      severity={severity}
                    >
                      {severity}
                    </Alert>
                  </Snackbar>
                </div>
              </Grid>
            </Grid>
            <Grid
              style={{ marginTop: "3%" }}
              container
              direction="row"
              justify="space-between"
              alignItems="flex-end"
            >
              <Grid item xs={1}></Grid>
              <Grid item xs={6}>
                <AddRow />
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={3}>
                <DeleteStudent />
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
    </div>
  );
}

export default BatchDetail;
