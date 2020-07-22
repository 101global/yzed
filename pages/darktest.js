import React, { useContext, useEffect, useState } from 'react';

import LandingLayout from '../components/ReusableComponents/Layouts/LandingLayout';
import { ThemeContext } from '../utilities/context/ThemeContext';
import ToggleDarkMode from '../components/ReusableComponents/Buttons/ToggleDarkMode';

const darktest = () => {
  const [toggle, setToggle] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  console.log(darkMode.value);

  return (
    <LandingLayout>
      <div className='pt-20'>
        <h1 className=''>Text Goes Here</h1>
        <ToggleDarkMode />
      </div>
    </LandingLayout>
  );
};

export default darktest;
