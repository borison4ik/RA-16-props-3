import React from 'react';

import { MessageHistory } from './components/MessageHistory';

import { messages } from './data';
import './App.scss';

function App() {
  return (
    <div className='clearfix container'>
      <div className='chat'>
        <div className='chat-history'>
          <MessageHistory list={messages} />
        </div>
      </div>
    </div>
  );
}

export default App;
