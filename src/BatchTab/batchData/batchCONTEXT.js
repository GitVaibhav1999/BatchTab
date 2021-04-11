import React, { createContext, useState, useEffect } from "react";
import { instance } from "./batchesAPI";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [batches, setBatches] = useState([]);
  const [batchDetails, setBatchDetail] = useState();
  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    async function getData() {
      var reqData;
      reqData = await instance.get("?CoachingID=143");
      setBatches(reqData.data);
    }
    getData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        value_batches: [batches, setBatches],
        value_redirect: [redirect, setRedirect],
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
