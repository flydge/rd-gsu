import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import { CURRENT_PAGINATION } from "../../../../../constants/const";
import { setClassificationFormValues, setScientificFormValues } from "../../../../../actions/page";

class Scientific extends Component {

  constructor(props){
    super(props);
    this.createList = this.createList.bind(this);
    //this.props.dispatch(this.props.initialize('pots1', {title: "qwe1", text: "qwe2"}));
  }



  createList(){
    const questions = [
      <div className='form-box'>
        <div className='form-box_title'>
          Научное руководство магистрантами(указать количество)
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="undergraduatesNumb" component="input" type="number"/>
            <p></p>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Обучение иностранных граждан
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="foreignTraining" component="input" type="checkbox"/>
            <p>отмечает заведующий</p>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Организация обучения на иностранном языке по специальности І или ІІ ступени высшего образования
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="teachingInForeignLanguage" component="input" type="checkbox"/>
            <p>отмечает заведующий</p>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Организация в университете научно-методических конференций (отмечает заведующий)
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="conferencesOrgInt" component="input" type="checkbox"/>
            <p>международных</p>
          </label>
          <label>
            <Field name="conferencesOrgIntRep" component="input" type="checkbox"/>
            <p>республиканских, межвузовских, региональных</p>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Научно-методические публикации, не включенные в рейтинг по НИР (материалы конференций, включая студенческие)
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="notIncludedPublications" component="textarea" type="text" placeholder ='краткий ответ'/>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Статья, не включенная в рейтинг по НИР, по методике преподавания в научном журнале, сборнике (ВАК)
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="notIncludedArticle" component="input" type="checkbox"/>
            <p>научно-методическая</p>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Издание учебника
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="bookPublication" component="input" type="checkbox"/>
            <p>отмечает ответственный</p>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Издание учебного пособия с грифом (отмечает ответственный)
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="bookPublicationRB" component="input" type="checkbox"/>
            <p>Министерства образования РБ</p>
          </label>
          <label>
            <Field name="bookPublicationYMO" component="input" type="checkbox"/>
            <p>УМО вузов</p>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Создание филиала кафедры в отчетном году
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="newDepartmentCreation" component="input" type="checkbox"/>
            <p>отмечает заведующий</p>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Наличие действующего филиала кафедры
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="operatingDepartment" component="input" type="checkbox"/>
            <p>отмечает заведующий</p>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Подготовка и участие студентов в (отмечает заведующий)
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="preparationStudentsIntOlymp" component="input" type="checkbox"/>
            <p>международных олимпиадах</p>
          </label>
          <label>
            <Field name="preparationStudentsRepOlymp" component="input" type="checkbox"/>
            <p>республиканских  и межвузовских олимпиадах</p>
          </label>
          <label>
            <Field name="preparationStudentsSpartOlymp" component="input" type="checkbox"/>
            <p>спартакиадах</p>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Результативность участия в международных и республиканских предметных олимпиадах (отмечает заведующий)
        </div>
        <div className='form-box-inputs'>
          <div>
            <span>личное первенство:</span>
            <label>
              <Field name="participationStudentsOlympPers1" component="input" type="checkbox"/>
              <p>I место</p>
            </label>
            <label>
              <Field name="participationStudentsOlympPers2" component="input" type="checkbox"/>
              <p>II место</p>
            </label>
            <label>
              <Field name="participationStudentsOlympPers3" component="input" type="checkbox"/>
              <p>III место</p>
            </label>
          </div>
          <div>
            <span>командное первенство:</span>
            <label>
              <Field name="participationStudentsOlympComand1" component="input" type="checkbox"/>
              <p>I место</p>
            </label>
            <label>
              <Field name="participationStudentsOlympComand2" component="input" type="checkbox"/>
              <p>II место</p>
            </label>
            <label>
              <Field name="participationStudentsOlympComand3" component="input" type="checkbox"/>
              <p>III место</p>
            </label>
          </div>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Результативность участия в республиканской универсиаде учреждений высшего образования (УВО), областных и городских соревнованиях (отмечает заведующий)
        </div>
        <div className='form-box-inputs'>
          <div>
            <span>личное первенство:</span>
            <label>
              <Field name="participationStudentsYBOOlympPers1" component="input" type="checkbox"/>
              <p>I место</p>
            </label>
            <label>
              <Field name="participationStudentsYBOOlympPers2" component="input" type="checkbox"/>
              <p>II место</p>
            </label>
            <label>
              <Field name="participationStudentsYBOOlympPers3" component="input" type="checkbox"/>
              <p>III место</p>
            </label>
          </div>
          <div>
            <span>командное первенство:</span>
            <label>
              <Field name="participationStudentsYBOOlympComand1" component="input" type="checkbox"/>
              <p>I место</p>
            </label>
            <label>
              <Field name="participationStudentsYBOOlympComand2" component="input" type="checkbox"/>
              <p>II место</p>
            </label>
            <label>
              <Field name="participationStudentsYBOOlympComand3" component="input" type="checkbox"/>
              <p>III место</p>
            </label>
          </div>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Участие преподавателей в качестве членов жюри в проведении олимпиад, конкурсов, турниров:
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="teachersJuryIntOlymp" component="input" type="checkbox"/>
            <p>международных</p>
          </label>
          <label>
            <Field name="teachersJuryRepOlymp" component="input" type="checkbox"/>
            <p>республиканских</p>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Организация в университете предметных олимпиад (отмечает заведующий)
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="orgInGSUIntOlymp" component="input" type="checkbox"/>
            <p>международных</p>
          </label>
          <label>
            <Field name="orgInGSURepOlymp" component="input" type="checkbox"/>
            <p>республиканских  и межвузовских</p>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Выполнение факультетом контрольных цифр приема на дневную и заочную формы обучения (отмечает заведующий)
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="controlNumbsBudget" component="input" type="checkbox"/>
            <p>за счет средств бюджета</p>
          </label>
          <label>
            <Field name="controlNumbsPayment" component="input" type="checkbox"/>
            <p>на условиях оплаты</p>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Организация стажировок для иностранных граждан на кафедре, приглашение зарубежных лекторов(количество стажёров\лекторов) (отмечает заведующий)
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="OrgTnternshipsForForeign" component="textarea" type="text" placeholder ='краткий ответ'/>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Организация длительных образовательных проектов (TEMPUS, ERASMUS+, ERASMUS Mundus и др.) (указать сумму в рублях) (отмечает заведующий)
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="OrgLongTernProj" component="textarea" type="text" placeholder ='краткий ответ'/>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Неудовлетворительная работа с иностранными студентами(указать количество)(отмечает заведующий)
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="BadWorkWithForeignStud" component="textarea" type="text" placeholder ='краткий ответ'/>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Невыполнение или несвоевременное выполнение решения Совета университета и Совета факультета
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="NonFulfillmentDescOfCouncil" component="input" type="checkbox"/>
            <p>отмечает заведующий</p>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Невыполнение или несвоевременное выполнение приказа и распоряжения  ректора, проректоров, декана
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="NonFulfillmentRectorOrder" component="input" type="checkbox"/>
            <p>отмечает заведующий</p>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Нарушение трудовой дисциплины и правил внутреннего распорядка (опоздания, срыв занятий, курение и т.д.
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="violationOfLabor" component="input" type="checkbox"/>
            <p>отмечает заведующий</p>
          </label>
        </div>
      </div>,
      <div className='form-box'>
        <div className='form-box_title'>
          Несвоевременное (реже,  чем  1 раз в квартал) обновление официальной интернет-страницы подразделения
        </div>
        <div className='form-box-inputs'>
          <label>
            <Field name="untimelyWebsiteUpdate" component="input" type="checkbox"/>
            <p>отмечает заведующий</p>
          </label>
        </div>
      </div>,

    ];
    return questions
  }




  render() {
    let list = this.createList();

    const {handleSubmit, reset} = this.props;
    const submit = (values) => this.props.dispatch(setScientificFormValues(values));

    return (
      <div className='form classification'>
        <div className='form-top'>
          <p className='form-top_title'>Научно-методическая работа</p>
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

Scientific = reduxForm({
  form: 'ScientificForm', // имя формы в state (state.form.post)
})(Scientific);

function mapStateToProps(state) {
  return({
    state,
    currentPaginationBtn: state.page[CURRENT_PAGINATION]
  })
}

export default connect(mapStateToProps)(Scientific);