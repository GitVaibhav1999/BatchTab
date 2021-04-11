import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import "fontsource-roboto";

// import "./AddStudent.css";

export default function AddStudent() {
  const addNewStudent = () => {};

  return (
    <Button
      variant="contained"
      onClick={addNewStudent}
      style={{
        backgroundColor: "#81FFB2",
        color: "black",
        borderRadius: "50",
        width: "100%",
        height: "4em",
        marginBottom: "2em",
        border: "1px solid black",
      }}
    >
      <Typography variant="button">Add Student</Typography>
    </Button>
  );
}
