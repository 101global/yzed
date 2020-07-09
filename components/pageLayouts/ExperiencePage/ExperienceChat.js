import React, { useContext, useEffect, useState } from 'react';
import ScrollToBottom, { useScrollToBottom } from 'react-scroll-to-bottom';

import { css } from 'glamor';
import sendIcon from '../../../public/icons/send-icon.svg';
import userIcon from '../../../public/icons/account-icon.svg';

const messages = [
  {
    user: {
      userName: 'Theran',
      avatar:
        'https://www.pikpng.com/pngl/m/80-805523_default-avatar-svg-png-icon-free-download-264157.png',
    },
    content: 'Commodi possimus ad cumque quasi animi quaerat reprehenderit officia.',
  },
  {
    user: {
      userName: 'Theran',
      avatar:
        'https://www.pikpng.com/pngl/m/80-805523_default-avatar-svg-png-icon-free-download-264157.png',
    },
    content: 'Commodi possimus ad cumque quasi animi quaerat reprehenderit officia.',
  },
  {
    user: {
      userName: 'Theran',
      avatar:
        'https://www.pikpng.com/pngl/m/80-805523_default-avatar-svg-png-icon-free-download-264157.png',
    },
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, iusto voluptatibus quibusdam earum tempora ex maxime laborum dolorum natus porro quaerat aspernatur, impedit expedita sed rem quisquam, culpa eveniet ad eius. Commodi possimus ad cumque quasi animi quaerat reprehenderit officia.',
  },
  {
    user: {
      userName: 'Theran',
      avatar:
        'https://www.pikpng.com/pngl/m/80-805523_default-avatar-svg-png-icon-free-download-264157.png',
    },
    content:
      'Quidem, iusto voluptatibus quibusdam earum tempora ex maxime laborum dolorum natus porro quaerat aspernatur.',
  },
  {
    user: {
      userName: 'Theran',
      avatar:
        'https://www.pikpng.com/pngl/m/80-805523_default-avatar-svg-png-icon-free-download-264157.png',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    user: {
      userName: 'Theran',
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
      <form>
        <input />
        <button>
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
      `}</style>
    </>
  );
};

export default ExperienceChat;
