import React, { useContext, useEffect, useState } from 'react';

import MenuButton from '../Buttons/MenuButton';
import ToggleDarkModeButton from '../Buttons/ToggleDarkMode';

const NavigationButtonLayout = ({ openMenu, setOpenMenu, children, isLandingMenu }) => {
  return (
    <div
      className={`w-full flex flex-row items-center ${
        isLandingMenu ? 'justify-end lg:justify-between' : 'justify-between lg:justify-end'
      }`}>
      <ToggleDarkModeButton />
      <>{children}</>
      <div className={`lg:hidden flex items-center ${isLandingMenu ? 'ml-4 lg:ml-0' : null}`}>
        <MenuButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
    </div>
  );
};

export default NavigationButtonLayout;
