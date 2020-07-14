import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../../utilities/context/UserContext';

const GoogleSignup = () => {
  const { requestGoogleSignup } = useContext(UserContext);
  return (
    <div>
      <button onClick={() => requestGoogleSignup()}>Sign Up With Google</button>
    </div>
  );
};

export default GoogleSignup;
