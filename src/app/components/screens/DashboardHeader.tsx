import React from 'react';
export const DashboardHeader = () => {
    return (
      <header className="flex flex-wrap gap-5 justify-between px-16 py-5 w-full bg-black border border-solid border-white border-opacity-50 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2.5 justify-center self-start py-2.5 pr-2.5 pl-7 text-base tracking-tight text-black rounded-xl bg-zinc-500 shadow-[0px_2px_4px_rgba(0,0,0,0.25)] max-md:pl-5">
          <image
            src="/image/tabler_search.png" alt="tabler_search icon"
            className="object-contain shrink-0 my-auto w-6 aspect-square"
          />
          <p className="flex-1 shrink basis-0">Search</p>
        </div>
  
        <nav className="flex gap-8 items-center">
          <image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9782bcf9e9b746215a9b3385270269c97a117f58?placeholderIfAbsent=true"
            alt="Navigation icon"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[38px]"
          />
          <div className="flex gap-10 items-center self-stretch my-auto">
            <image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3b612c45db03c7340af19787c7618905f32a76a?placeholderIfAbsent=true"
              alt="Notification icon"
              className="object-contain shrink-0 self-stretch my-auto aspect-[0.79] w-[19px]"
            />
            <image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec70b5e2c9f45e4ef135997736915bac1d50ff93?placeholderIfAbsent=true"
              alt="Profile"
              className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
            />
          </div>
        </nav>
      </header>
    );
  };