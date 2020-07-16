import React, { useCallback, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import firebase from '../firebaseSetup';
import { useRouter } from 'next/router';
import { signupStates } from '../enums';
import cookie from 'js-cookie';
import { defaultIcon, tokenName } from '../constants';
import { fbData, googleData } from '../dataHelpers';
import { server } from '../../config/index';

export const UserContext = React.createContext();

const dbh = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();

fbProvider.addScope('email');

const UserProvider = ({ children }) => {
  const [userLoading, setUserLoading] = useState(false);
  const [userError, setUserError] = useState(null);

  const router = useRouter();

  const setError = (error) => {
    setUserError(error);
    setUserLoading(false);
  };

  const refreshUserData = (route) => {
    setUserLoading(false);
    if (route) {
      router.push(route);
    } else {
      router.reload();
    }
  };

  const createUserDB = async (
    userID,
    email,
    firstName,
    lastName,
    profilePicture,
    emailVerified
  ) => {
    await dbh
      .collection('users')
      .doc(userID)
      .set({ email, firstName, lastName, profilePicture, emailVerified, roles: ['USER'] })
      .then((result) => {
        refreshUserData();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const updateUserDB = async (userID, email, firstName, lastName, profilePicture) => {
    await dbh
      .collection('users')
      .doc(userID)
      .update({ email, firstName, lastName, profilePicture })
      .then((result) => {
        refreshUserData();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const onAuthStateChange = () => {
    return firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        cookie.set(tokenName, token, { expires: 7 });
      } else {
        cookie.remove(tokenName);
      }
    });
  };

  const emailSignup = async (email, password, firstName, lastName, redirectPath) => {
    setUserLoading(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (user) => {
        if (user) {
          const userID = user.user.uid;
          await createUserDB(userID, email, firstName, lastName, defaultIcon, false);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const googleSignup = async () => {
    setUserLoading(true);
    await firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(async (result) => {
        const data = googleData(result);
        const { userID, email, firstName, lastName, profilePicture } = data;
        await createUserDB(userID, email, firstName, lastName, profilePicture, true);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const fbSignup = async () => {
    setUserLoading(true);
    await firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then(async (result) => {
        const data = fbData(result);
        const { userID, email, firstName, lastName, profilePicture } = data;
        data.url;
        await createUserDB(userID, email, firstName, lastName, profilePicture, true);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const emailLogin = async (email, password, redirectPath) => {
    setUserLoading(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        refreshUserData('/experience/1');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const googleLogin = () => {
    setUserLoading(true);
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(async (result) => {
        const data = googleData(result);
        const { userID, email, firstName, lastName, profilePicture } = data;
        await updateUserDB(userID, email, firstName, lastName, profilePicture);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const fbLogin = () => {
    setUserLoading(true);
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then(async (result) => {
        const data = fbData(result);
        const { userID, email, firstName, lastName, profilePicture } = data;
        data.url;
        await updateUserDB(userID, email, firstName, lastName, profilePicture);
      })
      .catch((err) => {
        setError(err.message);
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

  const requestForgottenPasswordEmail = (email, callback) => {
    var actionCodeSettings = {
      // After password reset, the user will be give the ability to go back
      // to this page.
      url: `${server}/login`,
      handleCodeInApp: true,
    };
    firebase
      .auth()
      .sendPasswordResetEmail(email, actionCodeSettings)
      .then(() => {
        callback(true);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  const resetPassword = (password, oobCode, callback) => {
    firebase
      .auth()
      .verifyPasswordResetCode(oobCode)
      .then(function (email) {
        console.log(email);
        var accountEmail = email;
        console.log(accountEmail);
        firebase
          .auth()
          .confirmPasswordReset(oobCode, password)
          .then(function (resp) {
            console.log(resp);
            callback(true);
            cookie.remove(tokenName);
            setTimeout(() => {
              emailLogin(accountEmail, password);
            }, 2000);
          })
          .catch(function (error) {
            console.log(error.message);
            setError(
              'Something went wrong. This link may have been used already. Resend link to reset password.'
            );
          });
      })
      .catch(function (error) {
        setError(
          'Something went wrong. This link may have been used already. Resend link to reset password.'
        );
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChange();
    return () => {
      unsubscribe();
    };
  }, []);

  const requestEmailSignup = useCallback((username, password, firstName, lastName) => {
    emailSignup(username, password, firstName, lastName);
  });

  const requestGoogleSignup = useCallback(() => {
    googleSignup();
  });

  const requestFbSignup = useCallback(() => {
    fbSignup();
  });

  const requestEmailLogin = useCallback((email, password) => {
    emailLogin(email, password);
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
        userLoading,
        userError,
        requestEmailSignup,
        requestGoogleSignup,
        requestFbSignup,
        requestEmailLogin,
        requestGoogleLogin,
        requestFbLogin,
        requestLogout,
        requestForgottenPasswordEmail,
        resetPassword,
      }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
