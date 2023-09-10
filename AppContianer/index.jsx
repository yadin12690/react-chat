import React from 'react';
import '../style.scss';
import Controls from './components/Controls';
import Chat from './components/Chat';

export default function AppContainer() {
  return (
    <div>
      <Chat />
      <Controls />
    </div>
  );
}
