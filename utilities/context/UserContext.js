import React, { useCallback, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import firebase from '../firebaseSetup';
import { useRouter } from 'next/router';
import { signupStates } from '../enums';
import cookie from 'js-cookie';

export const UserContext = React.createContext();

const dbh = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();

fbProvider.addScope('email');

const defaultIcon =
  'https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/account-icon.svg';

const initialUserState = {
  loggedIn: false,
  email: '',
  emailVerified: false,
  username: '',
  profilePicture: defaultIcon,
};

const tokenName = 'firebaseToken';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUserState);
  const [userLoading, setUserLoading] = useState(false);
  const [userError, setUserError] = useState(null);

  const router = useRouter();

  const createUserDB = async (userID, email, username, profilePicture, emailVerified) => {
    await dbh
      .collection('users')
      .doc(userID)
      .set({ email, username, profilePicture, emailVerified, roles: ['USER'] })
      .then((result) => {
        setUserLoading(false);
        router.reload();
      })
      .catch((err) => {
        setUserLoading(false);
        setUserError(err.message);
      });
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
          .catch((err) => {
            setUserError(err.message);
          });
      } else {
        cookie.remove(tokenName);
        callback({ loggedIn: false, email: '' });
      }
    });
  };

  const emailSignup = async (email, password, username, redirectPath) => {
    setUserLoading(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (user) => {
        if (user) {
          const userID = user.user.uid;
          await createUserDB(userID, email, username, defaultIcon, false);
        }
      })
      .catch((err) => {
        setUserError(err.message);
        setUserLoading(false);
      });
  };

  const googleSignup = async () => {
    setUserLoading(true);
    await firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(async (result) => {
        const userID = result.user.uid;
        const email = result.user.email;
        const username = result.additionalUserInfo.profile.given_name;
        const profilePicture = result.additionalUserInfo.profile.picture;
        await createUserDB(userID, email, username, profilePicture, true);
      })
      .catch((err) => {
        {
          setUserError(err.message);
          setUserLoading(false);
        }
      });
  };

  const fbSignup = async () => {
    setUserLoading(true);
    await firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then(async (result) => {
        const userID = result.user.uid;
        const email = result.user.email;
        const username = result.additionalUserInfo.profile.first_name;
        const profilePicture = result.additionalUserInfo.profile.picture.data.url;
        await createUserDB(userID, email, username, profilePicture, true);
      })
      .catch((err) => {
        {
          setUserError(err.message);
          setUserLoading(false);
        }
      });
  };

  const emailLogin = async (username, password, redirectPath) => {
    setUserLoading(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        router.reload();
        setUserLoading(false);
      })
      .catch((err) => {
        setUserError(err.message);
        setUserLoading(false);
      });
  };

  const googleLogin = () => {
    setUserLoading(true);
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(() => {
        router.reload();
        setUserLoading(false);
      })
      .catch((err) => {
        setUserError(err.message);
        setUserLoading(false);
      });
  };

  const fbLogin = () => {
    setUserLoading(true);
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then(() => {
        router.reload();
        setUserLoading(false);
      })
      .catch((err) => {
        setUserError(err.message);
        setUserLoading(false);
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

  const requestFbSignup = useCallback(() => {
    fbSignup();
  });

  const requestEmailLogin = useCallback((username, password, redirectPath) => {
    emailLogin(username, password, redirectPath);
  });

  const requestGoogleLogin = useCallback(() => {
    googleLogin();
  });

  const requestFbLogin = useCallback(() => {
    fbLogin();
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
        requestFbSignup,
        requestEmailLogin,
        requestGoogleLogin,
        requestFbLogin,
        requestLogout,
      }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
