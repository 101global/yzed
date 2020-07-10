import React, { useCallback, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import firebase from '../firebaseSetup';

export const UserContext = React.createContext();

const dbh = firebase.firestore();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: false });
  const [userLoading, setUserLoading] = useState(false);

  function onAuthStateChange(callback) {
    setUserLoading(true);
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        console.log('The user is logged in');
        callback({ loggedIn: true, email: user.email });
        setUserLoading(false);
      } else {
        console.log('The user is not logged in');
        callback({ loggedIn: false });
        setUserLoading(false);
      }
    });
  }

  function login(username, password) {
    firebase.auth().signInWithEmailAndPassword(username, password);
  }

  function logout() {
    firebase.auth().signout();
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  const requestLogin = useCallback((username, password) => {
    login(username, password);
  });
  const requestLogout = useCallback((username, password) => {
    logout();
  });
  // useEffect(() => {
  //   setUserLoading(true);
  //   onAuthStateChange(setUserData);
  //   return () => {
  //     onAuthStateChange(setUserData);
  //   };
  // }, []);

  return (
    <UserContext.Provider value={{ user, userLoading, requestLogin, requestLogout }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
