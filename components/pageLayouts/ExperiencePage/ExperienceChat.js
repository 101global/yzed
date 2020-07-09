import React, { useContext, useEffect, useState } from 'react';
import ScrollToBottom, { useScrollToBottom } from 'react-scroll-to-bottom';

import { css } from 'glamor';
import sendIcon from '../../../public/icons/send-icon.svg';
import userIcon from '../../../public/icons/account-icon.svg';
import theme from '../../../utilities/theme';

const messages = [
  {
    user: {
      userName: 'User123',
      avatar:
        'https://www.pikpng.com/pngl/m/80-805523_default-avatar-svg-png-icon-free-download-264157.png',
    },
    content: 'Commodi possimus ad cumque quasi animi quaerat reprehenderit officia.',
  },
  {
    user: {
      userName: 'User123',
      avatar:
        'https://www.pikpng.com/pngl/m/80-805523_default-avatar-svg-png-icon-free-download-264157.png',
    },
    content: 'Commodi possimus ad cumque quasi animi quaerat reprehenderit officia.',
  },
  {
    user: {
      userName: 'User123',
      avatar:
        'https://www.pikpng.com/pngl/m/80-805523_default-avatar-svg-png-icon-free-download-264157.png',
    },
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, iusto voluptatibus quibusdam earum tempora ex maxime laborum dolorum natus porro quaerat aspernatur, impedit expedita sed rem quisquam, culpa eveniet ad eius. Commodi possimus ad cumque quasi animi quaerat reprehenderit officia.',
  },
  {
    user: {
      userName: 'User123',
      avatar:
        'https://www.pikpng.com/pngl/m/80-805523_default-avatar-svg-png-icon-free-download-264157.png',
    },
    content:
      'Quidem, iusto voluptatibus quibusdam earum tempora ex maxime laborum dolorum natus porro quaerat aspernatur.',
  },
  {
    user: {
      userName: 'User123',
      avatar:
        'https://www.pikpng.com/pngl/m/80-805523_default-avatar-svg-png-icon-free-download-264157.png',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    user: {
      userName: 'User123',
      avatar:
        'https://www.pikpng.com/pngl/m/80-805523_default-avatar-svg-png-icon-free-download-264157.png',
    },
    content:
      'Quidem, iusto voluptatibus quibusdam earum tempora ex maxime laborum dolorum natus porro quaerat aspernatur.',
  },
];

const ROOT_CSS = css({
  height: 350,
});

const ExperienceChat = () => {
  return (
    <>
      <div className='chat-container w-full overflow-y-scroll'>
        <ScrollToBottom className={ROOT_CSS}>
          {messages.map((message) => (
            <div className='grid grid-cols-chat gap-4 justify-start my-4 text-sm'>
              <img src={userIcon} />
              <p className='font-light text-left'>
                <strong className='font-semibold'>{message.user.userName}</strong>
                {message.content}
              </p>
            </div>
          ))}
        </ScrollToBottom>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className='w-full grid grid-cols-comment gap-4 justify-between items-center'>
        <input className='w-full' />
        <button type="submit">
          <img src={sendIcon} />
        </button>
      </form>
      <style jsx>{`
        img {
          height: 40px;
        }
        strong {
          margin-right: 10px;
        }
        .chat-container {
          height: 350px;
        }
        button {
          height: 40px;
          width: 40px;
          background: linear-gradient(253.24deg, #73cfdb 8.1%, #a891d9 95.07%);
          border-radius: 20px;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0px;
        }
        button img {
          height: 25px;
        }
        input {
          width: 100%;
          height: 40px;
          border-radius: 20px;
          box-shadow: none;
          background: ${theme.colors.black};
          border: 1px solid ${theme.colors.white};
          padding: 0px 10px;
          font-weight: 300;
        }
      `}</style>
    </>
  );
};

export default ExperienceChat;
