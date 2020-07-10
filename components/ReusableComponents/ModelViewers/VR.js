import { Entity, Scene } from 'aframe-react';
import React, { useEffect, useRef, useState } from 'react';

import Head from 'next/head';

const VRComponent = () => {
  const [appRendered, setAppRendered] = useState(false);
  const [color, setColor] = useState('#FF6B6B');
  const [currentModel, setCurrentModel] = useState(true);

  const models = [
    'https://oneoone-resource.s3-ap-northeast-2.amazonaws.com/yzed/4HFEV85uvEl.gltf',
    'https://oneoone-resource.s3-ap-northeast-2.amazonaws.com/yzed/bvQP164cIw.gltf',
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('aframe');
      require('aframe-particle-system-component');
      require('aframe-extras');
      setAppRendered(true);
    }
  }, []);

  const changeColor = () => {
    const colors = ['#FF6B6B', '#fdbb2d', '#F3F9A7', '#40E0D0', '#ACB6E5', '#0082c8'];
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <>
      <Head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>YZED VR Test</title>
      </Head>

      {appRendered && (
        <div style={{ position: 'absolute', height: '100%', width: '100%' }}>
          <a-scene>
            <a-assets>
              <img
                id='groundTexture'
                src='https://cdn.aframe.io/a-painter/images/floor.jpg'
                crossOrigin='anonymous'
              />
              <img
                id='skyTexture'
                src='https://cdn.aframe.io/a-painter/images/sky.jpg'
                crossOrigin='anonymous'
              />
            </a-assets>
            <a-text position='-1 2 -1.5' value='Welcome to YZED VR' color='#ff424f'></a-text>
            <a-entity
              opacity={0}
              gltf-model='url(https://oneoone-resource.s3-ap-northeast-2.amazonaws.com/yzed/4HFEV85uvEl.gltf)'
              position={currentModel ? '0 0 -2.5' : '0 0 -100'}
              animation-mixer='clip: *'
              onClick={() => setCurrentModel(!currentModel)}></a-entity>
            <a-entity
              id='model'
              gltf-model={`url(${models[1]})`}
              position={!currentModel ? '0 0 -2.5' : '0 0 -100'}
              animation-mixer='clip: *'
              onClick={() => setCurrentModel(!currentModel)}></a-entity>
            <a-sky
              src='#skyTexture'
              height='2048'
              radius='30'
              src='#skyTexture'
              theta-length='90'
              width='2048'></a-sky>
            <a-plane rotation='-90 0 0' width='100' height='100' src='#groundTexture'></a-plane>
            <a-light type='ambient' color='#fff'></a-light>
            <a-entity color='#8498b2' intensity='2' position='-5 5 8'></a-entity>
            <a-light type='point' intensity='3' position='2 4 4'></a-light>
            <a-camera>
              <a-cursor
                id='cursor'
                animation__click='property: scale; from: 0.1 0.1 0.1; to: 1 1 1; easing: easeInCubic; dur: 150; startEvents: click'
                animation__clickreset='property: scale; to: 0.1 0.1 0.1; dur: 1; startEvents: animationcomplete__click'
                animation__fusing='property: scale; from: 1 1 1; to: 0.1 0.1 0.1; easing: easeInCubic; dur: 150; startEvents: fusing'></a-cursor>
            </a-camera>
          </a-scene>
        </div>
      )}
      <style jsx global>
        {``}
      </style>
    </>
  );
};

export default VRComponent;
