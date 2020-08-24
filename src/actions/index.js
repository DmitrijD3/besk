import {
  FETCH_BOOK,
  FETCH_MARKET,
  ACTIVE_MARKET
} from "./types";

export const selectedMarket = (data) => {
  return (dispatch) => {
    dispatch({ type: ACTIVE_MARKET, payload: data });
  };
};

export const fetchBook = (data) => {
  return (dispatch) => {
    dispatch({ type: FETCH_BOOK, payload: data });
  };
};

export const fetchMarket = (data) => {
  return (dispatch) => {
    dispatch({ type: FETCH_MARKET, payload: data });
  };
};
