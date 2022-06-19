import React from 'react';

type MessageProps = {
  from: { name: string };
  time: string;
  message?: string;
};

export const Message: React.FC<MessageProps> = ({ from, time, message }) => {
  return (
    <li>
      <div className='message-data'>
        <span className='message-data-name'>
          <i className='fa fa-circle online'></i> {from.name}
        </span>
        <span className='message-data-time'>{time}</span>
      </div>
      <div className='message my-message'>{message}</div>
    </li>
  );
};
