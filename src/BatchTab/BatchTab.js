import React, { useContext } from "react";
import { DataProvider } from "./batchData/batchCONTEXT";

import Router from "./Routers";
function BatchTab() {
  return (
    <DataProvider>
      <Router />
    </DataProvider>
  );
}

export default BatchTab;
