import { MonitoringCard } from './MonitoringCard';
import { BluetoothPanel } from './BluetoothPanel';
import { AlertSystem } from './AlertSystem';
import React from 'react';

export const MonitoringSection = () => {
  return (
    <main className="ml-5 w-[83%] max-md:ml-0 max-md:w-full">
      <div className="mt-28 w-full max-md:mt-10 max-md:max-w-full">
        <div className="ml-4 w-full max-w-[1070px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-6/12 max-md:ml-0 max-md:w-full">
              <div className="pb-6 mt-48 rounded-full max-md:mt-10 max-md:mr-0 max-md:max-w-full">
                <div className="pb-9 rounded-full bg-neutral-900 max-md:max-w-full">
                  <image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/55e3657ac97e1d2adb4fdc343e80de6286af404f?placeholderIfAbsent=true"
                    alt="Dashboard visualization"
                    className="object-contain z-10 mt-0 w-full rounded-none aspect-[2.23] max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
            <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e060a866ab032d214be85e40e05ab763ce3d2e0c?placeholderIfAbsent=true"
                alt="Dashboard chart"
                className="object-contain grow w-full rounded-none aspect-[1.37] max-md:max-w-full"
              />
            </div>
          </div>
        </div>

        <section className="overflow-hidden px-14 pt-2 pb-11 mt-6 rounded-3xl border-2 border-solid border-orange-500 border-opacity-10 max-md:pl-5 max-md:max-w-full">
          <div className="flex flex-col justify-center w-full max-md:max-w-full">
            <h2 className="flex-1 shrink gap-2.5 self-center p-2.5 max-w-full text-2xl font-bold tracking-tighter text-white basis-0 w-[250px]">
              Real Time <span className="text-[#FF7429]">Monitoring</span>
            </h2>

            <div className="flex flex-col pt-6 pr-5 mt-3.5 w-full max-md:max-w-full">
              <div className="grid grid-cols-2 gap-5">
                <MonitoringCard
                  title="Battery Energy"
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/deae4454be8240b0dea7640a2a47b35ee4a4450b?placeholderIfAbsent=true"
                  value="102"
                  unit="kWh"
                  variant="primary"
                />
                <MonitoringCard
                  title="Fuel Level"
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/241339a5b81a9d87f9d0e0f4a9befaa8790541d3?placeholderIfAbsent=true"
                  value="103"
                  unit="L/km"
                  variant="secondary"
                />
                <MonitoringCard
                  title="Brake System"
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a81328bf839d8c8b5fdf6123a7196b302dc3d747?placeholderIfAbsent=true"
                  value="111"
                  unit="PSI"
                  variant="secondary"
                />
                <MonitoringCard
                  title="Tire Pressure"
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a81328bf839d8c8b5fdf6123a7196b302dc3d747?placeholderIfAbsent=true"
                  value="111"
                  unit="PSI"
                  variant="tertiary"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-2 mr-5 grid grid-cols-3 gap-5 max-md:mr-2.5 max-md:max-w-full">
          <div className="col-span-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5a8ec367bc989c6495eb5b9f91e8c19d40e7109?placeholderIfAbsent=true"
              alt="Check list background"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <BluetoothPanel />
          <AlertSystem />
        </div>
      </div>
    </main>
  );
};