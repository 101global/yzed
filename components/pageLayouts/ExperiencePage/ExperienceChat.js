import React, { useContext, useEffect, useState } from 'react';
import userIcon from '../../../public/account-icon.svg';

const messages = [
  {
    user: {
      userName: 'Theran',
      avatar:
        'https://www.pikpng.com/pngl/m/80-805523_default-avatar-svg-png-icon-free-download-264157.png',
    },
    content: 'Hello',
  },
];
const ExperienceChat = () => {
  return (
    <>
      <div>
        {messages.map((message) => (
          <>
            <img src={userIcon} />
            <p>
              <strong>{message.user.userName}</strong>
              {message.content}
            </p>
          </>
        ))}
        <input />
      </div>
      <style jsx>{`

        img {
          height: 20px;
        }
        strong {
          margin-right: 10px;
        }
      `}</style>
    </>
  );
};

export default ExperienceChat;
