import { FullPage, Slide } from 'react-full-page';

import PropTypes from 'prop-types';
import React from 'react';

class CustomControls extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    getCurrentSlideIndex: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    scrollToSlide: PropTypes.func.isRequired,
    slidesCount: PropTypes.number.isRequired,
    style: PropTypes.object,
  };

  static defaultProps = {
    className: 'full-page-controls',
    style: {
      left: '50%',
      paddingTop: '10px',
      position: 'fixed',
      transform: 'translateX(-50%)',
    },
  };

  renderSlidesNumbers(currentSlideIndex) {
    const slides = ['Model', 'About', 'Process', 'Our Story'];
    const { slidesCount, scrollToSlide } = this.props;
    const slidesNumbers = [];
    for (let i = 0; i < slides.length; i++) {
      console.log(i);
      const buttonProps = {
        // disabled: currentSlideIndex === i,
        key: i,
        onClick: () => scrollToSlide(i),
        className: currentSlideIndex === i ? 'active button' : 'button',
      };
      slidesNumbers.push(
        <button type='button' {...buttonProps}>
          {slides[i]}
        </button>
      );
    }
    return slidesNumbers;
  }

  render() {
    const { getCurrentSlideIndex, slidesCount, style, className } = this.props;
    const currentSlideIndex = getCurrentSlideIndex();

    return (
      <>
        <div className={className} style={style}>
          {this.renderSlidesNumbers(currentSlideIndex)}
        </div>
        <style jsx global>
          {`
            .active {
              color: red;
            }
          `}
        </style>
      </>
    );
  }
}

export default function FullPageExampleCustomControls() {
  const baseStyle = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  };
  return (
    <FullPage controls={CustomControls} duration={1500}>
      <Slide
        style={{
          ...baseStyle,
          background: '#2ECC40',
        }}>
        <h1>Custom Controls</h1>
      </Slide>
      <Slide
        style={{
          ...baseStyle,
          background: '#0074D9',
        }}>
        <h1>2</h1>
      </Slide>
      <Slide
        style={{
          ...baseStyle,
          background: '#00c4ff',
        }}>
        <h1>3</h1>
      </Slide>
      <Slide
        style={{
          ...baseStyle,
          background: '#d52685',
        }}>
        <h1>4</h1>
      </Slide>
    </FullPage>
  );
}
