import React, { useContext } from "react";
import { DataContext } from "../batchData/batchCONTEXT";

function BatchDetail() {
  const { value_redirect } = useContext(DataContext);
  const [redirect] = value_redirect;

  return <div>{redirect}</div>;
}

export default BatchDetail;
