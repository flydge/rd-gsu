import { USER_DELETE } from "../constants/const";


export const deletePerson = id => ({type: USER_DELETE, payload: {id}});
