import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";

class Scientific extends Component {

  constructor(props){
    super(props);
    //this.props.dispatch(this.props.initialize('pots1', {title: "qwe1", text: "qwe2"}));
  }

  render() {

    console.log('mainContentProps: ', this.props);

    const {handleSubmit, reset} = this.props;
    const submit = (values) => console.log(values);

    return (
      <div className='form scientific'>
        <div className='form-top'>
          <p className='form-top_title'>Научно-методическая работа</p>
          {/*<div className="search-box">
            <input type="submit" className="submit"/>
            <input type="search" className="search" placeholder="Search..."/>
          </div>*/}
        </div>
        <form onSubmit={handleSubmit(submit)}>
          {/* принимает имя поля, тип и остальные свойства, которые расмотрим позже*/}
          <Field name="title" component="input" type="text"/>
          <Field name="text" component="input" type="text"/>
          <div>
            <button type="button" onClick={reset}>Очистить форму</button>
            <button type="submit">Отправить форму</button>
          </div>
        </form>
      </div>
    );
  }

}

Scientific = reduxForm({
  form: 'ScientificForm', // имя формы в state (state.form.post)
})(Scientific);

function mapStateToProps(state) {
  return({
    state
  })
}

export default connect(mapStateToProps)(Scientific);