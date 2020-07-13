import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../../utilities/context/UserContext';

const GoogleSignUp = () => {
  const { requestGoogleSignup } = useContext(UserContext);
  return (
    <div>
      <button onClick={() => requestGoogleSignup()}>Sign Up With Google</button>
    </div>
  );
};

export default GoogleSignUp;
