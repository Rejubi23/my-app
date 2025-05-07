import { AlertItemProps } from './types';
import { StatusIndicator } from './StatusIndicator';
import React from 'react';


const alertItems: AlertItemProps[] = [
  { system: "Seatbelt", status: "OK", indicator: "ok" },
  { system: "Fuel Level", status: "Critical", indicator: "critical" },
  { system: "Brake system", status: "Normal", indicator: "normal" },
  { system: "Doors closed", status: "OK", indicator: "ok" },
  { system: "Lighting System", status: "OFF", indicator: "off" },
  { system: "Tire Pressure", status: "Warning", indicator: "warning" },
  { system: "Battery", status: "Normal", indicator: "normal" }
];

export const AlertSystem = () => {
  return (
    <section className="overflow-hidden pt-3 pb-16 mx-auto w-full rounded-2xl bg-black bg-opacity-20 max-md:mt-6">
      <div className="flex gap-5 justify-between max-w-full text-2xl font-medium tracking-tighter text-white w-[237px]">
        <h2 className="gap-2.5 p-2.5">
          <span className="text-white">Alert </span>
          <span className="text-[#FF7429]">System</span>
        </h2>
        <image
          src="c:\Users\LENOVO\my-app\image"
          />
      </div>

      <div className="px-6 mt-3 w-full max-md:px-5">
        <div className="flex gap-5 justify-between max-w-full text-sm font-bold tracking-tight whitespace-nowrap w-[145px]">
          <h3 className="text-white">System</h3>
          <h3 className="text-orange-500">Status</h3>
        </div>

        <div className="flex gap-5 justify-between items-start mt-2">
          <div className="flex gap-5 mt-2 text-sm font-medium tracking-tight text-white">
            <div>
              {alertItems.map((item, index) => (
                <p key={item.system} className={index > 0 ? "mt-2" : ""}>
                  {item.system}
                </p>
              ))}
            </div>
            <div className="whitespace-nowrap min-h-[167px]">
              {alertItems.map((item, index) => (
                <p key={item.system} className={index > 0 ? "mt-2" : ""}>
                  {item.status}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2">
            {alertItems.map((item,) => (
              <StatusIndicator key={item.system} status={item.indicator} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};