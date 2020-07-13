import React, { useCallback, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import firebase from '../firebaseSetup';
import { useRouter } from 'next/router';

export const UserContext = React.createContext();

const dbh = firebase.firestore();

const defaultIcon =
  'https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/account-icon.svg';

const initialUserState = {
  loggedIn: false,
  email: '',
  isVerified: false,
  username: '',
  profilePicture: defaultIcon,
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: false });
  const [userLoading, setUserLoading] = useState(true);
  const [userError, setUserError] = useState(null);

  const router = useRouter();

  const onAuthStateChange = (callback) => {
    setUserLoading(true);
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        await dbh
          .collection('users')
          .doc(user.uid)
          .get()
          .then(async (doc) => {
            const { username, profilePicture } = doc.data();
            callback({
              loggedIn: true,
              email: user.email,
              isVerified: user.emailVerified,
              username,
              profilePicture,
            });
            setUserLoading(false);
          })
          .catch((err) => setUserError(err.message));
      } else {
        console.log('The user is not logged in');
        callback({ loggedIn: false, email: '' });
        setUserLoading(false);
      }
    });
  };

  const emailSignup = async (email, password, username, redirectPath) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (user) => {
        if (user) {
          await dbh
            .collection('users')
            .doc(user.user.uid)
            .set({
              email,
              username,
              profilePicture: defaultIcon,
            })
            .then(() => {
              router.back();
            })
            .catch((err) => {
              setUserError(err.message);
            });
        }
      })
      .catch((err) => setUserError(err.message));
  };

  const emailLogin = async (username, password, redirectPath) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        router.back();
      })
      .catch((err) => {
        setUserError(err.message);
      });
  };

  const logout = () => {
    firebase.auth().signOut();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  const requestEmailSignup = useCallback((username, password, redirectPath) => {
    signup(username, password, redirectPath);
  });

  const requestEmailLogin = useCallback((username, password, redirectPath) => {
    login(username, password, redirectPath);
  });

  const requestLogout = useCallback(() => {
    logout();
  });

  return (
    <UserContext.Provider
      value={{ user, userLoading, userError, requestEmailSignup, requestEmailLogin, requestLogout }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
