import React, { useEffect, useContext, useState } from 'react';
import { ThemeContext } from '../utilities/context/ThemeContext';

const darktest = () => {
  const [toggle, setToggle] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  console.log(darkMode);
  return (
    <>
      <div className='my-test'>
        <h1 className=''>Text Goes Here</h1>
        <button
          onClick={() => {
            toggleDarkMode();
          }}>
          Toggle
        </button>
      </div>
      <style jsx global>{`
        .dark-mode .my-test {
          background: green;
          color: yellow;
        }
        .light-mode .my-test {
          background: blue;
          color: red;
        }
      `}</style>
    </>
  );
};

export default darktest;
