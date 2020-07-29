jest.mock('../node_modules/@google/model-viewer/dist/model-viewer', () => () => 'Model Viewer');

import AnimatedModelViewer from '../components/ReusableComponents/ModelViewers/AnimatedModelViewer';
import ModelViewerController from '../components/ReusableComponents/ModelViewers/ModelViewerController';
import React from 'react';
import StationaryModelViewer from '../components/ReusableComponents/ModelViewers/StationaryModelViewer';
import { model } from '../__mocks__/dataMock';
import renderer from 'react-test-renderer';
import { ThemeContext } from '../utilities/context/ThemeContext';

const mockSetTopModelDark = () => {};

it('renders model viewer controller unchanged', () => {
  const wrapper = renderer
    .create(
      <ThemeContext.Provider value={{ darkMode: false }}>
        <ModelViewerController
          model={model}
          topModelDark={true}
          setTopModelDark={mockSetTopModelDark}
        />
      </ThemeContext.Provider>
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});

it('renders stationary model viewer unchanged', () => {
  const wrapper = renderer
    .create(
      <ThemeContext.Provider value={{ darkMode: false }}>
        <StationaryModelViewer
          model={model}
          topModelDark={true}
          setTopModelDark={mockSetTopModelDark}
        />
      </ThemeContext.Provider>
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});

it('renders animated model viewer unchanged', () => {
  const wrapper = renderer
    .create(
      <ThemeContext.Provider value={{ darkMode: false }}>
        <AnimatedModelViewer
          model={model}
          topModelDark={true}
          setTopModelDark={mockSetTopModelDark}
        />
      </ThemeContext.Provider>
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
