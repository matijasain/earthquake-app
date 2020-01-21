import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import './EarthquakeMap.scss';
import PropTypes from 'prop-types';

class EarthquakeMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { latitude, longitude } = this.props;

    return (
      <Map center={[latitude, longitude]} zoom={6}>
        <Marker position={[latitude, longitude]} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    );
  }
}

EarthquakeMap.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default EarthquakeMap;
