import React, { useContext, useEffect, useState } from 'react';

import Footer from '../Footer/Footer';
import Logo from '../Icons/Logo';
import MainBodyLayout from './MainBodyLayout';

const UserFormLayout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <Logo styleClass='h-desktopNavLogo mx-auto mt-32' />
      {children}
      <Footer />
    </div>
  );
};

export default UserFormLayout;
