import '@testing-library/jest-dom';

// import '@testing-library/jest-dom';
import BrandContent from '../../components/pageLayouts/BrandPage/BrandContent';
import Footer from '../../components/ReusableComponents/Footer/Footer';
import React from 'react';
import { model } from '../../__mocks__/dataMock';
import { render } from '@testing-library/react';

it('renders intro title properly', () => {
  const wrapper = render(<Footer model={model} />);
  const link101 = wrapper.getByText('101Global');
  const linkHanwha = wrapper.getByText('Hanwha');
  expect(link101).toBeInTheDocument();
  expect(linkHanwha).toBeInTheDocument();
});
// jest.mock('../../components/ReusableComponents/AnimatedSVGs/YZEDAnimatedSVG.js', () => () =>
//   'YZED Animated SVG Component'
// );
// jest.mock('../../components/ReusableComponents/AnimatedSVGs/ContactAnimatedSVG.js', () => () =>
//   'YZED Animated SVG Component'
// );

// // Introduction Tests

it('renders intro title properly', () => {
  const wrapper = render(<BrandContent model={model} />);
  const title = wrapper.getByText('Where Democratic Fashion catalyzes self-discovery.');
  expect(title).toBeInTheDocument();
});

// it('renders the intro image properly', () => {
//   const wrapper = render(<LandingIntroduction model={model} />);
//   const image = wrapper.getByAltText(`${model.brandName} Detail View 1`);
//   expect(image).toBeInTheDocument();
//   expect(image).toHaveAttribute(
//     'src',
//     `https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/${model.imageSlug}_image_1_mini-compressor.jpg`
//   );
// });

// // About Tests

// it('renders about title properly', () => {
//   const wrapper = render(<LandingAbout model={model} />);
//   const title = wrapper.getByText('“The desire to make fashion more accessible to people.”');
//   expect(title).toBeInTheDocument();
// });

// it('renders the about large image properly', () => {
//   const wrapper = render(<LandingAbout model={model} />);
//   const image = wrapper.getByAltText(`${model.brandName} Detail View 2`);
//   expect(image).toBeInTheDocument();
//   expect(image).toHaveAttribute(
//     'src',
//     `https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/${model.imageSlug}_image_2_mini-compressor.jpg`
//   );
// });

// it('renders the about small image properly', () => {
//   const wrapper = render(<LandingAbout model={model} />);
//   const image = wrapper.getByAltText(`${model.brandName} Detail View 3`);
//   expect(image).toBeInTheDocument();
//   expect(image).toHaveAttribute(
//     'src',
//     `https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/${model.imageSlug}_image_3_mini-compressor.jpg`
//   );
// });

// // Contact Tests

// it('renders contact title properly', () => {
//   const wrapper = render(<LandingContact />);
//   const title = wrapper.getByText("Let's Work Together!");
//   expect(title).toBeInTheDocument();
// });

// it('renders email link properly', () => {
//   const wrapper = render(<LandingContact />);
//   const link = wrapper.getByText('yzed@101.global');
//   expect(link).toBeInTheDocument();
//   expect(link).toHaveAttribute('href', 'mailto:yzed@101.global');
//   expect(link).toHaveClass('email-link');
// });
