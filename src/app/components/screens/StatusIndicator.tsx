import { StatusIndicatorProps } from './types';
import React from 'react';

const statusColors = {
  normal: 'bg-yellow-400',
  warning: 'bg-yellow-400',
  critical: 'bg-red-600 bg-opacity-90',
  off: 'bg-zinc-500',
  ok: 'bg-green-600'
};

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status, size = 'sm' }) => {
  const sizeClasses = {
    sm: 'h-[18px] w-[18px]',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };

  return (
    <output>
      className={`flex rounded-full ${statusColors[status]} ${sizeClasses[size]} min-h-[18px]`}
      role= status,
      aria-label={`Status: ${status}`}
      </output>
  );
};