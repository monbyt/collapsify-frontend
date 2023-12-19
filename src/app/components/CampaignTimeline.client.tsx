'use client';
import React, { useState } from 'react';

// Define a type for the step details
type StepDetail = {
  title: string;
  image: string;
  description: string;
};

// Mock data for the steps
const stepsData: StepDetail[] = [
  {
    title: 'Customize feedback forms',
    image: 'https://d37oebn0w9ir6a.cloudfront.net/account_6827/tag-feature-predictive-customer-analytics_47800d2b68288c76bd20d9926742984d.gif',
    description: 'A detailed description for customizing feedback forms.',
  },
  {
    title: 'Capture with context',
    image: 'https://d37oebn0w9ir6a.cloudfront.net/account_6827/tag-feature-predictive-customer-analytics_47800d2b68288c76bd20d9926742984d.gif',
    description: 'Information on how to capture feedback with context.',
  },
  {
    title: 'Document rich user interviews',
    image: 'https://d37oebn0w9ir6a.cloudfront.net/account_6827/tag-feature-predictive-customer-analytics_47800d2b68288c76bd20d9926742984d.gif',
    description: 'Guidance on documenting rich user interviews.',
  },
];

const CampaignInterface: React.FC = () => {
  // State to track the active step, default to the first step
  const [activeStep, setActiveStep] = useState<StepDetail>(stepsData[0]);

  return (
    <div className="flex w-full items-center justify-center self-center px-10 min-h-screen">
      <div className="flex flex-col w-1/3 mr-10">
      <h2 className="text-3xl font-bold text-white">
        Why use Collapsify?
      </h2>
      <p className="mt-4 text-lg text-white mb-4 text-start">
        Discover how Collapsify simplifies your marketing efforts and boosts your business efficiency
      </p>
        {stepsData.map((step, index) => (
          <button
            key={index}
            className={`text-start mb-4 p-4 rounded-full bg-gray-900	 hover:bg-gray-800	 text-white h-1/3 ${activeStep.title === step.title ? 'bg-sky-700' : ''}`}
            onClick={() => setActiveStep(step)}
            
          >
            {step.title}
          </button>
        ))}
      </div>
      <div className="flex flex-col w-2/3  p-4">
        {activeStep && (
          <>
            <img src={activeStep.image} alt={activeStep.title} className="w-full h-auto" />
            <h3 className="text-xl font-bold text-white mt-4">{activeStep.title}</h3>
            <p className="text-white">{activeStep.description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CampaignInterface;
