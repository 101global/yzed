import React, { useContext, useEffect, useState } from 'react';

import Link from 'next/link';

const SquareEmptyLink = ({ href, text }) => {
  return (
    <Link href={href}>
      <a className='mx-auto border-black dark:border-white border flex items-center justify-center rounded-md h-formButton w-formButton font-semibold text-black dark:text-white bg-black dark:bg-white text-center text-sm my-4'>
        {text}
      </a>
    </Link>
  );
};

export default SquareEmptyLink;
