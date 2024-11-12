import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';

const SignUpSuccessAlert = ({ message }) => {
  return (
    <div className="bg-primary text-neutral-light p-2 rounded-md flex items-center text-xs">
      <CheckCircleIcon className="w-4 h-4 text-primary-light mr-2" />
      <p>{message}</p>
    </div>
  );
};

export default SignUpSuccessAlert;
