import React from 'react';
import PropTypes from 'prop-types';

import EarthquakeItem from './EarthquakeItem';
import EarthquakeMap from './EarthquakeMap';

class Earthquakes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { earthquakes } = this.props;

    return (
      <div>
        <div className="ui divided center items">
          {earthquakes.map(earthquake => {
            return (
              <EarthquakeItem
                key={earthquake.properties.updated}
                earthquakeName={earthquake.properties.place}
                earthquakeDate={earthquake.properties.time}
                earthquakeMagnitude={earthquake.properties.mag}
                earthquakeAlert={earthquake.properties.alert}
                tsunami={earthquake.properties.tsunami}
                earthquakeUrl={earthquake.properties.url}
              >
                <EarthquakeMap
                  latitude={earthquake.geometry.coordinates[1]}
                  longitude={earthquake.geometry.coordinates[0]}
                />
              </EarthquakeItem>
            );
          })}
        </div>
      </div>
    );
  }
}

Earthquakes.propTypes = {
  earthquakes: PropTypes.array.isRequired,
};

export default Earthquakes;
