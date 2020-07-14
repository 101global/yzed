import React, { useCallback, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import firebase from '../firebaseSetup';
import { useRouter } from 'next/router';
import { signupStates } from '../enums';
import cookie from 'js-cookie';

export const UserContext = React.createContext();

const dbh = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

const defaultIcon =
  'https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/account-icon.svg';

const initialUserState = {
  loggedIn: false,
  email: '',
  isVerified: false,
  username: '',
  profilePicture: defaultIcon,
};
const tokenName = 'firebaseToken';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: false });
  const [userLoading, setUserLoading] = useState(false);
  const [userError, setUserError] = useState('');
  const [signupStatus, setSignupStatus] = useState(signupStates.none);

  const router = useRouter();

  const createUserDB = async (userID, email, username, profilePicture, emailVerified) => {
    console.log('CALLED');
    await dbh
      .collection('users')
      .doc(userID)
      .set({ email, username, profilePicture, emailVerified })
      .then((result) => router.reload())
      .catch((err) => console.log(err));
  };

  const onAuthStateChange = (callback) => {
    return firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        cookie.set(tokenName, token, { expires: 7 });
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
          })
          .catch((err) => setUserError(err.message));
      } else {
        cookie.remove(tokenName);
        callback({ loggedIn: false, email: '' });
      }
    });
  };

  const emailSignup = async (email, password, username, redirectPath) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (user) => {
        if (user) {
          const userID = user.user.uid;
          await createUserDB(userID, email, username, defaultIcon, false);
        }
      })
      .catch((err) => setUserError(err.message));
  };

  const googleSignup = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(async (result) => {
        const userID = result.user.uid;
        const email = result.user.email;
        const username = result.additionalUserInfo.profile.given_name;
        const profilePicture = result.additionalUserInfo.profile.picture;
        await createUserDB(userID, email, username, profilePicture, true);
      })
      .catch((error) => {
        setUserError(error.message);
      });
  };

  const emailLogin = async (username, password, redirectPath) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        //Router Action Here.
      })
      .catch((err) => {
        setUserError(err.message);
      });
  };

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        router.reload();
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  const requestEmailSignup = useCallback((username, password, redirectPath) => {
    emailSignup(username, password, redirectPath);
  });

  const requestGoogleSignup = useCallback(() => {
    googleSignup();
  });

  const requestEmailLogin = useCallback((username, password, redirectPath) => {
    emailLogin(username, password, redirectPath);
  });

  const requestLogout = useCallback(() => {
    logout();
  });

  return (
    <UserContext.Provider
      value={{
        user,
        userLoading,
        userError,
        requestEmailSignup,
        requestGoogleSignup,
        requestEmailLogin,
        requestLogout,
        signupStatus,
      }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
