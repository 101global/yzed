import React, { useContext, useEffect, useState } from 'react';

import MoonIcon from '../Icons/Moon';
import SunIcon from '../Icons/Sun';
import { ThemeContext } from '../../../utilities/context/ThemeContext';
import theme from '../../../utilities/theme';

const ToggleDarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <>
      <div className='toggle-container'>
        <input
          className='toggle'
          type='checkbox'
          checked={!darkMode.value}
          onChange={() => toggleDarkMode()}
        />
        <MoonIcon styleClass='toggle-icon moon' fill={darkMode.value ? 'white' : 'black'} />
        <SunIcon styleClass='toggle-icon sun' fill={darkMode.value ? 'black' : 'black'} />
      </div>
      <style jsx>{`
        .toggle-container {
          display: inline-block;
          position: relative;
        }
        input[type='checkbox'] {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          -webkit-tap-highlight-color: transparent;
        }
        .toggle {
          height: 31px;
          width: 80px;
          border-radius: 16px;
          display: inline-block;
          position: relative;

          margin: 0;
          border: 1px solid #eaeaea;
          transition: all 0.3s ease;
          background: ${!darkMode.value ? theme.colors.white : '#c4c4c4'};
        }
        .toggle:after {
          content: '';
          position: absolute;
          top: 2px;
          left: 3px;
          width: 24px;
          height: 24px;
          z-index: 100;
          border-radius: 50%;
          background: ${darkMode.value ? theme.colors.purple : theme.colors.aqua};
          border: 1px solid #75cedb;
          box-shadow: 0 1px 2px rgba(44, 44, 44, 0.2);
          transition: all 0.3s cubic-bezier(0.5, 0.1, 0.75, 1.35);
        }

        .toggle:checked:after {
          transform: translateX(48px);
        }
      `}</style>
      <style jsx global>{`
        .toggle-icon {
          height: 24px;
          width: 24px;
        }
        .sun {
          position: absolute;
          top: 3px;
          left: 4px;
          opacity: ${darkMode.value ? 0 : 1};
          transition: all 0.3s ease;
        }
        .moon {
          position: absolute;
          top: 3px;
          right: 4px;
          opacity: ${!darkMode.value ? 0 : 1};
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default ToggleDarkModeButton;
