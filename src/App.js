import React, { Fragment } from "react";


import { Redirect, Route, Switch } from "react-router-dom";
import Error from "./components/error";
import Page from "./components/page/page";


const App = () => (
  <Fragment>
    <Switch>

      <Route exact path="/" component={Page}/>
      <Route path="/classification" component={Page} />
      <Route path="/education" component={Page} />
      <Route path="/scientific" component={Page} />
      <Route path="/rating" component={Page} />
      <Route component={Error} />
    </Switch>
  </Fragment>

);

export default App;
