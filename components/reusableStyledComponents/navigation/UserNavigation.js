import React, { useContext, useEffect, useState } from 'react';

import Link from 'next/link';
import YZEDLogo from '../../../public/yzed_logo_white.svg';

const UserNavigation = () => {
  return (
    <>
      <div className='w-full fixed top-0 left-0'>
        <Link href='/'>
          <a aria-label='YZED Home'>
            <img src={YZEDLogo} alt='YZED Logo' />
          </a>
        </Link>
      </div>
      <style jsx>{`
        img {
          height: 40px;
        }
      `}</style>
    </>
  );
};

export default UserNavigation;
