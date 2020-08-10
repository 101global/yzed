import React, { useCallback, useEffect, useState } from 'react';
import { defaultIcon, tokenName } from '../constants';
import { fbData, googleData } from '../dataHelpers';

import PropTypes from 'prop-types';
import cookie from 'js-cookie';
import firebase from '../firebaseSetup';
import { server } from '../../config/index';
import { signupStates } from '../enums';
import { useRouter } from 'next/router';

export const UserContext = React.createContext();

const dbh = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();

fbProvider.addScope('email');

const UserProvider = ({ children }) => {
  const [userLoading, setUserLoading] = useState(true);
  const [userError, setUserError] = useState(null);

  const router = useRouter();

  const setError = (error) => {
    setUserError(error);
    setUserLoading(false);
  };

  const refreshUserData = (route) => {
    setTimeout(() => {
      if (route) {
        router.push(route);
      } else {
        router.reload();
      }
    }, 2000);
  };

  const createUserDB = async (
    userID,
    email,
    firstName,
    lastName,
    profilePicture,
    emailVerified,
    route
  ) => {
    await dbh
      .collection('users')
      .doc(userID)
      .set({ email, firstName, lastName, profilePicture, emailVerified, role: 'USER' })
      .then((result) => {
        refreshUserData(route);
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

  const emailSignup = async (email, password, firstName, lastName, redirectPath) => {
    setUserLoading(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (user) => {
        if (user) {
          const userID = user.user.uid;
          const emailVerified = user.user.emailVerified;
          const currentUser = await firebase.auth().currentUser;
          console.log(currentUser);
          await currentUser
            .sendEmailVerification()
            .then(async (resp) => {
              await createUserDB(
                userID,
                email,
                firstName,
                lastName,
                defaultIcon,
                emailVerified,
                '/signup/confirm'
              );
            })
            .catch((err) => {
              setError(err.message);
            });
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err);
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
        await createUserDB(
          userID,
          email,
          firstName,
          lastName,
          profilePicture,
          true,
          '/signup/success'
        );
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
        await createUserDB(
          userID,
          email,
          firstName,
          lastName,
          profilePicture,
          true,
          '/signup/success'
        );
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
        console.log(err);
        setError(err);
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
    const actionCodeSettings = {
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
      .then((email) => {
        firebase
          .auth()
          .confirmPasswordReset(oobCode, password)
          .then((resp) => {
            callback(true);
            cookie.remove(tokenName);
            setTimeout(() => {
              emailLogin(email, password);
            }, 1000);
          })
          .catch((err) => {
            console.log(err.message);
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

  const requestEmailVerification = (callback) => {
    const actionCodeSettings = {
      // After password reset, the user will be give the ability to go back
      // to this page.
      url: `${server}/login`,
      handleCodeInApp: true,
    };
    firebase
      .auth()
      .currentUser.sendEmailVerification(actionCodeSettings)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const confirmEmailVerification = (oobCode, callback) => {
    firebase
      .auth()
      .applyActionCode(oobCode)
      .then((resp) => {
        callback(false);
        // Email address has been verified.
        // TODO: Display a confirmation message to the user.
        // You could also provide the user with a link back to the app.
        // TODO: If a continue URL is available, display a button which on
        // click redirects the user back to the app via continueUrl with
        // additional state determined from that URL's parameters.
      })
      .catch((err) => {
        callback(false);
        setError(err.message);
      });
  };

  const onAuthStateChange = () => {
    return firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        cookie.set(tokenName, token, { expires: 14 });
      } else {
        cookie.remove(tokenName);
      }
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
        requestEmailVerification,
        resetPassword,
        setUserError,
        confirmEmailVerification,
      }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
