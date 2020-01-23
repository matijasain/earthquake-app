import React from 'react';
import ReactDOM from 'react-dom';

import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';

import EarthquakeItem from './EarthquakeItem';

afterEach(cleanup);

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EarthquakeItem />, div);
});

it('Matches snapshot', () => {
  const mainContainerSnap = renderer.create(<EarthquakeItem />).toJSON();
  expect(mainContainerSnap).toMatchSnapshot();
});
