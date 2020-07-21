import React, { useContext, useEffect, useState } from 'react';

import { ThemeContext } from '../utilities/context/ThemeContext';
import UserLayout from '../components/ReusableComponents/Layouts/UserLayout';

const darktest = () => {
  const [toggle, setToggle] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  console.log(darkMode.value);

  return (
    <UserLayout>
      <div className='pt-20'>
        <h1 className=''>Text Goes Here</h1>
        <button
          onClick={() => {
            toggleDarkMode();
          }}>
          Toggle
        </button>
      </div>
    </UserLayout>
  );
};

export default darktest;
