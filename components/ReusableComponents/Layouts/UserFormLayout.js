import React, { useContext, useEffect, useState } from 'react';

import Footer from '../Footer/Footer';
import Logo from '../Icons/Logo';
import MainBodyLayout from './MainBodyLayout';

const UserFormLayout = ({ children, title }) => {
  return (
    <MainBodyLayout title={title}>
      <div className='min-h-screen flex flex-col justify-between'>
        <Logo styleClass='h-desktopNavLogo mx-auto my-16' />
        <div className='min-h-formArea w-formArea mx-auto'>{children}</div>
        <Footer />
      </div>
    </MainBodyLayout>
  );
};

export default UserFormLayout;
