import React, { Fragment } from "react";


import { Redirect, Route, Switch } from "react-router-dom";
import Error from "./components/error";
import Page from "./components/page/page";
import loginPage from "./components/loginPage/loginPage";



let App;
  App = () => (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Page}/>
        <Route path="/classification" component={Page} />
        <Route path="/education" component={Page} />
        <Route path="/scientific" component={Page} />
        <Route path="/rating" component={Page} />
        <Route path="/loginPage" component={loginPage} />
        <Route component={Error} />
      </Switch>
    </Fragment>
  );



export default (App);
