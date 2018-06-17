import { CURRENT_PAGINATION, CURRENT_PATHNAME } from "../constants/const";

const initial_state = {
  [CURRENT_PATHNAME]: '/',
  [CURRENT_PAGINATION]: 0,
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
    default:
      return state;
  }
}