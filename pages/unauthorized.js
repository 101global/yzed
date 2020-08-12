import React, { useEffect, useContext, useState } from 'react';
import Link from 'next/link';

const unauthorized = ({ user }) => {
  return (
    <div>
      <h1>Stop! You shouldn't be here.</h1>
      <p>
        Either go back or click{' '}
        <Link href='/'>
          <a>here</a>
        </Link>{' '}
        to go home.
      </p>
    </div>
  );
};

export default unauthorized;
