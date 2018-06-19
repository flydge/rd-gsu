import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import { CURRENT_PAGINATION } from "../../../../../constants/const";
import { setClassificationFormValues, setEducationFormValues } from "../../../../../actions/page";

class Education extends Component {

  constructor(props){
    super(props);
    this.createList = this.createList.bind(this);
    //this.props.dispatch(this.props.initialize('pots1', {title: "qwe1", text: "qwe2"}));
  }

  createList(){
    const questions = [
      <div className='form-box'>
        <div className='form-box_title'>
          Подготовка и оформление УМК по дисциплине кафедры
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="QMSRegistration" component="input" type="checkbox" />
            <p>отмечает ответственный</p>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Регистрация ЭУМК в Государственном регистре информационных систем
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="QMSRegistrationInSRIS" component="input" type="checkbox" />
            <p>отмечает ответственный</p>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Издание новых учебных материалов по дисциплинам кафедры (отмечает ответственный)
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="practiceGuidesNew" component="input" type="checkbox" />
            <p>руководства для практических занятий</p>
          </label>
          <label>
            <Field name="manualsForLaboratoryExercisesNew" component="input" type="checkbox" />
            <p>руководства для лабораторных занятий</p>
          </label>
          <label>
            <Field name="practicalGuidanceERMNew" component="input" type="checkbox" />
            <p>практические руководства по УСР</p>
          </label>
          <label>
            <Field name="assignmentsToTestPapersNew" component="input" type="checkbox" />
            <p>задания к контрольным работам</p>
          </label>
          <label>
            <Field name="testTasksNew" component="input" type="checkbox" />
            <p>тестовые задания</p>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Размещение ранее изданных электронных версий учебных материалов в репозитории университета. (отмечает ответственный)
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="practiceGuidesOld" component="input" type="checkbox" />
            <p>руководства для практических занятий</p>
          </label>
          <label>
            <Field name="manualsForLaboratoryExercisesOld" component="input" type="checkbox" />
            <p>руководства для лабораторных занятий</p>
          </label>
          <label>
            <Field name="practicalGuidanceERMOld" component="input" type="checkbox" />
            <p>практические руководства по УСР</p>
          </label>
          <label>
            <Field name="assignmentsToTestPapersOld" component="input" type="checkbox" />
            <p>задания к контрольным работам</p>
          </label>
          <label>
            <Field name="tutorialOld" component="input" type="checkbox" />
            <p>учебник</p>
          </label>
          <label>
            <Field name="stampedTutorialOld" component="input" type="checkbox" />
            <p>учебное пособия с грифом</p>
          </label>
          <label>
            <Field name="videoPresentationsOld" component="input" type="checkbox" />
            <p>тексты и видеопрезентации лекций</p>
          </label>
          <label>
            <Field name="testTasksOld" component="input" type="checkbox" />
            <p>тестовые задания</p>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Открытие подготовки по новой для университета специальности, специализации
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="newUniversitySpec" component="input" type="checkbox"/>
            <p>отмечает заведующий</p>
          </label>
        </div>
      </div>

    ];
    return questions
  }



  render() {
    let list = this.createList();

    const {handleSubmit, reset} = this.props;
    const submit = (values) => this.props.dispatch(setEducationFormValues(values));

    return (
      <div className='form education'>
        <div className='form-top'>
          <p className='form-top_title'>Учебно-методическая работа</p>
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
            <button type="button" onClick={reset}>Очистить форму</button>
            <button type="submit">Отправить форму</button>
          </div>

        </form>
      </div>
    );
  }

}

Education = reduxForm({
  form: 'EducationForm', // имя формы в state (state.form.post)
})(Education);

function mapStateToProps(state) {
  return({
    state,
    currentPaginationBtn: state.page[CURRENT_PAGINATION]
  })
}

export default connect(mapStateToProps)(Education);