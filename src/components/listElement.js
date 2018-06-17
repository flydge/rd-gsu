// basic react component starting template
import React, { Component } from 'react';
import '../style/page.css';
import UserDelete from "./userDelete";
import {connect} from "react-redux";


class ListElement extends Component {


  constructor(props) {
    super(props);
  }

  render() {

    const {user} = this.props;
    console.log('this.props (listElement)', this.props);

    return (
      <tr key={user.id}>
        <td>#{user.id}</td>
        <td>{user.name}</td>
        <td>{user.job}</td>
        <td>
          <a href={'/user-edit/' + user.id}>
            <button>
              Edit
            </button>
          </a>
        </td>
        <td>
          <button
                  type="button"
                  className="btn btn-sm btn-danger"
                  data-toggle="modal"
                  data-target={'#target' + user.id}>
            Delete
          </button>
          <UserDelete key = { user.id }
                      user = { user }/>
        </td>
      </tr>
    );
  }



}

export default connect()(ListElement);