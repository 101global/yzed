jest.mock('../node_modules/@google/model-viewer/dist/model-viewer', () => () => 'Model Viewer');

import AnimatedModelViewer from '../components/reusableStyledComponents/modelViewers/AnimatedModelViewer';
import ModelViewerController from '../components/reusableStyledComponents/modelViewers/ModelViewerController';
import React from 'react';
import StationaryModelViewer from '../components/reusableStyledComponents/modelViewers/StationaryModelViewer';
import { model } from '../__mocks__/dataMock';
import renderer from 'react-test-renderer';

const mockSetTopModelDark = () => {};

it('renders model viewer controller unchanged', () => {
  const wrapper = renderer
    .create(
      <ModelViewerController
        model={model}
        topModelDark={true}
        setTopModelDark={mockSetTopModelDark}
      />
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});

it('renders stationary model viewer unchanged', () => {
  const wrapper = renderer
    .create(
      <StationaryModelViewer
        model={model}
        topModelDark={true}
        setTopModelDark={mockSetTopModelDark}
      />
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});

it('renders animated model viewer unchanged', () => {
  const wrapper = renderer
    .create(
      <AnimatedModelViewer
        model={model}
        topModelDark={true}
        setTopModelDark={mockSetTopModelDark}
      />
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
