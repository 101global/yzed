import '@testing-library/jest-dom';

import DesktopNav from '../../components/pageLayouts/LandingPage/DesktopNavLinks';
import MobileNav from '../../components/pageLayouts/LandingPage/DesktopNavLinks';
import React from 'react';
import { buttonMock } from '../../__mocks__/dataMock';
import { render } from '@testing-library/react';
import BlackLink from '../../components/ReusableComponents/Links/BlackLink';

it('renders a button properly', () => {
  const wrapper = render(
    <BlackLink title={buttonMock.title} link={buttonMock.href} data-testid={buttonMock.title} />
  );
  expect(wrapper.getByRole('link')).toHaveTextContent(buttonMock.title);
});

it('renders the desktop nav properly', () => {
  const wrapper = render(<DesktopNav />);
  expect(wrapper.getByText('3D Model')).toBeInTheDocument();
  expect(wrapper.getByText('Introduction')).toBeInTheDocument();
  expect(wrapper.getByText('About Us')).toBeInTheDocument();
  expect(wrapper.getByText('Contact')).toBeInTheDocument();
});

it('renders the mobile nav properly', () => {
  const wrapper = render(<MobileNav openMenu={true} setOpenMenu={() => {}} />);
  expect(wrapper.getByText('3D Model')).toBeInTheDocument();
  expect(wrapper.getByText('Introduction')).toBeInTheDocument();
  expect(wrapper.getByText('About Us')).toBeInTheDocument();
  expect(wrapper.getByText('Contact')).toBeInTheDocument();
});
