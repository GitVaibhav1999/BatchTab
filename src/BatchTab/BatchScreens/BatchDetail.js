import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
// import { Scrollbars } from "react-custom-scrollbars";

import { DataContext } from "../batchData/batchCONTEXT";
import getStudentList from "../batchData/getStudentList";
import StudentSheet from "./StudentSheet";
import AddStudent from "./EditButtons/AddStudent";
import DeleteStudent from "./EditButtons/DeleteStudents";

function BatchDetail() {
  const { value_redirect, value_student_list } = useContext(DataContext);
  const [redirect] = value_redirect;
  const [studentList, setStudentList] = value_student_list;

  useEffect(
    async function getData() {
      const structured_details = await getStudentList(redirect);
      setStudentList(structured_details);
    },
    [redirect]
  );

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
        style={{
          display: "flex",
          paddingLeft: "2%",
          width: "100vw",
        }}
      >
        <Grid item xs={12}>
          <Typography style={{ padding: "1%" }} variant="h3">
            {studentList.batchName}
          </Typography>
        </Grid>
        <Grid style={{ height: "40em" }} alignItems="center" item xs={12}>
          <StudentSheet />
        </Grid>
        <Grid style={{ paddingLeft: "1em" }} alignItems="center" item xs={6}>
          <AddStudent />
        </Grid>
        <Grid style={{ padding: "1em" }} alignItems="center" item xs={3}>
          <DeleteStudent />
        </Grid>
      </Grid>
    </div>
  );
}

export default BatchDetail;
