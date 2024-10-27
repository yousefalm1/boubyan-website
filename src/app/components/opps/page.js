"use client";
import React, { useState } from "react";

const AvailableOpportunities = () => {
  const [activeTab, setActiveTab] = useState("Design");
  const tabs = [
    "Design",
    "Software developments",
    "Product ownership",
    "Management",
  ];
  const jobs = [
    {
      title: "Lead UX UI design team",
      date: "12 Jan 2021",
      location: "Cairo",
      type: "Full Time, on Site",
    },
    {
      title: "Senior UX UI Designer",
      date: "12 Jan 2021",
      location: "Cairo",
      type: "Full Time, on Site",
    },
    {
      title: "UX Content writer",
      date: "12 Jan 2021",
      location: "Cairo",
      type: "Full Time, on Site",
    },
    {
      title: "UX Researcher",
      date: "12 Jan 2021",
      location: "Cairo",
      type: "Full Time, on Site",
    },
    {
      title: "UX UI Designer",
      date: "12 Jan 2021",
      location: "Cairo",
      type: "Full Time, on Site",
    },
  ];

  return (
    <div className="p-48">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Available opportunities
      </h1>

      {/* Tabs */}
      <div className="flex space-x-8 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-medium ${
              activeTab === tab
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {job.title}
              </h2>
              <p className="text-sm text-gray-500">
                {job.date} | {job.location}
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-500">{job.type}</span>
              <button className="text-red-600  hover:underline font-semibold">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableOpportunities;
