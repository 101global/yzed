import BlackLink from '../components/reusableStyledComponents/BlackLink';
import DesktopNav from '../components/pageLayouts/LandingPage/DesktopNavLinks';
import DownChevron from '../components/reusableStyledComponents/DownChevron';
import LoadingBars from '../components/reusableStyledComponents/LoadingBars';
import MobileNav from '../components/pageLayouts/LandingPage/MobileNavLinks';
import React from 'react';
import { buttonMock } from '../__mocks__/dataMock';
import renderer from 'react-test-renderer';

it('renders mobile nav unchanged', () => {
  const tree = renderer.create(<MobileNav openMenu={true} setOpenMenu={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders desktop nav link unchanged', () => {
  const tree = renderer.create(<DesktopNav />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders black manifesto link unchanged', () => {
  const tree = renderer
    .create(<BlackLink title={buttonMock.title} link={buttonMock.href} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders chevron unchanged', () => {
  const tree = renderer.create(<DownChevron topModelDark={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders loadingSpinner unchanged', () => {
  const tree = renderer.create(<LoadingBars color='#fff' />).toJSON();
  expect(tree).toMatchSnapshot();
});
