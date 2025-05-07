import React from 'react';
import { MonitoringCardProps } from './types';

export const MonitoringCard: React.FC<MonitoringCardProps> = ({
  title,
  icon,
  value,
  unit,
  variant = 'primary'
}) => {
  const variantClasses = {
    primary: 'bg-purple-500',
    secondary: 'bg-zinc-500 bg-opacity-60',
    tertiary: 'bg-zinc-500 bg-opacity-40'
  };

  return (
    <section className="flex flex-col pb-14 w-full">
      <div className={`flex gap-2.5 justify-center items-center px-16 text-xl font-medium tracking-tight text-white rounded-2xl border border-solid border-white border-opacity-50 min-h-[266px] ${variantClasses[variant]} max-md:px-5`}>
        <div className="flex flex-col items-center self-stretch my-auto">
          <div className="flex flex-col items-center">
            <img
              src={icon}
              alt={`${title} icon`}
              className="object-contain aspect-square w-[38px]"
            />
            <h3 className="mt-2.5 text-white">{title}</h3>
          </div>
          <img
            src={`URL_${value}`}
            alt={`${value} indicator`}
            className="object-contain mt-8 w-28 max-w-full aspect-square"
          />
        </div>
      </div>
      <p className="z-10 self-center mt-0 text-sm tracking-tight text-white">
        {unit}
      </p>
    </section>
  );
};