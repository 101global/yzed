import React, { useContext, useEffect, useState } from 'react';

import ModelViewerController from '../../reusableStyledComponents/modelViewers/ModelViewerController';

const BrandModelTop = ({ model, lightModeModelView, setLightModeModelView }) => {
  return (
    <ModelViewerController
      model={model}
      lightModeModelView={lightModeModelView}
      setLightModeModelView={setLightModeModelView}
    />
  );
};

export default BrandModelTop;
