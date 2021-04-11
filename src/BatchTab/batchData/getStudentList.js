import React, { useContext } from "react";
import { getData } from "./batchesAPI";
import { DataContext } from "./batchCONTEXT";

export default async function getStudentList(redirect) {
  const reqStudentList = await getData(
    `getStudentDetails?batchID=${redirect.id}`
  );

  const structured_details = {
    batchID: redirect.id,
    batchName: redirect.name,
    grid: [],
  };

  var temp_grid = [
    [
      { readOnly: true, value: "Roll Number" },
      { value: "Student Name", readOnly: true },
      { value: "Email", readOnly: true },
      { value: "Contact Number", readOnly: true },
    ],
  ];
  reqStudentList.data.forEach((each_student) => {
    var temp_row = [
      { value: each_student.RollNumber, readOnly: true },
      { value: each_student.StudentName },
      { value: each_student.StudentEmail },
      { value: each_student.StudentPhoneNumber },
    ];
    temp_grid = [...temp_grid, temp_row];
  });

  structured_details.grid = temp_grid;
  return structured_details;
}
