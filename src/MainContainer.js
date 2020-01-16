import React from 'react';
import Filters from './Filters';
import Earthquakes from './Earthquakes';

const MainContainer = () => (
  <div className="ui stackable one column grid ">
    <div className="four wide column">
      <Filters />
    </div>
    <div className="twelve wide column">
      <Earthquakes />
    </div>
  </div>
);

export default MainContainer;
