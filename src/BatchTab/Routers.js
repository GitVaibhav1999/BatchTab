import React, { useContext } from "react";
import Batches from "./BatchScreens/Batches";
import { DataContext } from "./batchData/batchCONTEXT";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BatchDetail from "./BatchScreens/BatchDetail";

function Routers() {
  const { value_redirect } = useContext(DataContext);
  //   const [redirect] = value_redirect;

  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/batches" component={Batches} />
            <Route path="/batchDetail" component={BatchDetail} />
          </Switch>
          <Redirect to={"/batches"} />
        </div>
      </Router>
      ;
    </div>
  );
}

export default Routers;
