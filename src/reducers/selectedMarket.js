import { ACTIVE_MARKET } from '../actions/types';

const INITIAL_STATE = localStorage.getItem('mySelectedCurr') || 'ltc-btc';

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ACTIVE_MARKET:
      return action.payload;
    default:
      return state;
  }
};
