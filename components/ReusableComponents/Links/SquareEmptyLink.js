import React, { useContext, useEffect, useState } from 'react';

import Link from 'next/link';

const SquareEmptyLink = ({ href, text, styleClass }) => {
  return (
    <Link href={href}>
      <a
        className={`mx-auto border-black dark:border-white border flex items-center justify-center rounded-md h-formButton w-formButton text-black dark:text-white bg-transparent text-center text-sm ${styleClass}`}>
        {text}
      </a>
    </Link>
  );
};

export default SquareEmptyLink;
