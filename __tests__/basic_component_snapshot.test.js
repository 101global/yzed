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

// it('renders stationary viewer unchanged', () => {
//   const tree = renderer.create(<StationaryModelViewer />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

// it('renders animated viewer unchanged', () => {
//   const tree = renderer.create(<AnimatedModelViewer />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

// it('renders model controller unchanged', () => {
//   const tree = renderer.create(<ModeViewerController />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
