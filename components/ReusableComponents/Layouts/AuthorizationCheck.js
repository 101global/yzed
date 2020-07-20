import React, { useContext, useEffect, useState } from 'react';

import Link from 'next/link';
import LoadingBars from '../Loading/LoadingBars';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const AuthorizationCheck = ({
  user,
  children,
  permissions = ['USER'],
  verifiedEmailRequired = false,
}) => {
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [isEmailVerified, setIsEmailVerified] = useState(true);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const permissionCheck = async () => {
    const hasPermission = await permissions.some((permission) => permission === user.role);
    if (!hasPermission) {
      router.push('/unauthorized');
    } else {
      setLoading(false);
    }
  };

  const checkAuthorizedUser = async () => {
    if (!user) {
      router.push('/login');
    } else {
      if (verifiedEmailRequired) {
        if (!user.emailVerified) {
          router.push('/signup/confirm');
        } else {
          permissionCheck();
        }
      } else {
        permissionCheck();
      }
    }
  };

  useEffect(() => {
    checkAuthorizedUser();
  }, []);

  if (loading)
    return (
      <div className='min-h-screen bg-black flex flex-col justify-center'>
        <LoadingBars text='Loading...' color='white' />;
      </div>
    );

  return <div>{children}</div>;
};

export default AuthorizationCheck;

AuthorizationCheck.propTypes = {
  user: PropTypes.object,
  children: PropTypes.node.isRequired,
  permissions: PropTypes.array.isRequired,
  verifiedEmailRequired: PropTypes.bool,
};
