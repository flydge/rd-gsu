import {
  CHANGE_LOGIN_SUCCESS,
  CLASSIFICATION_FORM_VALUES,
  CURRENT_PAGINATION,
  CURRENT_PATHNAME, EDUCATION_FORM_VALUES,
  SCIENTIFIC_FORM_VALUES
} from "../constants/const";

export const setCurrentPathname = currentPathname => ({
  type: CURRENT_PATHNAME,
  payload: currentPathname,
});

export const setCurrentRatingPagination = currentPagination => ({
  type: CURRENT_PAGINATION,
  payload: currentPagination,
});

export const setClassificationFormValues = formValues => ({
  type: CLASSIFICATION_FORM_VALUES,
  payload: formValues,
});
export const setScientificFormValues = formValues => ({
  type: SCIENTIFIC_FORM_VALUES,
  payload: formValues,
});
export const setEducationFormValues = formValues => ({
  type: EDUCATION_FORM_VALUES,
  payload: formValues,
});
export const setLoginSuccess = loginPageVal => ({
  type: CHANGE_LOGIN_SUCCESS,
  payload: loginPageVal,
});
