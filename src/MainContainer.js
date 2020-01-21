import React from 'react';
import moment from 'moment';
import Earthquakes from './Earthquakes';
import './MainContainer.scss';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      earthquakes: [],
      filteredEarthquakes: [],
      toggleSortingDate: 'asc',
      toggleSortingMag: 'asc',
      filteredDays: 30,
      filteredMagnitude: 5,
      filteredAlertType: 'yellow',
    };
  }

  // Using if/else below due to default ESlint rules,
  // in my opinion it would look much better in ternaries
  handleClick = (property, nestedProperty, sorting) => {
    const { earthquakes, toggleSortingDate, toggleSortingMag } = this.state;

    if (nestedProperty === 'mag') {
      if (toggleSortingMag === 'asc') {
        this.setState({ toggleSortingMag: 'desc' });
      } else {
        this.setState({ toggleSortingMag: 'asc' });
      }
    }

    if (nestedProperty === 'time') {
      if (toggleSortingDate === 'asc') {
        this.setState({ toggleSortingDate: 'desc' });
      } else {
        this.setState({ toggleSortingDate: 'asc' });
      }
    }

    // Sorting function
    const nestedSort = (prop1, prop2 = null, direction = 'desc') => (
      e1,
      e2,
    ) => {
      const a = prop2 ? e1[prop1][prop2] : e1[prop1];
      const b = prop2 ? e2[prop1][prop2] : e2[prop1];
      const sortOrder = direction === 'asc' ? 1 : -1;

      if (a < b) {
        return -sortOrder;
      }
      if (a > b) {
        return sortOrder;
      }
      return 0;
    };

    this.setState({
      earthquakes: earthquakes.sort(
        nestedSort(property, nestedProperty, sorting),
      ),
    });
  };

  handleFilteredDays = event => {
    this.setState({ filteredDays: event.target.value });
  };

  handleFilteredMagnitude = event => {
    this.setState({ filteredMagnitude: event.target.value });
  };

  handleAlertType = event => {
    this.setState({ filteredAlertType: event.target.value });
  };

  handleApplyFilters = () => {
    const { filteredDays, filteredMagnitude, filteredAlertType } = this.state;

    const filteredTime = moment()
      .subtract(filteredDays, 'days')
      .format('YYYY-MM-DD');

    // moment(Date.now()).format('YYYY-MM-DD') - handleFilteredDays;

    const filteredUrl = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${filteredTime}&limit=600&minsig=600&minmagnitude=${filteredMagnitude}&alertlevel=${filteredAlertType}`;

    fetch(filteredUrl)
      .then(res => res.json())
      .then(data => this.setState({ earthquakes: data.features }));

    console.log('ALLAA', filteredTime);
    console.log('dsada');
  };

  componentDidMount = () => {
    const url =
      'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson';

    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ earthquakes: data.features }));
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const {
      earthquakes,
      toggleSortingDate,
      toggleSortingMag,
      filteredDays,
      filteredMagnitude,
      filteredAlertType,
    } = this.state;

    console.log('days', filteredDays);
    console.log('mag', filteredMagnitude);
    console.log('alert', filteredAlertType);

    console.log(moment(Date.now()).format('YYYY-MM-DD'));
    return (
      <div className="ui stackable one column grid ">
        <div className="sixteen wide column">
          <div className="filter-main">
            <div>
              Sort by:
              <button
                className="ui button"
                onClick={() =>
                  this.handleClick('properties', 'time', toggleSortingDate)
                }
              >
                Sort by Date
              </button>
              <button
                className="ui button"
                onClick={() =>
                  this.handleClick('properties', 'mag', toggleSortingMag)
                }
              >
                Sort by Magnitude
              </button>
            </div>
            <div>Filters:</div>

            <div>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>
                <input
                  id="typeinp"
                  type="range"
                  min="0"
                  max="30"
                  value={filteredDays}
                  onChange={this.handleFilteredDays}
                  step="1"
                />
                {filteredDays}
              </label>

              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>
                <input
                  id="typeinp"
                  type="range"
                  min="0"
                  max="10"
                  value={filteredMagnitude}
                  onChange={this.handleFilteredMagnitude}
                  step="0.1"
                />
                {filteredMagnitude}
              </label>
            </div>
            <select
              className="ui dropdown"
              defaultValue={filteredAlertType}
              onChange={this.handleAlertType}
            >
              <option value="">Alert Type</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="orange">Orange</option>
              <option value="red">Red</option>
            </select>

            <button className="ui button" onClick={this.handleApplyFilters}>
              Apply filter
            </button>
          </div>
        </div>
        <div className="thirteen wide column">
          <Earthquakes earthquakes={earthquakes} />
        </div>
      </div>
    );
  }
}

export default MainContainer;
