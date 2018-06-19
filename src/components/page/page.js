import React, { Component, Fragment } from "react";
import Header from "./header/header";
import Main from "./main/main";
import { connect } from "react-redux";
import { setCurrentPathname } from "../../actions/page";

class Page extends Component {
  constructor(props){
    super(props);
  }

  static getDerivedStateFromProps(props, state){
    props.dispatch(setCurrentPathname(props.location.pathname));
  }

  render() {
      return (
        <Fragment>
          <Header/>
          <Main/>
        </Fragment>
      );
    }
}

export default connect()(Page);