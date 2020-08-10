import React, { useContext, useEffect, useState } from 'react';

import Link from 'next/link';

const SquareFilledLink = ({ href, text, styleClass }) => {
  return (
    <Link href={href}>
      <a
        className={`mx-auto border-white dark:border-black border flex items-center justify-center rounded-md h-formButton w-formButton font-semibold text-white dark:text-black bg-black dark:bg-white text-center text-sm ${styleClass}`}>
        {text}
      </a>
    </Link>
  );
};

export default SquareFilledLink;
