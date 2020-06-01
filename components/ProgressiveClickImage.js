import React, { useEffect, useState } from 'react';

const ProgressiveClickImage = ({ preview, image, callBack, alt }) => {
  const [currentImage, setCurrentImage] = useState(preview);
  const [loading, setLoading] = useState(true);

  const fetchImage = (src) => {
    setCurrentImage(preview);
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
      style={{ filter: `${loading ? 'blur(10px)' : ''}`, transition: '1s filter linear' }}
      src={currentImage}
      onClick={() => callBack()}
    />
  );
};

export default ProgressiveClickImage;
