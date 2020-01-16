import React from 'react';
import EarthquakeItem from './EarthquakeItem';

class Earthquakes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      earthquakes: [],
    };
  }

  componentDidMount = () => {
    const url =
      'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson';

    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ earthquakes: data.features }));
  };

  render() {
    const { earthquakes } = this.state;

    return (
      <div>
        <div id="mapid" />
        <div className="ui divided items">
          {earthquakes.map(earthquake => {
            return (
              <EarthquakeItem
                earthquakeName={earthquake.properties.place}
                earthquakeDate={earthquake.properties.time}
                earthquakeMagnitude={earthquake.properties.mag}
                earthquakeAlert={earthquake.properties.alert}
                tsunami={earthquake.properties.tsunami}
                earthquakeUrl={earthquake.properties.url}
                // lat={earthquake.geometry.coordinates[0]}
                // lon={earthquake.geometry.coordinates[1]}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Earthquakes;
