import React, { Component } from 'react';
import ListElement from "./listElement";
import { connect } from "react-redux";

class List extends Component {

  constructor(props){
    super(props);
  }

  render() {
    console.log('this.props in list', this.props);
    const {users} = this.props;
    return (
      <div>
        <table>
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Job</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>{
            users.map((user, index) => {
              return(
                <div>
                  <ListElement key = {user.id} user = {user}/>
                </div>
              )
            })
          }
          </tbody>
        </table>
      </div>
    );
  }

}



function mapStateToProps(state) {
  return({
    users: state.list.users,
  })
}


export default connect(mapStateToProps, /*mapDispatchToProps*/)(List);