import React from 'react';
export const BluetoothPanel = () => {
    return (
      <section className="flex overflow-hidden flex-col pt-3 pb-14 mx-auto w-full text-white rounded-2xl bg-black bg-opacity-20 max-md:mt-6">
        <h2 className="gap-2.5 self-start p-2.5 text-2xl font-medium tracking-tighter">
          Bluetooth Panel
        </h2>
  
        <div className="flex flex-col pl-2.5 mt-4 w-full text-sm tracking-tight">
          <div className="flex flex-wrap gap-5 items-start w-full whitespace-nowrap max-md:mr-2.5">
            <p className="gap-2.5 self-stretch p-2.5">Status:</p>
            <div className="flex items-center font-medium">
              <div className="flex shrink-0 self-stretch my-auto bg-red-600 rounded-full h-[18px] w-[18px]" />
              <p className="gap-2.5 self-stretch p-2.5 my-auto">Disconnected</p>
            </div>
            <p className="grow shrink gap-2.5 self-stretch p-2.5 w-[76px]">Device:</p>
            <p className="gap-2.5 self-stretch p-2.5 font-medium">None</p>
          </div>
  
          <button className="flex justify-center items-center self-center p-2.5 mt-6 max-w-full font-medium bg-blue-500 rounded-xl min-h-11 w-[165px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/490345f8af8ab367a9cd27d40d62a034f719beaa?placeholderIfAbsent=true"
              alt="Connect icon"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <span className="self-stretch my-auto">Connect to car</span>
          </button>
  
          <div className="flex gap-3.5 items-center mt-3 text-xs font-bold tracking-tight min-h-6 max-md:ml-1.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4447c5894477612fedcc6160277720426c925be8?placeholderIfAbsent=true"
              alt="Tip icon"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <p className="self-stretch my-auto w-52">
              Tip: Make sure car is powered on
            </p>
          </div>
        </div>
      </section>
    );
  };