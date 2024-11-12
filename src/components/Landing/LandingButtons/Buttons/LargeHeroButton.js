import React from 'react';
import classNames from 'classnames';

const LargeHeroButton = ({ children, onClick, color = 'accent', size = 'large', className }) => {
  const colorClasses = {
    primary: 'bg-primary text-neutral-light border-primary hover:bg-primary-dark',
    accent: 'bg-accent-orange text-white border-accent-orange hover:bg-accent-yellow',
    neutral: 'bg-neutral-dark text-neutral-light border-neutral-dark hover:bg-primary',
  };

  const sizeClasses = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={classNames(
        'font-bold rounded-full border-2 transition-colors duration-300 relative glow-border',
        colorClasses[color],
        sizeClasses[size],
        className
      )}
    >
      {children}
      <span className="absolute inset-0 w-full h-full border-4 border-accent-orange rounded-full animate-glow pointer-events-none"></span>
    </button>
  );
};

export default LargeHeroButton;
