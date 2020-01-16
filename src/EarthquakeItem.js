import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import map from './img/map.png';

class EarthquakeItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      earthquakeName,
      earthquakeDate,
      earthquakeMagnitude,
      earthquakeAlert,
      tsunami,
      earthquakeUrl,
      // lat,
      // lon,
      // earthquakeMinimap,
    } = this.props;

    return (
      <div className="item">
        <div className="image">
          <img src={map} alt="map" />
        </div>
        <div className="content">
          <h3 className="header">{earthquakeName}</h3>
          <div className="meta">
            <span>Date: {moment(earthquakeDate).format('MMM Do YYYY')}</span>
          </div>
          <div className="description">
            <p>Magnitude: {earthquakeMagnitude}</p>
            <p>Alert: {earthquakeAlert}</p>
            <p>Tsunami: {tsunami}</p>
          </div>
          <div className="extra">
            <a
              href={earthquakeUrl}
              alt="earthquake url"
              target="_blank"
              rel="noopener noreferrer"
            >
              {earthquakeUrl}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

EarthquakeItem.propTypes = {
  earthquakeName: PropTypes.string.isRequired,
  earthquakeDate: PropTypes.number.isRequired,
  earthquakeMagnitude: PropTypes.number.isRequired,
  earthquakeAlert: PropTypes.string,
  tsunami: PropTypes.number.isRequired,
  earthquakeUrl: PropTypes.string.isRequired,
  // lat: PropTypes.number.isRequired,
  // lon: PropTypes.number.isRequired,
  // earthquakeMinimap: PropTypes.string.isRequired,
};

EarthquakeItem.defaultProps = {
  earthquakeAlert: null,
};

export default EarthquakeItem;
