import React, { useEffect, useState } from 'react';

const ProgressiveClickImage = ({ preview, image, callBack, alt }) => {
  const [currentImage, setCurrentImage] = useState(preview);
  const [loading, setLoading] = useState(true);

  const fetchImage = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setTimeout(() => {
        setCurrentImage(loadingImage.src);
        setLoading(false);
      }, 200);
    };
  };

  useEffect(() => {
    fetchImage(image);
  }, [preview]);

  return (
    <img
      alt={alt}
      style={{
        filter: `${loading ? 'blur(10px)' : ''}`,
        transition: '1s filter linear',
        background: '#B2CCA2',
        height: '775px',
        width: '1515px',
        maxWidth: '100%',
        height: 'auto',
      }}
      src={currentImage}
      onClick={() => callBack()}
    />
  );
};

export default ProgressiveClickImage;
