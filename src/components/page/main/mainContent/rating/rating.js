import React, { Component } from 'react';
import avatar from '../../../../../images/avavtar.jpg'
import { setCurrentPathname, setCurrentRatingPagination } from "../../../../../actions/page";
import { connect } from "react-redux";
import { CURRENT_PAGINATION } from "../../../../../constants/const";

class Rating extends Component {

  constructor(props){
    super(props);
    this.getPerson = this.getPerson.bind(this);
    this.createList = this.createList.bind(this);
    this.ratingSort = this.ratingSort.bind(this);
    this.changePaginationButton = this.changePaginationButton.bind(this);
  }

  createList(){
    let users = [];
    let surname = 'Македонский';
    let name = 'Александр ';
    let patronymic = 'Сергеевич';
    let job = 'Job';
    for (let i = 0; i < 13; i++) {
      users.push({
        id: i,
        avatar,
        surname,
        name,
        patronymic,
        rating: i*i+2,
      })
    }
    return users;
  }

  getPerson (user, index){
    const { currentPaginationBtn } = this.props;
    return (
      <div className='rating-person' key={index}>
        <span className='rating-person_id'>{(currentPaginationBtn * this.getTabsNumb()) + index + 1}</span>
        <img className='rating-person_avatar' src={user.avatar} alt=""/>
        <div className='rating-person_name'>
          <span className='rating-person_name1'>{user.surname}</span>
          <span className='rating-person_name2'>{user.name}</span>
          <span className='rating-person_name3'>{user.patronymic}</span>
        </div>
        <div>
          <span className='icon-star'/>
          <span className='rating-person_rating'>{user.rating}</span>
        </div>
      </div>
    )
  };

  getTabsNumb(){
    const TabH = 100;
    const HeaderH = 300;
    return Math.floor((window.innerHeight - HeaderH) / TabH)
  }


  static getDerivedStateFromProps(props, state){

  }


  changePaginationButton(numb){
    this.props.dispatch(setCurrentRatingPagination(numb));
    console.log('changedNumb', numb);
  }

  getPaginationButtons(){

}


  ratingSort = (a,b) => -a.rating - -b.rating;

  render() {
    const { currentPaginationBtn } = this.props;

    let list = this.createList().sort(this.ratingSort);
    const tabsNumb = this.getTabsNumb();
    let pagesNumb = Math.ceil(list.length/tabsNumb);

    let buttons = [];
    for (let i = 0; i < pagesNumb ; i++) {
       buttons.push(i);
    }

    let cropList;
    if(list.length >= tabsNumb){
      cropList = list.slice(currentPaginationBtn*tabsNumb, (currentPaginationBtn + 1) * tabsNumb);
    }
    if (list.length < tabsNumb){
      cropList = list.slice(0, list.length);
    }


    return (
      <div className="rating">
        <div className='rating-top'>
          <p className='rating-top_title'>Рейтинги преподавателей</p>
          {/*<div className="search-box">
            <input type="submit" className="submit"/>
            <input type="search" className="search" placeholder="Search..."/>
          </div>*/}
        </div>
        {
          cropList.map((user, index) => {
            if (index < this.getTabsNumb()) {
              return this.getPerson(user, index)
            }
          })
        }

        <div className='rating-pagination'>
          {
            buttons.map((i, index) => {
              return <div key={index} className={ i === currentPaginationBtn && 'active' } onClick= { () => {this.changePaginationButton(i)}} ><p>{i+1}</p></div>
            })
          }
        </div>

      </div>
    );
  }

}



function mapStateToProps(state) {
  return({
    currentPaginationBtn: state.page[CURRENT_PAGINATION]
  })
}



export default connect(mapStateToProps)(Rating);