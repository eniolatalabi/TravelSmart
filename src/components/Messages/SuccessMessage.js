import React from 'react';

const SuccessMessage = ({ message }) => {
  return (
    <div className="bg-success text-neutral-light border border-success rounded p-4 shadow-lg">
      <div className="flex items-center">
        <svg className="w-6 h-6 text-neutral-light mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 16.172l-3.95-3.95 1.415-1.415L9 13.342l7.535-7.536 1.415 1.415L9 16.172z" />
        </svg>
        <span className="text-neutral-light">{message}</span>
      </div>
    </div>
  );
};

export default SuccessMessage;
