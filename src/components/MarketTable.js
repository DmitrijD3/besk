import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";

import { fetchMarket, selectedMarket } from "../actions"

const MarketTable = () => {
  const markets = useSelector(state => state.market.markets);
  const query = useSelector(state => state.selected);
  const dispatch = useDispatch();

  useEffect(() => {
    const marketRes = async () => {
      const response = await axios(`https://exmarkets.com/api/v1/general/information`,);
      dispatch(fetchMarket(response.data.markets));
    }
    marketRes();
  }, []);

  const onItemClick = (e) => {
    const dataSlug = e.currentTarget.attributes['data-slug'].value;
    dispatch(selectedMarket(dataSlug));
    localStorage.setItem("mySelectedCurr", dataSlug);
  }

  const renderList = () => {
    return markets.map(itm => {
      return(
        <div className={`market__item ${itm.slug === query && "market__item--active"}`} key={itm.id} data-slug={itm.slug} onClick={(e) => onItemClick(e)}>{itm.name}</div>
      );
    });
  };

  return(
    <div className="market">
      {renderList()}
    </div>
  )
}

export default MarketTable;
