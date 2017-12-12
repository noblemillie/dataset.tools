import { CHANGE_VIEW} from '../actions/mainpage';

export default function mainViewReducer(state = {}, action) {
  switch(action.type) {
    case 'CHANGE_VIEW':
      return action.text
    default:
      return state;
  }
}
