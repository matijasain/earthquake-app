import React from 'react';
import ReactDOM from 'react-dom';

import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';

import MainContainer from './MainContainer';

afterEach(cleanup);

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainContainer />, div);
});

it('Matches snapshot', () => {
  const mainContainerSnap = renderer.create(<MainContainer />).toJSON();
  expect(mainContainerSnap).toMatchSnapshot();
});
