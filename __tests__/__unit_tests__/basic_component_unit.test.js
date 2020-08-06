import '@testing-library/jest-dom';

import MobileNav from '../../components/ReusableComponents/Navigation/MobileNav';
import React from 'react';
import { buttonMock } from '../../__mocks__/dataMock';
import firebase from '../../utilities/firebaseSetup';
import { model } from '../../__mocks__/dataMock';
import { render } from '@testing-library/react';

it('renders the Mobile Nav properly', () => {
  const wrapper = render(<MobileNav isLandingMenu={true} />);
  expect(wrapper.getByText('Introduction')).toBeInTheDocument();
  expect(wrapper.getByText('About Us')).toBeInTheDocument();
  expect(wrapper.getByText('Contact')).toBeInTheDocument();
});
