import React, { useEffect, useContext } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import { instance } from "../batchData/batchesAPI";
import "./Batches.css";
import { DataContext } from "../batchData/batchCONTEXT";
import BatchCard from "./BatchCard/BatchCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    borderRadius: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function Batches() {
  const { value_batches, value_redirect } = useContext(DataContext);
  const [batches] = value_batches;
  const [redirect, setRedirect] = value_redirect;

  const classes = useStyles();
  const history = useHistory();

  // const showBatchDetail = () =>

  return (
    <div>
      <Typography style={{ height: "3em", fontSize: "3rem" }}>
        {"Your Batches "}
      </Typography>
      <Grid style={{ width: "80vw", height: "60vh" }} container>
        {batches.map((each_batch) => (
          <div
            onClick={() => {
              setRedirect({
                id: each_batch.BatchID,
                name: each_batch.BatchName,
              });
              history.push("/batchDetail");
            }}
            style={{ margin: "2em", height: "10em" }}
          >
            <BatchCard
              batch_name={each_batch.BatchName}
              batch_students={each_batch.NoOfStudent}
              batch_year={each_batch.BatchYear}
            />
          </div>
        ))}
      </Grid>
    </div>
  );
}

export default Batches;
