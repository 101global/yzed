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
      setAppRendered(true);
    }
  }, []);

  const changeColor = () => {
    const colors = ['#FF6B6B', '#fdbb2d', '#F3F9A7', '#40E0D0', '#ACB6E5', '#0082c8'];
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>YZED VR Test</title>
      </Head>

      {appRendered && (
        <Scene>
          <a-assets>
            <img id='groundTexture' src='https://cdn.aframe.io/a-painter/images/floor.jpg' />
            <img id='skyTexture' src='https://cdn.aframe.io/a-painter/images/sky.jpg' />
          </a-assets>

          <Entity
            primitive='a-plane'
            src='#groundTexture'
            rotation='-90 0 0'
            height='100'
            width='100'
          />
          <Entity primitive='a-light' type='ambient' color='#445451' />
          <Entity primitive='a-light' type='point' intensity='2' position='2 4 4' />
          <Entity
            primitive='a-sky'
            height='2048'
            radius='30'
            src='#skyTexture'
            theta-length='90'
            width='2048'
          />
          <Entity particle-system={{ preset: 'snow', particleCount: 2000 }} />
          <Entity
            text={{ value: 'Hello YZED VR Test!', align: 'center' }}
            position={{ x: 0, y: 2, z: -1 }}
          />

          <Entity
            id='box'
            geometry={{ primitive: 'box' }}
            material={{ color, opacity: 0.6 }}
            animation__rotate={{
              property: 'rotation',
              dur: 20000,
              loop: true,
              to: '360 360 360',
            }}
            animation__scale={{
              property: 'scale',
              dir: 'alternate',
              dur: 10000,
              loop: true,
              to: '1.1 1.1 1.1',
            }}
            position={{ x: 0, y: 1, z: -3 }}
            events={{ click: changeColor }}>
            <Entity
              animation__scale={{
                property: 'scale',
                dir: 'alternate',
                dur: 10000,
                loop: true,
                to: '2 2 2',
              }}
              geometry={{ primitive: 'box', depth: 0.2, height: 0.2, width: 0.2 }}
              material={{ color: '#24CAFF' }}
            />
          </Entity>

          <Entity primitive='a-camera'>
            <Entity
              primitive='a-cursor'
              animation__click={{
                property: 'scale',
                startEvents: 'click',
                from: '0.1 0.1 0.1',
                to: '1 1 1',
                dur: 150,
              }}
            />
          </Entity>
        </Scene>
      )}
    </div>
  );
};

export default VRComponent;
