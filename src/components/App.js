import React from 'react';
import MarketTable from "./MarketTable";
import BookTable from "./BookTable";
import '../sass/app.scss';

const App = () => {
  return(
    <div className="new-app">
      <div className="container">
        <div className="tables-holder">
          <MarketTable />
          <BookTable />
        </div>
      </div>
    </div>
  );
};

export default App;
