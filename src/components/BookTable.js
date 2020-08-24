import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { fetchBook } from "../actions";

const BookTable = () => {
  const bids = useSelector(state => state.books.bids);
  const query = useSelector(state => state.selected);
  const dispatch = useDispatch();
  const tableRef = useRef(null);

  useEffect(() => {
    const bookRes = async () => {
      const response = await axios(`https://exmarkets.com/api/trade/v1/market/order-book?market=${query}&limit=10`,);
      dispatch(fetchBook(response.data));

      tableRef.current.scrollIntoView({behavior: "smooth"});
    };
    bookRes();
  }, [query]);

  const renderList = () => {
    return bids.map((itm, index) => {
      return(
        <div className="book__row" key={index+itm.price+itm.amount}>
          <div className="book__cell">{itm.price}</div>
          <div className="book__cell">{itm.amount}</div>
          <div className="book__cell">{(parseFloat(itm.price)+parseFloat(itm.amount)).toFixed(6)}</div>
        </div>
      );
    });
  };

  return(
    <div className="book" ref={tableRef}>
      <div className="book__row book__header">
        <div className="book__cell">Price</div>
        <div className="book__cell">Amount</div>
        <div className="book__cell">Total</div>
      </div>
      {bids.length > 0 ? renderList() : <div className="book__empty">No data available</div>}
    </div>
  );
};
export default BookTable;
