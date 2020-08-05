import ProgressiveImage from './ProgressiveImage';
import React from 'react';
import { imagesNames } from '../../../utilities/dataHelpers';
import theme from '../../../utilities/theme';
import { useKeenSlider } from 'keen-slider/react';

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
                  aria-label={`Image ${idx}`}
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
              className='fader__slide w-90per ml-5per absolute'
              style={{ opacity: opacities[idx] }}>
              <ProgressiveImage
                image={image.image}
                preview={image.thumbnail}
                styleClass='w-full'
                alt={image.id}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .fader__slide {
          top: 50%;
          left: 10%;
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
          background: ${theme.colors.mediumGrey};
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
        @media (max-width: 1024px) {
          .dot {
            width: 4px;
            height: 16px;
          }
          .dot.active {
            height: 34px;
          }
        }
      `}</style>
    </>
  );
};

export default Slider;
