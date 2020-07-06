import { Entity, Scene } from 'aframe-react';
import React, { useEffect, useState } from 'react';

import Head from 'next/head';

const VRComponent = () => {
  const [appRendered, setAppRendered] = useState(false);
  const [color, setColor] = useState('#FF6B6B');
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
        <a-scene>
          <a-assets>
            <img id='groundTexture' src='https://cdn.aframe.io/a-painter/images/floor.jpg' />
            <img id='skyTexture' src='https://cdn.aframe.io/a-painter/images/sky.jpg' />{' '}
            <video
              id='walking-video'
              src='https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/HQ_video_main_2_LOWER.mp4'
              color='#fff'></video>
            <a-asset-item
              id='animatedModel'
              src='https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/FORTHERAN_JULY6.gltf'></a-asset-item>
          </a-assets>
          <a-entity
            gltf-model='url(https://oneoone-resource.s3-ap-northeast-2.amazonaws.com/yzed/bvQP164cIw.gltf)'
            scale='1 1 1'
            position='0 0 -2.5'></a-entity>
          <a-entity
            gltf-model='url(https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/FORTHERAN_JULY6.gltf)'
            scale='1 1 1'
            position='-2.5 0 0'
            animation-mixer='clip: *; repetitions: 3'
            rotation='0 90 0'></a-entity>
          <a-entity
            gltf-model='url(https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/FORTHERAN_JULY6.gltf)'
            scale='1 1 1'
            position='0 0 2.5'
            animation-mixer='clip: *'
            rotation='0 180 0'></a-entity>
          <a-entity
            gltf-model='url(https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/cube_version14.glb)'
            scale='0.1 0.1 0.1'
            position='2 2 0'
            animation-mixer='clip: *'
            rotation='0 180 0'></a-entity>
          <a-sky
            src='#skyTexture'
            height='2048'
            radius='30'
            src='#skyTexture'
            theta-length='90'
            width='2048'></a-sky>
          <a-plane rotation='-90 0 0' width='100' height='100' src='#groundTexture'></a-plane>
          <a-light type='ambient' color='#fff'></a-light>
          <a-entity color='#8498b2' instensity='2' position='-5 5 8'></a-entity>
          <a-light type='point' intensity='3' position='2 4 4'></a-light>
          <a-camera>
            <a-cursor
              id='cursor'
              animation__click='property: scale; from: 0.1 0.1 0.1; to: 1 1 1; easing: easeInCubic; dur: 150; startEvents: click'
              animation__clickreset='property: scale; to: 0.1 0.1 0.1; dur: 1; startEvents: animationcomplete__click'
              animation__fusing='property: scale; from: 1 1 1; to: 0.1 0.1 0.1; easing: easeInCubic; dur: 150; startEvents: fusing'></a-cursor>
          </a-camera>
          <button>ENTER VR</button>
        </a-scene>
      )}
    </>
  );
};

export default VRComponent;
