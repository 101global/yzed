import React, { useEffect, useContext, useState } from 'react';
import ToggleDarkModeButton from '../Buttons/ToggleDarkMode';
import MenuButton from '../Buttons/MenuButton';

const NavigationButtonLayout = ({ openMenu, setOpenMenu, children }) => {
  return (
    <div className='w-full flex flex-row items-center justify-end'>
      <ToggleDarkModeButton />
      <>{children}</>
      <div className='lg:hidden flex items-center'>
        <MenuButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
    </div>
  );
};

export default NavigationButtonLayout;
