import React from 'react';

import './index.scss';

type TypingProps = {
  from: { name: string };
  time: string;
};

export const Typing: React.FC<TypingProps> = ({ from, time }) => {
  return (
    <li>
      <div className='message-data'>
        <span className='message-data-name'>
          <i className='fa fa-circle online'></i> {from.name}
        </span>
        <span className='message-data-time'>{time}</span>
      </div>
      <svg version='1.1' id='L4' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 100 20' enableBackground='new 0 0 0 0'>
        <circle fill='#86bb71' stroke='none' cx='6' cy='10' r='6'>
          <animate attributeName='opacity' dur='1s' values='0;1;0' repeatCount='indefinite' begin='0.1' />
        </circle>
        <circle fill='#86bb71' stroke='none' cx='26' cy='10' r='6'>
          <animate attributeName='opacity' dur='1s' values='0;1;0' repeatCount='indefinite' begin='0.2' />
        </circle>
        <circle fill='#86bb71' stroke='none' cx='46' cy='10' r='6'>
          <animate attributeName='opacity' dur='1s' values='0;1;0' repeatCount='indefinite' begin='0.3' />
        </circle>
      </svg>
    </li>
  );
};
