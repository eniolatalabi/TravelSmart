import React from 'react';
import classNames from 'classnames';

const LargeHeroButton = ({ children, onClick, color = 'primary', size = 'large', className }) => {
  const colorClasses = {
    primary: 'bg-primary text-neutral-light border-primary hover:bg-primary-dark',
    accent: 'bg-accent-yellow text-neutral-dark border-accent-yellow hover:bg-accent-orange',
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
        'font-bold rounded-md border-2 transition-colors duration-300',
        colorClasses[color],
        sizeClasses[size],
        'glow-border',
        className
      )}
    >
      {children}
    </button>
  );
};

export default LargeHeroButton;
