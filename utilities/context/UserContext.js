import React, { useCallback, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import firebase from '../firebaseSetup';

export const UserContext = React.createContext();

const dbh = firebase.firestore();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: false });
  const [userLoading, setUserLoading] = useState(false);
  const [userError, setUserError] = useState(null);

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
        callback({ loggedIn: false, email: '' });
        setUserLoading(false);
      }
    });
  }

  const signup = async (username, password, redirectCallback) => {};

  const login = async (username, password, redirectCallback) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => redirectCallback())
      .catch((err) => setUserError(err.message));
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

  const requestSignup = useCallback((username, password, redirectCallback) => {
    signup(username, password, redirectCallback);
  });

  const requestLogin = useCallback((username, password, redirectCallback) => {
    login(username, password, redirectCallback);
  });

  const requestLogout = useCallback(() => {
    logout();
  });

  return (
    <UserContext.Provider value={{ user, userLoading, userError, requestLogin, requestLogout }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
