import React from 'react';

type ResponseProps = {
  from: { name: string };
  time: string;
  message?: string;
};

export const Response: React.FC<ResponseProps> = ({ from, time, message }) => {
  return (
    <li className='clearfix'>
      <div className='message-data align-right'>
        <span className='message-data-time'>{time}</span> &nbsp; &nbsp;
        <span className='message-data-name'>{from.name}</span>&nbsp; &nbsp;<i className='fa fa-circle me'></i>
      </div>
      {message && <div className='message other-message float-right'>{message}</div>}
    </li>
  );
};
