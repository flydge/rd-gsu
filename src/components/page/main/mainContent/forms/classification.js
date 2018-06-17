import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";

class Classification extends Component {

  constructor(props){
    super(props);
    //this.props.dispatch(this.props.initialize('pots1', {title: "qwe1", text: "qwe2"}));
  }

  render() {

    console.log('mainContentProps: ', this.props);

    const {handleSubmit, reset} = this.props;
    const submit = (values) => console.log(values);

    return (
      <div className='form classification'>
        <div className='form-top'>
          <p className='form-top_title'>Классификации ППС</p>
          {/*<div className="search-box">
            <input type="submit" className="submit"/>
            <input type="search" className="search" placeholder="Search..."/>
          </div>*/}
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <div className='form-box'>
            <div className='form-box_title'>Наличие учёной степени</div>
            <div className='form-box-inputs'>
              <label>
                <Field name="title" component="input" type="radio" value = 'no'/>
                <p>Нет</p>
              </label>
              <label>
                <Field name="title" component="input" type="radio" value = 'yes'/>
                <p>Да</p>
              </label>
            </div>
          </div>

          <div>
            <button type="button" onClick={reset}>Очистить форму</button>
            <button type="submit">Отправить форму</button>
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
    state
  })
}

export default connect(mapStateToProps)(Classification);