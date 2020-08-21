import { FETCH_BOOK } from '../actions/types';

const INITIAL_STATE = {
  bids: [],
  asks: []
};

export default(state = INITIAL_STATE, action) => {
  switch(action.type){
    case FETCH_BOOK:
      return { ...state, bids: action.payload.bids,  asks: action.payload.asks};
    default:
     return state;
  }
};
