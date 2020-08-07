import React, { useEffect, useContext, useState } from 'react';
import { ThemeContext } from '../../../utilities/context/ThemeContext';
import theme from '../../../utilities/theme';
import Popover, { ArrowContainer } from 'react-tiny-popover';
const Tooltip = ({ message }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <Popover
        isOpen={isPopoverOpen}
        position={'left'} // preferred position
        content={({ position, targetRect, popoverRect }) => (
          <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
            position={position}
            targetRect={targetRect}
            popoverRect={popoverRect}
            arrowColor={darkMode ? theme.colors.white : theme.colors.black}
            arrowSize={10}
            arrowStyle={{ opacity: 0.95 }}>
            <div
              style={{
                opacity: 0.95,
                maxWidth: '200px',
              }}
              className='bg-black dark:bg-white text-white dark:text-black p-2 text-light'
              onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
              {message}
            </div>
          </ArrowContainer>
        )}>
        <div className='help-tip' onClick={() => setIsPopoverOpen(!isPopoverOpen)}></div>
      </Popover>
      <style jsx>{`
        .help-tip {
          position: absolute;
          top: 0px;
          right: 0px;
          text-align: center;
          background-color: ${theme.colors.mediumGrey};
          border-radius: 50%;
          width: 1rem;
          height: 1rem;
          font-size: 0.75rem;
          line-height: 1rem;
          cursor: default;
        }

        .help-tip:before {
          content: '?';
          font-weight: bold;
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default Tooltip;
