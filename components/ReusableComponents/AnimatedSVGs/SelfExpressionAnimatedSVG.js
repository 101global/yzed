import React, { useEffect, useContext, useState } from 'react';
import ReactVivus from 'react-vivus';
import selfExpression from '../../../public/icons/self expression.svg';

const SelfExpressionIcon = () => {
  return (
    <>
      <ReactVivus
        id='self-expression-animated'
        option={{
          file: selfExpression,
          animTimingFunction: 'EASE-IN',
          type: 'delayed',
          duration: 150,
        }}
      />
    </>
  );
};

export default SelfExpressionIcon;
