"use client";

import React from 'react';
import { DashboardHeader } from './DashboardHeader';
import { MonitoringSection } from './MonitoringSection';

export const Dashboard = () => {
  return (
    <div className="overflow-hidden bg-black bg-opacity-90">
      <DashboardHeader />
      <div className="z-10 mt-0 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[17%] max-md:ml-0 max-md:w-full">
            <Sidebar />
          </div>
          <MonitoringSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;