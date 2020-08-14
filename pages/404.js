import React, { useContext, useEffect, useState } from 'react';

import Error404 from '../components/ReusableComponents/Errors/Error404';

const error = () => {
  return <Error404 />;
};

export default error;
