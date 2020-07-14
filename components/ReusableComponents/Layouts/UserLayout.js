import React, { useEffect, useContext, useState } from 'react';
import UserNavigation from '../Navigation/UserNavigation';

const UserLayout = ({ user, children }) => {
  return (
    <>
      <UserNavigation user={user} />
      <div>{children}</div>
    </>
  );
};

export default UserLayout;
