import BlackLink from '../components/reusableStyledComponents/BlackLink';
import DesktopNav from '../components/reusableStyledComponents/DesktopNavLinks';
import DownChevron from '../components/reusableStyledComponents/DownChevron';
import LoadingSpinner from '../components/reusableStyledComponents/LoadingSpinner';
import MobileNav from '../components/reusableStyledComponents/MobileNavLinks';
import React from 'react';
import renderer from 'react-test-renderer';

it('renders mobile nav unchanged', () => {
  const tree = renderer.create(<MobileNav />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders desktop nav link unchanged', () => {
  const tree = renderer.create(<DesktopNav />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders black manifesto link unchanged', () => {
  const tree = renderer.create(<BlackLink />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders chevron unchanged', () => {
  const tree = renderer.create(<DownChevron />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders loadingSpinner unchanged', () => {
  const tree = renderer.create(<LoadingSpinner color='#fff' />).toJSON();
  expect(tree).toMatchSnapshot();
});
