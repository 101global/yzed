import React, { useContext, useEffect, useState } from 'react';

import { ThemeContext } from '../../../utilities/context/ThemeContext';
import UserNavigation from '../Navigation/NavigationBar';

const LandingLayout = ({ user, children }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div>
      <UserNavigation user={user} isLandingMenu={true} />
      <div>{children}</div>
    </div>
  );
};

export default LandingLayout;
