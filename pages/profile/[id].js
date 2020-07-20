import React, { useContext, useEffect, useState } from 'react';

import LoadingBars from '../../components/ReusableComponents/Loading/LoadingBars';
import { useRouter } from 'next/router';

const profile = ({ user }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, []);
  if (loading) <LoadingBars text='Getting user information...' />;
  return <div></div>;
};

export default profile;
