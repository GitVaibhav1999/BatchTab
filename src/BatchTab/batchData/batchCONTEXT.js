import React, { createContext, useState, useEffect } from "react";
import { get, getData } from "./batchesAPI";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [batches, setBatches] = useState([]);
  const [batchDetails, setBatchDetail] = useState();
  const [redirect, setRedirect] = useState({
    id: "",
    name: "",
  });
  const [studentList, setSudentList] = useState({
    batchID: "",
    batchName: "",
    grid: [],
  });

  useEffect(() => {
    async function getBatchList() {
      var batchList;
      batchList = await getData("getBatchInfoAll?CoachingID=143");
      setBatches(batchList.data);
      console.log(batchList.data);
    }
    getBatchList();
  }, []);

  return (
    <DataContext.Provider
      value={{
        value_batches: [batches, setBatches],
        value_redirect: [redirect, setRedirect],
        value_student_list: [studentList, setSudentList],
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
