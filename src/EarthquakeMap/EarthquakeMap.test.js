import React from 'react';
import ReactDOM from 'react-dom';

import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import EarthquakeMap from './EarthquakeMap';

afterEach(cleanup);

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EarthquakeMap />, div);
});
