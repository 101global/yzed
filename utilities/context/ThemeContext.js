import React, { useCallback, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import useDarkMode from 'use-dark-mode';

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const darkMode = useDarkMode();
  console.log(darkMode);
  const toggleDarkMode = () => {
    console.log("CLICK")
    darkMode.toggle();
  };
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
