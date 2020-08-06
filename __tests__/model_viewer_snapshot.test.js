jest.mock('../node_modules/@google/model-viewer/dist/model-viewer', () => () => 'Model Viewer');

import AnimatedModelViewer from '../components/ReusableComponents/ModelViewers/AnimatedModelViewer';
import BrandModelControls from '../components/pageLayouts/BrandPage/BrandModelControls';
import React from 'react';
import StationaryModelViewer from '../components/ReusableComponents/ModelViewers/StationaryModelViewer';
import { ThemeContext } from '../utilities/context/ThemeContext';
import { model } from '../__mocks__/dataMock';
import renderer from 'react-test-renderer';

const mockSetTopModelDark = () => {};

it('renders stationary model viewer unchanged', () => {
  const wrapper = renderer
    .create(
      <ThemeContext.Provider value={{ darkMode: false }}>
        <StationaryModelViewer model={model} />
      </ThemeContext.Provider>
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});

it('renders animated model viewer unchanged', () => {
  const wrapper = renderer
    .create(
      <ThemeContext.Provider value={{ darkMode: false }}>
        <AnimatedModelViewer model={model} />
      </ThemeContext.Provider>
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});

it('renders model viewer controls unchanged', () => {
  const wrapper = renderer
    .create(
      <ThemeContext.Provider value={{ darkMode: false }}>
        <BrandModelControls model={model} />
      </ThemeContext.Provider>
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
