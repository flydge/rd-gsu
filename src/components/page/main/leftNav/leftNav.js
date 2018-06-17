import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { CURRENT_PATHNAME } from "../../../../constants/const";
import { connect } from "react-redux";


class LeftNav extends Component {

  constructor(props){
    super(props);
  }


  render() {
    const path = this.props[CURRENT_PATHNAME];
    return (
      <nav className='leftNav'>
        <ul>
          <li className={path==='/classification' && 'active'}>
            <Link to="/classification">Классификации ППС</Link>
          </li>
          <li className={path==='/education' && 'active'} >
            <Link to="/education">Учебно-методическая работа</Link>
          </li>
          <li className={path==='/scientific' && 'active'} >
            <Link to="/scientific">Научно-методическая работа</Link>
          </li>
          <li className={path==='/rating' && 'active'}>
            <Link to="/rating">Рейтинги</Link>
          </li>
        </ul>

      </nav>
    );
  }

}


function mapStateToProps(state) {
  return({
    [CURRENT_PATHNAME]: state.page[CURRENT_PATHNAME],
  })
}

export default connect(mapStateToProps)(LeftNav);