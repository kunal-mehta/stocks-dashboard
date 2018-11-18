import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import TableContainer from "./containers/Table.js";
import ChartContainer from './containers/Chart.js';
import WrongPage from './presentational/WrongPage.js';

export default () =>
  <Switch>
    <Route path="/home" exact component={Home} />
    <Route path="/table" exact component={TableContainer} />
    <Route path ="/chart" exact component = {ChartContainer}/>
    <Route component={WrongPage} />
  </Switch>;