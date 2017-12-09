import { ADD_ACCESS_TOKEN} from '../actions/homepage';


export default function addToken(state = {}, action) {
  switch (action.type) {
    case ADD_ACCESS_TOKEN:
      return Object.assign({}, state, {token: action.text});
    default:
      return state;
  }
}

//export default addToken
