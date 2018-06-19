import {
  CHANGE_LOGIN_SUCCESS,
  CLASSIFICATION_FORM_VALUES,
  CURRENT_PAGINATION,
  CURRENT_PATHNAME, EDUCATION_FORM_VALUES,
  SCIENTIFIC_FORM_VALUES
} from "../constants/const";

const initial_state = {
  [CURRENT_PATHNAME]: '/',
  [CURRENT_PAGINATION]: 0,
  [CHANGE_LOGIN_SUCCESS]: false,
};

export default function Page (state = initial_state, action) {
  let stateTemp = JSON.parse(JSON.stringify(state));

  switch(action.type) {
    case CURRENT_PATHNAME:
      stateTemp[CURRENT_PATHNAME] = action.payload;
      return  stateTemp;
    case CURRENT_PAGINATION:
      stateTemp[CURRENT_PAGINATION] = action.payload;
      return  stateTemp;
    case CLASSIFICATION_FORM_VALUES:
      stateTemp[CLASSIFICATION_FORM_VALUES] = action.payload;
      return  stateTemp;
    case SCIENTIFIC_FORM_VALUES:
      stateTemp[SCIENTIFIC_FORM_VALUES] = action.payload;
      return  stateTemp;
    case EDUCATION_FORM_VALUES:
      stateTemp[EDUCATION_FORM_VALUES] = action.payload;
      return  stateTemp;
    case CHANGE_LOGIN_SUCCESS:
      stateTemp[CHANGE_LOGIN_SUCCESS] = action.payload;
      return  stateTemp;
    default:
      return state;
  }
}