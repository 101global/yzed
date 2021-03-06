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
          aria-label='toggle dark mode'
          className='toggle'
          type='checkbox'
          defaultChecked={darkMode.value}
          onClick={() => {
            if (darkMode.value) {
              darkMode.disable();
            } else {
              darkMode.enable();
            }
          }}
        />
        <MoonIcon styleClass='toggle-icon moon' fill={theme.colors.white} />
        <SunIcon styleClass='toggle-icon sun' fill={theme.colors.black} />
      </div>
      <style jsx>{`
        .toggle-container {
          display: flex;
          position: relative;
          justify-content: center;
          align-items: center;
        }
        input[type='checkbox'] {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          -webkit-tap-highlight-color: transparent;
        }
        .toggle {
          height: 28px;
          width: 80px;
          border-radius: 16px;
          display: inline-block;
          position: relative;
          margin: 0;
          border: 1px solid ${theme.colors.lightGrey};
          transition: all 0.5s ease;
        }
        .toggle:after {
          content: '';
          position: absolute;
          top: 2px;
          right: 2px;
          width: 22px;
          height: 22px;
          z-index: 100;
          border-radius: 50%;
          box-shadow: 0 1px 2px rgba(44, 44, 44, 0.2);
          transition: all 0.5s cubic-bezier(0.5, 0.1, 0.75, 1.35);
        }
        .toggle:checked:after {
          transform: translateX(-50px);
        }
        @media (max-width: 1024px) {
          .toggle {
            width: 68px;
          }
          .toggle:checked:after {
            transform: translateX(-39px);
          }
        }
      `}</style>
      <style jsx global>{`
        .toggle-icon {
          height: 22px;
          width: 22px;
        }
        .sun {
          position: absolute;
          top: 3px;
          left: 4px;
          transition: all 0.3s ease;
        }
        .moon {
          position: absolute;
          top: 3px;
          right: 4px;
          transition: all 0.3s ease;
        }
        .dark-mode .sun,
        .light-mode .moon {
          opacity: 0;
        }
        .dark-mode .moon,
        .light-mode .sun {
          opacity: 1;
        }
        .light-mode .toggle {
          background: ${theme.colors.white};
        }
        .dark-mode .toggle {
          background: #272727;
        }
        .light-mode .toggle:after {
          background: ${theme.colors.aquaLight};
          border: 1px solid ${theme.colors.aqua};
        }
        .dark-mode .toggle:after {
          background: ${theme.colors.transparentPurple};
          border: 1px solid ${theme.colors.white};
        }
      `}</style>
    </>
  );
};

export default ToggleDarkModeButton;
