import React from 'react';
import { useKeenSlider } from 'keen-slider/react';

import { imagesNames } from '../../../utilities/dataHelpers';
import theme from '../../../utilities/theme';
import ProgressiveImage from './ProgressiveImage';

const Slider = ({ model }) => {
  const images = imagesNames(model.imageSlug);
  const [opacities, setOpacities] = React.useState([]);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [pause, setPause] = React.useState(false);
  const timer = React.useRef();
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    autoplay: true,
    slides: images.length,
    loop: true,
    duration: 3000,
    move(s) {
      const new_opacities = s.details().positions.map((slide) => slide.portion);
      setOpacities(new_opacities);
    },
  });

  React.useEffect(() => {
    sliderRef.current.addEventListener('mouseover', () => {
      setPause(true);
    });
    sliderRef.current.addEventListener('mouseout', () => {
      setPause(false);
    });
  }, [sliderRef]);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 5000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <>
      <div className='navigation-wrapper flex flex-row h-80vh lg:h-70vh items-center'>
        {slider && (
          <div className='dots'>
            {[...Array(slider.details().size).keys()].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(idx);
                  }}
                  className={'dot' + (currentSlide === idx ? ' active' : '')}
                />
              );
            })}
          </div>
        )}
        <div ref={sliderRef} className='fader w-full'>
          {images.map((image, idx) => (
            <div
              key={idx}
              className='fader__slide w-90per absolute'
              style={{ opacity: opacities[idx] }}>
              <ProgressiveImage image={image.image} preview={image.thumbnail} styleClass='w-full' />
            </div>
          ))}
        </div>
        {/* {slider && (
          <>
            <ArrowLeft
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />

            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )} */}
      </div>
      <style jsx global>{`
        .fader__slide {
          top: 50%;
          left: 5%;
          transform: translateY(-50%);
        }
        .navigation-wrapper {
          position: relative;
        }

        .dots {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-right: 10px;
        }

        .dot {
          border: none;
          width: 6px;
          height: 28px;
          background: #7c7c7c;
          border-radius: 3px;
          margin: 5px;

          cursor: pointer;
        }

        .dot:focus {
          outline: none;
        }
        .dot.active {
          height: 60px;
        }
        .dark-mode .dot.active {
          background: ${theme.colors.white};
        }
        .light-mode .dot.active {
          background: ${theme.colors.black};
        }

        .arrow {
          width: 30px;
          height: 30px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          -webkit-transform: translateY(-50%);
          fill: #fff;
          cursor: pointer;
        }

        .arrow--left {
          left: 5px;
        }

        .arrow--right {
          left: auto;
          right: 5px;
        }

        .arrow--disabled {
          fill: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </>
  );
};

function ArrowLeft(props) {
  const disabled = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={'arrow arrow--left' + disabled}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'>
      <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
    </svg>
  );
}

function ArrowRight(props) {
  const disabled = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={'arrow arrow--right' + disabled}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'>
      <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
    </svg>
  );
}

export default Slider;
