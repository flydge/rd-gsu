import React, { Component } from 'react';
import avatar from '../../../images/avavtar.jpg'


class Header extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <header>
        <a href="#" className='logo' />
        <nav>
          <span>Ivanov Ivan</span>
          <img src={avatar} alt=""/>
          <div className="dropdown">
            <span className='icon-down-dir'/>
            <div className="dropdown-content">
              <p>Hello World!</p>
            </div>
          </div>
        </nav>


      </header>
    );
  }

}




export default Header;