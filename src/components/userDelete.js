// basic react component starting template
import React, { Component } from 'react';
import { connect } from "react-redux";
import { deletePerson } from "../actions/deleteActions";
import { bindActionCreators } from "redux";
import * as deleteActions from '../actions/deleteActions'

class UserDelete extends Component {

  constructor(props){
    super(props);
    this.modalDeleteShow = this.modalDeleteShow.bind(this);
  }

  modalDeleteShow(event){
    const id = event.target.dataset.id;
    console.log('modalDeleteShow', id);
    this.props.dispatch(deletePerson(id))
    //this.props.deleteActions.deletePerson(id);
  }


  render() {
    const {user} = this.props;
    console.log('this.props (deleteElement)', this.props);
    return (
      <div>
        <div className="modal fade" id={'target' + user.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Delete</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Delete {user.name} with job {user.job} ?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                <button type="button"
                        className="btn btn-danger"
                        data-dismiss="modal"
                        onClick={this.modalDeleteShow}
                        data-id={user.id}>
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*const mapDispatchToProps = dispatch => ({
    deleteActions: bindActionCreators(deleteActions, dispatch)
});*/

export default connect(/*mapDispatchToProps*/)(UserDelete);