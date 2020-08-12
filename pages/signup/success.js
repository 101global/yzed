import React, { useContext, useEffect, useState } from 'react';

import SignupSuccess from '../../components/pageLayouts/SignUpPage/Success';

const success = ({ user }) => {
  return <SignupSuccess user={user} />;
};

export default success;
