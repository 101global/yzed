import React, { useContext, useEffect, useState } from 'react';

import { ThemeContext } from '../../../utilities/context/ThemeContext';
import UserNavigation from '../Navigation/NavigationBar';

const UserLayout = ({ user, children }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div>
      <UserNavigation user={user} />
      <div>{children}</div>
    </div>
  );
};

export default UserLayout;
