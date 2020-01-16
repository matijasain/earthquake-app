import React from 'react';
import './Filter.scss';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="filter-main">
        <div>Sort by:</div>
        <div>Filters:</div>
      </div>
    );
  }
}

export default Filters;
