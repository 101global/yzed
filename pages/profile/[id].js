import React, { useContext, useEffect, useState } from 'react';

import Footer from '../../components/ReusableComponents/Footer/Footer';
import LoadingBars from '../../components/ReusableComponents/Loading/LoadingBars';
import SquareEmptyLink from '../../components/ReusableComponents/Links/SquareEmptyLink';
import { useRouter } from 'next/router';

const profile = ({ user }) => {
  console.log('USSERRREREREWERW', user.profilePicture);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, []);

  if (loading || !user) {
    return (
      <div>
        <LoadingBars text='Getting user information...' />
        <Footer />
      </div>
    );
  }
  return (
    <div>
      {user.profilePicture.length > 1 ? (
        <img src={user.profilePicture} alt={`${user.firstName} ${user.lastName} Profile Picture`} />
      ) : (
        user.firstName.slice(0, 1)
      )}
      <p>
        {user.firstName} {user.lastName}
      </p>
      <p>{user.email}</p>
      <SquareEmptyLink href='/profile/edit' text='EDIT PROFILE' />
    </div>
  );
};

export default profile;
