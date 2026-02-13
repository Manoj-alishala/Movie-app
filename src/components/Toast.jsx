import React from 'react';

export default function Toast({ show, message, type = 'success', position = 'bottom-right' }) {
  if (!show) return null;

  const posClass = `toast--pos-${position.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '')}`;

  return (
    <div className={`toast toast--${type} ${posClass}`} role="status" aria-live="polite">
      <div className="toast-content">
        <span className="toast-icon">{type === 'success' ? '✓' : '!'}</span>
        <div className="toast-message">{message}</div>
      </div>
    </div>
  );
}
