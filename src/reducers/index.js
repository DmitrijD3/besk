import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import marketReducer from './marketReducer';
import selectedMarket from './selectedMarket';

export default combineReducers({
  market: marketReducer,
  books: bookReducer,
  selected: selectedMarket
});
