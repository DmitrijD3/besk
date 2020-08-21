import { FETCH_MARKET } from '../actions/types';

const INITIAL_STATE = {
  markets: []
};

export default(state = INITIAL_STATE, action) => {
  switch(action.type){
    case FETCH_MARKET:
      return { ...state, markets: action.payload};
    default:
     return state;
  }
};
