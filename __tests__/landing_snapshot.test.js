jest.mock('../components/reusableStyledComponents/YZEDAnimatedSVG.js', () => () =>
  'YZED Animated SVG Component'
);
jest.mock('../components/reusableStyledComponents/ContactAnimatedSVG.js', () => () =>
  'YZED Animated SVG Component'
);

import LandingAbout from '../components/pageLayouts/LandingPage/LandingAbout';
import LandingContact from '../components/pageLayouts/LandingPage/LandingContact';
import LandingFooter from '../components/pageLayouts/LandingPage/LandingFooter';
import LandingIntroduction from '../components/pageLayouts/LandingPage/LandingIntroduction';
import React from 'react';
import { model } from '../__mocks__/dataMock';
import renderer from 'react-test-renderer';

it('renders introduction unchanged', () => {
  const wrapper = renderer.create(<LandingIntroduction model={model} />).toJSON();
  expect(wrapper).toMatchSnapshot();
});

it('renders landing about section unchanged', () => {
  const tree = renderer.create(<LandingAbout model={model} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders contact unchanged', () => {
  const tree = renderer.create(<LandingContact />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders footer section unchanged', () => {
  const tree = renderer.create(<LandingFooter />).toJSON();
  expect(tree).toMatchSnapshot();
});
