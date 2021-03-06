import React, { Component } from "react";
import LeftNav from "./leftNav/leftNav";
import { Route, Switch } from "react-router-dom";
import Rating from "./mainContent/rating/rating";
import Classification from "./mainContent/forms/classification";
import Education from "./mainContent/forms/education";
import Scientific from "./mainContent/forms/scientific";
import { store } from "../../../index";



class Main extends Component {

  constructor(props){
    super(props);
  }

  componentDidUpdate(){
    console.log('store', store.getState())
  }

  render() {
    return (


      <main>
        <LeftNav/>
        <div className='mainContent'>
          <Switch>
            <Route  path="/classification" component={Classification}/>
            <Route  path="/education" component={Education}/>
            <Route  path="/scientific" component={Scientific}/>
            <Route  path="/rating" component={Rating}/>
            <Route  path="/" component={Classification}/>
          </Switch>
        </div>
      </main>

    );
  }

}




export default  Main;