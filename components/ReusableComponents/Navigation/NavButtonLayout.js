import React, { useContext, useEffect, useState } from 'react';

import LandingLinks from './LandingLinks';
import MenuButton from '../Buttons/MenuButton';
import NavigationLinks from './NavigationLinks';
import ToggleDarkModeButton from '../Buttons/ToggleDarkMode';

const NavigationButtonLayout = ({ openMenu, setOpenMenu, children, user, isLandingMenu }) => {
  return (
    <div
      className={`w-full flex flex-row items-center ${
        isLandingMenu ? 'justify-between' : 'justify-between lg:justify-end'
      }`}>
      <ToggleDarkModeButton />
      {isLandingMenu ? <LandingLinks /> : null}
      <NavigationLinks user={user} isLandingMenu={isLandingMenu} />
      <div className={`lg:hidden flex items-center`}>
        <MenuButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
    </div>
  );
};

export default NavigationButtonLayout;
