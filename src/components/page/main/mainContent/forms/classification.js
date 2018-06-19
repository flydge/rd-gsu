import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import { CURRENT_PAGINATION } from "../../../../../constants/const";
import { setClassificationFormValues } from "../../../../../actions/page";

class Classification extends Component {

  constructor(props){
    super(props);
    this.createList = this.createList.bind(this);
    //this.props.dispatch(this.props.initialize('pots1', {title: "qwe1", text: "qwe2"}));
  }

  createList(){
    const questions = [
      <div className='form-box'>
        <div className='form-box_title'>
          Наличие учёной степени
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="academicDegree" component="input" type="radio" value = 'no'/>
            <p>Нет</p>
          </label>
          <label>
            <Field name="academicDegree" component="input" type="radio" value = 'yes'/>
            <p>Да</p>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Повышение квалификации ППС за последний  год, прохождение стажировки
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="qualification" component="input" type="radio" value = 'Belarus'/>
            <p>в РБ</p>
          </label>
          <label>
            <Field name="qualification" component="input" type="radio" value = 'abroad'/>
            <p>за рубежом</p>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Присвоение ученого звания в отчетном году
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="academicRank" component="input" type="radio" value = 'prof'/>
            <p>профессора</p>
          </label>
          <label>
            <Field name="academicRank" component="input" type="radio" value = 'assist'/>
            <p>доцента</p>
          </label>
        </div>
      </div>

    ];
    return questions
  }


  render() {
    let list = this.createList();

    const {handleSubmit, reset} = this.props;
    const submit = (values) => this.props.dispatch(setClassificationFormValues(values));

    const obj ={
      academicDegree: {name: "academicDegree", type: "Field", count: 2},
      academicRank: {name: "academicRank", type: "Field", count: 2},
      qualification : {name: "qualification", type: "Field", count: 2}};


    return (
      <div className='form classification'>
        <div className='form-top'>
          <p className='form-top_title'>Классификации ППС</p>
          {/*<div className="search-box">
            <input type="submit" className="submit"/>
            <input type="search" className="search" placeholder="Search..."/>
          </div>*/}
        </div>
        <form onSubmit={handleSubmit(submit)} className='scrollingBox'>

          {
            list.map((question, index) => {
              return question

            })
          }



          <div className='rating-pagination'>
            <button className='rating-pagination_sbm' type="submit">Отправить</button>
            <button className='rating-pagination_clr' type="button" onClick={reset}>Отмена</button>

          </div>
        </form>
      </div>
    );
  }

}

Classification = reduxForm({
  form: 'ClassificationForm', // имя формы в state (state.form.post)
})(Classification);

function mapStateToProps(state) {
  return({
    currentPaginationBtn: state.page[CURRENT_PAGINATION]
  })
}

export default connect(mapStateToProps)(Classification);