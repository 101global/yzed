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
      {/* TODO: Add navigation links once we have them. */}
      {isLandingMenu ? <LandingLinks /> : null}
      <NavigationLinks user={user} isLandingMenu={isLandingMenu} />
      <MenuButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  );
};

export default NavigationButtonLayout;
