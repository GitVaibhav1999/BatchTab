import React, { useContext, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export default function DeleteStudent() {
  const MarkInactive = () => {};
  return (
    <Button
      //   disabled={!found}
      disableColor="grey"
      variant="contained"
      onClick={MarkInactive}
      style={{
        backgroundColor: "#E88787",
        disableColor: "grey",
        borderRadius: "50",
        color: "black",
        width: "100%",
        height: "4em",
        marginBottom: "2em",
        border: "1px solid black",
      }}
    >
      <Typography variant="button">Remove Students</Typography>
    </Button>
  );
}
