import React from 'react';
import '../styles/Message.css';

export const AlertTypes = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
};

const Message = ({ type = AlertTypes.INFO, text = 'No message to display' }) => {
  return (
    <div className={`message ${type}`}>
      {text}
    </div>
  );
};

export default Message;