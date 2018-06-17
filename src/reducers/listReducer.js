// default reducer

import { USER_DELETE } from "../constants/const";

function createList(){
  let users = [];
  let name = 'John';
  let job = 'Job';
  for (let i = 0; i < 10; i++) {
    users.push({
      id: i,
      name: name + i,
      job: job + i,
    })
  }
  return users;
}

const initial_state = {
  users: createList(),
};

export default function listReducer (state = initial_state, action) {
  let stateTemp = JSON.parse(JSON.stringify(state));

  switch(action.type) {
    case USER_DELETE:
      stateTemp.users = state.users.filter(user => user.id !== +action.payload.id);
      return  stateTemp;
    default:
      return state;
  }
}