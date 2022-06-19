import React from 'react';

import { Response } from '../Response';
import { Message } from '../Message';
import { Typing } from '../Typing';

import './index.scss';

type ListItem = {
  id: string;
  from: { name: string };
  type: string;
  time: string;
  text?: string;
};

type MessageHistoryProps = {
  list: ListItem[];
};

export const MessageHistory: React.FC<MessageHistoryProps> = ({ list }) => {
  if (list.length <= 0) return null;

  return (
    <ul>
      {list.map((item) => {
        return item.type === 'response' ? <Response key={item.id} time={item.time} from={item.from} message={item.text} /> : item.type === 'message' ? <Message key={item.id} time={item.time} from={item.from} message={item.text} /> : <Typing key={item.id} time={item.time} from={item.from} />;
      })}
    </ul>
  );
};
