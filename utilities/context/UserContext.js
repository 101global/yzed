import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import firebase from '../firebaseSetup';

export const UserContext = React.createContext();

const dbh = firebase.firestore();

const UserProvider = ({ children }) => {
  const initialUserState = {
    id: '',
    loggedIn: false,
    userName: '',
    role: '',
    description: '',
    photo: [],
    followers: [],
    favoriteProducts: [],
  };

  const [firebaseError, setFirebaseError] = useState('');
  const [userLoading, setUserLoading] = useState(true);
  const [userValidated, setUserValidated] = useState(false);
  const [messagingToken, setMessagingToken] = useState('');
  const [userData, setUserData] = useState(initialUserState);

  const verifiedRegister = (email, password, userName) => {
    //  Check if user name is taken.
    dbh
      .collection('users')
      .where('userName', '==', userName)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.docs.length) {
          setFirebaseError('Someone has already taken that username.');
        } else {
          // Sign up user and create user in db. Send user data validation.
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
              if (user && user.user.emailVerified === false) {
                user.user.sendEmailVerification().then(() => {
                  dbh
                    .collection('users')
                    .doc(user.user.uid)
                    .set({
                      userName,
                      role: 'USER',
                      photoLikes: [],
                      followers: [],
                      favoriteProducts: [],
                      photo:
                        'https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/icon_user.png',
                    })
                    .then(() => {
                      dbh
                        .collection('newsletterSubscriptions')
                        .doc()
                        .set({ age: null, name: userName, email, gender: '' });
                    });
                });
              }
            })
            .catch(function (error) {
              setFirebaseError(error.message);
            });
        }
      });
  };

  const registerUser = (email, password, userName, callback) => {
    dbh
      .collection('users')
      .where('userName', '==', userName)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.docs.length) {
          setFirebaseError('Someone has already taken that username.');
        } else {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              dbh
                .collection('users')
                .doc(firebase.auth().currentUser.uid)
                .set({
                  userName,
                  role: 'USER',
                  photoLikes: [],
                  followers: [],
                  favoriteProducts: [],
                  photo:
                    'https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/icon_user.png',
                })
                .then(() => {
                  dbh
                    .collection('newsletterSubscriptions')
                    .doc()
                    .set({ age: null, name: userName, email, gender: '' });
                  const user = firebase.auth().currentUser;
                  user.sendEmailVerification();
                  callback(true);
                });
            })
            .catch(function (error) {
              setFirebaseError(error.message);
            });
        }
      });
  };

  const loginUser = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        setFirebaseError(error.message);
      });
  };

  const logoutUser = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      firebase
        .auth()
        .signOut()
        .catch(function (error) {
          setFirebaseError(error.message);
        });
    }
  };

  const forgotEmail = (email, callback) => {
    var actionCodeSettings = {
      // After password reset, the user will be give the ability to go back
      // to this page.
      url: 'http://localhost:3000/login',
      handleCodeInApp: true,
    };
    firebase
      .auth()
      .sendPasswordResetEmail(email, actionCodeSettings)
      .then(function () {
        callback(true);
      })
      .catch(function (error) {
        setFirebaseError(error.message);
      });
  };

  const onAuthStateChange = async (callback) => {
    setUserLoading(true);
    await firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user && user.emailVerified) {
        setUserValidated(true);
        dbh
          .collection('users')
          .doc(user.uid)
          .onSnapshot((doc) => {
            console.log(doc);
            if (doc.exists) {
              const {
                userName,
                role,
                description,
                photo,
                followers,
                favoriteProducts,
              } = doc.data();
              const userDetails = {
                id: user.uid,
                email: user.email,
                userName,
                role,
                description,
                photo,
                followers,
                favoriteProducts,
              };
              callback({ loggedIn: true, id: user.uid, ...userDetails, lastVisit: new Date() });
              setUserLoading(false);
            }
          });
      } else {
        callback(initialUserState);
        setUserLoading(false);
      }
    });
  };

  // useEffect(() => {
  //   setUserLoading(true);
  //   onAuthStateChange(setUserData);
  //   return () => {
  //     onAuthStateChange(setUserData);
  //   };
  // }, []);

  return <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
