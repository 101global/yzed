import React, { useContext, useEffect, useState } from 'react';

import { ThemeContext } from '../../../utilities/context/ThemeContext';
import UserNavigation from '../Navigation/UserNavigation';

const UserLayout = ({ user, children }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    // TODO: Move dark mode to Main Body Layout once old landing pages are depricated.
    <div>
      <UserNavigation user={user} />
      <div>{children}</div>
    </div>
  );
};

export default UserLayout;
