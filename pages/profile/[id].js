import React, { useContext, useEffect, useState } from 'react';

import Accordion from '../../components/ReusableComponents/Other/Accordion';
import ChevronRight from '../../components/ReusableComponents/Icons/ChevronRight';
import Footer from '../../components/ReusableComponents/Footer/Footer';
import Link from 'next/link';
import LoadingBars from '../../components/ReusableComponents/Loading/LoadingBars';
import LogoutButton from '../../components/ReusableComponents/Buttons/LogoutButton';
import MainBodyLayout from '../../components/ReusableComponents/Layouts/MainBodyLayout';
import NavigationBar from '../../components/ReusableComponents/Navigation/NavigationBar';
import SquareEmptyLink from '../../components/ReusableComponents/Links/SquareEmptyLink';
import UpdatePassword from '../../components/pageLayouts/ProfilePage/UpdatePassword';
import { UserContext } from '../../utilities/context/UserContext';
import UserFormLayout from '../../components/ReusableComponents/Layouts/UserFormLayout';
import VerifyEmail from '../../components/ReusableComponents/Buttons/VerifyEmail';
import theme from '../../utilities/theme';
import { useRouter } from 'next/router';

const profile = ({ user }) => {
  const [openChangePassword, setOpenChangePassword] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editProfile, setEditProfile] = useState(false);

  const router = useRouter();
  console.log(router.query.id);
  const { requestLogout } = useContext(UserContext);

  useEffect(() => {
    if (!user || user.uid !== router.query.id) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, []);

  if (loading || !user) {
    return (
      <UserFormLayout>
        <div>
          <LoadingBars text='Getting user information...' />
        </div>
      </UserFormLayout>
    );
  }
  return (
    <>
      <MainBodyLayout>
        <div className='text-center w-screen pt-20 flex flex-col justify-between min-h-screen'>
          <NavigationBar user={user} isLandingMenu={false} />
          <main className='profile-container min-h-contentAreaMobile lg:min-h-contentArea flex flex-col justify-between'>
            <section className='mt-8 mb-12'>
              {user.profilePicture.length > 1 ? (
                <img
                  className='profile-image'
                  src={user.profilePicture}
                  alt={`${user.firstName} ${user.lastName} Profile Picture`}
                />
              ) : (
                <h1 className='letter-icon'>{user.profilePicture}</h1>
              )}
              <p className='font-semibold text-base lg:text-lg mt-8'>
                {user.firstName} {user.lastName}
              </p>
              <p className='font-light text-sm lg:text-base mb-12'>{user.email}</p>
              <SquareEmptyLink href='/profile/edit' text='EDIT PROFILE' styleClass='mb-12' />
            </section>
            {!user.emailVerified ? <VerifyEmail user={user} /> : null}
            <section className='bg-lightGrey pt-4 pb-48 dark:bg-darkGrey'>
              <button
                onClick={() => {
                  setOpenChangePassword(!openChangePassword);
                }}
                className='mt-4 py-2 w-formArea mx-auto flex flex-row justify-between items-center'>
                Change Password
                <ChevronRight
                  styleClass={
                    openChangePassword
                      ? 'transform rotate-90 transition-all duration-500'
                      : 'transform rotate-0 transition-all duration-500'
                  }
                />
              </button>
              <Accordion open={openChangePassword}>
                {!user.emailVerified ? (
                  <p>You need to verify your email address first.</p>
                ) : (
                  <UpdatePassword />
                )}
              </Accordion>
              <div className='border-t-2 border-b-2 border-borderGrey dark:border-mediumGrey'>
                <button
                  onClick={() => {
                    setOpenTerms(!openTerms);
                  }}
                  className='py-2 w-formArea mx-auto flex flex-row justify-between items-center'>
                  Terms of Use
                  <ChevronRight
                    styleClass={
                      openTerms
                        ? 'transform rotate-90 transition-all duration-500'
                        : 'transform rotate-0 transition-all duration-500'
                    }
                  />
                </button>
                <Accordion open={openTerms}>
                  <p>Here are the user terms.</p>
                </Accordion>
              </div>
              <button
                onClick={() => {
                  requestLogout();
                }}
                className='text-light block py-2 w-formArea mx-auto text-left'>
                Log Out
              </button>
            </section>
          </main>
          <Footer />
        </div>
      </MainBodyLayout>
      <style jsx>{`
        .letter-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 80px;
          background: ${theme.colors.purple};
          color: ${theme.colors.white};
        }
        .profile-container {
          width: 450px;
          max-width: 100%;
          margin: 0 auto;
        }
        .profile-image,
        .letter-icon {
          height: 120px;
          width: 120px;
          border-radius: 50%;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

export default profile;
