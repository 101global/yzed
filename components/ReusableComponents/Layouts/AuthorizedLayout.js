import React, { useEffect, useContext, useState } from 'react';

const AuthorizedLayout = ({ user }) => {
  if (!user.loggedIn) {
    console.log('UNSAFE USER');
  }
  return <div></div>;
};

export default AuthorizedLayout;
