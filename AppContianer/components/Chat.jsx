import React, { useEffect } from 'react';
import '../style.scss';

export default function Chat() {
  const handleMessage = (message) => {
    console.log('Received a message:', message);
  };

  useEffect(() => {
    // Check if the window.Chat.onMessage function is available
    if (
      typeof window.Chat === 'object' &&
      typeof window.Chat.onMessage === 'function'
    ) {
      // callback function
      window.Chat.onMessage(handleMessage);

      return () => {
        window.Chat.onMessage(null); // Unregister the callback
      };
    }
  }, []);

  return (
    <div className="chat-con">
      <h1> Hello world!</h1>
      <h1> Hello world!</h1>
      <h1> Hello world!</h1>
      <h1> Hello world!</h1>
      <h1> Hello world!</h1>
      <h1> Hello world!</h1>
      <h1> Hello world!</h1>
      <h1> Hello world!</h1>
      <h1> Hello world!</h1>
      <h1> Hello world!</h1>
      <h1> Hello world!</h1>
      <h1> Hello world!</h1>
      <h1> Hello world!</h1>
      <h1> Hello world!</h1>
      <h1> Hello world!</h1>
      <h1> Hello world!</h1>
      <h1> Hello world!</h1>
      <h1> Hello world!</h1>
      <h1> Hello world!</h1>
      <h1> Hello world!</h1>
      <h1> Hello world!</h1>
      <h1> Hello world!</h1>
    </div>
  );
}
