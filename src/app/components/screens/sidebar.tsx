import React from 'react';
export const Sidebar = () => {
    return (
      <nav className="flex flex-col items-start pt-6 pb-14 pl-7 mx-auto w-full bg-black border border-solid border-white border-opacity-50 max-md:mt-7">
        <div className="flex gap-5 items-center text-2xl font-bold tracking-tighter text-white">
           <image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f99768ebbc90504a1b4d14a83b7ee28fa04141c6?placeholderIfAbsent=true"
            alt="Car Health Logo"
            className="object-contain shrink-0 self-stretch my-auto w-10 aspect-[0.98]"
          />
          <h1 className="self-stretch my-auto w-[156px]">
            Car<span className="text-[#FF7429]">Health</span>
          </h1>
        </div>
  
        <div className="mt-20 ml-3 max-w-full w-[179px] max-md:mt-10 max-md:ml-2.5">
          <button className="flex flex-col justify-center items-start px-2 py-2 w-full text-sm font-medium text-white whitespace-nowrap rounded-md bg-slate-800">
            <span className="flex gap-2 items-center">
              <image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a6a75e493602215ca3d74e28557766ceb56fc11?placeholderIfAbsent=true"
                alt="Dashboard icon"
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              />
              <span className="self-stretch my-auto text-white">Dashboard</span>
            </span>
          </button>
  
          <div className="flex items-center mt-3.5 w-full">
            <div className="flex flex-col items-center self-stretch my-auto w-7 min-h-[252px]">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/95dea1678e81e44fe225d0ccf88dec82c1d78620?placeholderIfAbsent=true" alt="Monitor icon" className="object-contain w-6 aspect-square" />
              <image src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4463d2ae70d9102990e7fa98a4d3852ee0fea54?placeholderIfAbsent=true" alt="Battery icon" className="object-contain mt-6 w-full aspect-[1.56]" />
              <image src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1d4a5f87ab4bbf58a2c06f4d5d5155e2f01241a?placeholderIfAbsent=true" alt="Fuel icon" className="object-contain mt-6 aspect-square w-[18px]" />
              <image src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a477d4361eac96567d07bd18cc45a80704f5bcd?placeholderIfAbsent=true" alt="Check icon" className="object-contain mt-6 w-6 aspect-square" />
              <image src="https://cdn.builder.io/api/v1/image/assets/TEMP/052a16a0587a63369aa2b8baddac157e6486b753?placeholderIfAbsent=true" alt="Bluetooth icon" className="object-contain mt-6 w-full aspect-square" />
            </div>
  
            <nav className="flex flex-col items-start self-stretch my-auto text-sm font-medium tracking-tight text-gray-500 w-[138px]">
              <button className="gap-2.5 self-stretch p-2.5 w-full text-left hover:bg-slate-800 hover:text-white rounded-md transition-colors">
                Real Time Monitoring
              </button>
              <button className="gap-2.5 self-stretch p-2.5 mt-2.5 text-left hover:bg-slate-800 hover:text-white rounded-md transition-colors">
                Battery Energy
              </button>
              <button className="gap-2.5 self-stretch p-2.5 mt-2.5 text-left hover:bg-slate-800 hover:text-white rounded-md transition-colors">
                Fuel Level
              </button>
              <button className="gap-2.5 self-stretch p-2.5 mt-2.5 text-left hover:bg-slate-800 hover:text-white rounded-md transition-colors">
                Pre-Drive Check
              </button>
              <button className="gap-2.5 self-stretch p-2.5 mt-2.5 text-left hover:bg-slate-800 hover:text-white rounded-md transition-colors">
                Bluetooth Panel
              </button>
              <button className="gap-2.5 self-stretch p-2.5 mt-2.5 text-left hover:bg-slate-800 hover:text-white rounded-md transition-colors">
                Alert System
              </button>
            </nav>
          </div>
        </div>
  
        <div className="self-center max-w-full text-sm font-medium mt-[672px] text-zinc-600 w-[174px] max-md:mt-10">
          <button className="flex gap-2 items-center w-full whitespace-nowrap hover:bg-slate-800 hover:text-white rounded-md transition-colors">
            <div className="flex flex-col justify-center items-start self-stretch px-2 py-2 my-auto rounded-md w-[174px]">
              <span className="flex gap-2 items-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e12a01a5d6a0b3622a29b86f11b523b6852c5299?placeholderIfAbsent=true"
                  alt="Settings icon"
                  className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                />
                <span className="self-stretch my-auto">Settings</span>
              </span>
            </div>
          </button>
  
          <button className="flex gap-2 items-center mt-6 w-full hover:bg-slate-800 hover:text-white rounded-md transition-colors">
            <div className="flex flex-col justify-center items-start self-stretch px-2 py-2 my-auto rounded-md w-[174px]">
              <span className="flex gap-2 items-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7980646dbae21beaa62f7da94ecb7f3173ec7f5a?placeholderIfAbsent=true"
                  alt="Logout icon"
                  className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                />
                <span className="self-stretch my-auto">Log out</span>
              </span>
            </div>
          </button>
        </div>
      </nav>
    );
  };