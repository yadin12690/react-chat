import React, { useState, useEffect } from 'react';
import '../style.scss';

export default function Controls() {
  const [userMessage, setUserMesseage] = useState('');
  const [typingUser, setTypingUser] = useState();

  const handleSendMessage = () => {
    if (
      typeof window.Chat === 'object' &&
      typeof window.Chat.sendMessage === 'function'
    ) {
      // callback function
      window.Chat.sendMessage(userMessage);
    }
  };

  const handleTypingMessage = (user) => {
    setTypingUser(user);
  };

  useEffect(() => {
    // Check if the window.Chat.onMessage function is available
    if (
      typeof window.Chat === 'object' &&
      typeof window.Chat.onTyping === 'function'
    ) {
      // callback function
      window.Chat.onTyping(handleTypingMessage);

      return () => {
        window.Chat.onTyping(null); // Unregister the callback
      };
    }
  }, []);

  return (
    <div className="controls">
      {typingUser && (
        <span classNmae="typingElement">{typingUser} is typing...</span>
      )}
      <div>
        <input
          placeholder="Say something"
          value={userMessage}
          onChange={(e) => setUserMesseage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}
