import React, { useContext, useEffect, useState } from 'react';

import NavigationBar from '../../ReusableComponents/Navigation/NavigationBar';

const BrandPageLayout = ({ model }) => {
  console.log(model);
  return (
    <>
      <NavigationBar isLandingMenu={true} />
      <div className='main-page-container flex flex-col lg:grid lg:grid-cols-2 min-h-screen px-4 lg:px-dsk'>
        <div>MODEL</div>
        <div>TEXT</div>
      </div>
      <style jsx>{`
        .main-page-container {
          padding-top: 200px;
        }
      `}</style>
    </>
  );
};

export default BrandPageLayout;
