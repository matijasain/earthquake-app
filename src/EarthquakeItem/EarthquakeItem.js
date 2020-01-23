import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

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
      children,
    } = this.props;

    return (
      <div className="item">
        <div className="image">{children}</div>

        <div className="content">
          <h3 className="header">{earthquakeName}</h3>
          <div className="meta">
            <span>Date: {moment(earthquakeDate).format('YYYY-MM-DD')}</span>
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
  earthquakeName: PropTypes.string,
  earthquakeDate: PropTypes.number,
  earthquakeMagnitude: PropTypes.number,
  earthquakeAlert: PropTypes.string,
  tsunami: PropTypes.number,
  earthquakeUrl: PropTypes.string,
  children: PropTypes.node,
};

EarthquakeItem.defaultProps = {
  earthquakeName: '',
  earthquakeAlert: '',
  earthquakeDate: 1577833200000,
  earthquakeMagnitude: 0,
  tsunami: 0,
  earthquakeUrl: '',
  children: undefined,
};

export default EarthquakeItem;
