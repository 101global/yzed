jest.mock('../../components/reusableStyledComponents/YZEDAnimatedSVG.js', () => () =>
  'YZED Animated SVG Component'
);
jest.mock('../../components/reusableStyledComponents/ContactAnimatedSVG.js', () => () =>
  'YZED Animated SVG Component'
);

import '@testing-library/jest-dom';

import LandingAbout from '../../components/pageLayouts/LandingPage/LandingAbout';
import LandingContact from '../../components/pageLayouts/LandingPage/LandingContact';
import LandingIntroduction from '../../components/pageLayouts/LandingPage/LandingIntroduction';
import React from 'react';
import model from '../../__mocks__/dataMock';
import { render } from '@testing-library/react';

// Contact Tests

it('renders email link properly', () => {
  const wrapper = render(<LandingContact />);
  const link = wrapper.getByText('yzed@101.global');
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', 'mailto:yzed@101.global');
  expect(link).toHaveClass('email-link');
});

it('renders contact title properly', () => {
  const wrapper = render(<LandingContact />);
  const link = wrapper.getByText("Let's Work Together!");
  expect(link).toBeInTheDocument();
});
