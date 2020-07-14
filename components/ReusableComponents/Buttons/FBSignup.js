import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../../utilities/context/UserContext';

const FacebookSignup = () => {
  const { requestFbSignup } = useContext(UserContext);
  return (
    <div>
      <button onClick={() => requestFbSignup()}>Sign Up With Facebook</button>
    </div>
  );
};

export default FacebookSignup;
