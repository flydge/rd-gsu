import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import { setLoginSuccess } from "../../actions/page";

class LoginPage extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const {handleSubmit, reset} = this.props;
    const submit = (values) => this.props.dispatch(setLoginSuccess(true));
    console.log('state',this.props.state);
    return (
        <form onSubmit={handleSubmit(submit)}>
          <div className="login">
            <div className="login-triangle"/>
            <h2 className="login-header logo"/>
            <form className="login-container">
              <p><Field type="email" placeholder="Email" component="input" name = 'login'/></p>
              <p><Field type="password" placeholder="Password" component="input" name = 'password'/></p>
              <p><input type="submit" value="Вход"/></p>
            </form>
          </div>
        </form>
    );
  }
}

LoginPage = reduxForm({
  form: 'loginPageForm',
})(LoginPage);

function mapStateToProps(state) {
  return({
    state
  })
}

export default connect(mapStateToProps)(LoginPage);