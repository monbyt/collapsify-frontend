'use client';
import React from 'react';
import Image from 'next/image';

// Mock data for the features. In a real application, this might come from a CMS or API.
const features = [
  {
    id: 1,
    title: 'Unified Marketing Ecosystem',
    description: 'Integrate effortlessly with our Unified Marketing Ecosystem. Connect your favorite tools and platforms with ease, thanks to our extensive library of API integrations. ',
    image: 'https://d37oebn0w9ir6a.cloudfront.net/account_6827/tag-feature-predictive-customer-analytics_47800d2b68288c76bd20d9926742984d.gif',
    textRight: false,
  },
  {
    id: 2,
    title: 'Automated Campaign Optimization Feature',
    description: 'Effortlessly boost your marketing success with smart, self-adjusting strategies that ensure your campaigns always hit the mark',
    image: 'https://d37oebn0w9ir6a.cloudfront.net/account_6827/tag-feature-predictive-customer-analytics_47800d2b68288c76bd20d9926742984d.gif',
    textRight: true,
  },
  {
    id: 3,
    title: 'Real-Time ROI Analysis',
    description: ' Instantly track and maximize your investment impact, making every decision data-driven and results-oriented for greater business success',
    image: 'https://d37oebn0w9ir6a.cloudfront.net/account_6827/tag-feature-predictive-customer-analytics_47800d2b68288c76bd20d9926742984d.gif',
    textRight: false,
  },
];

const FeatureSection = () => {
  const radialGradientStyle = {
    background: 'radial-gradient(circle at center, #0E2247 0%, #00071400 40%)'
  }
  return (
    <div className="w-full px-20">
      {features.map((feature) => (
        <div 
          key={feature.id} 
          className="flex flex-col md:flex-row items-center justify-center min-h-screen"
          
        >
          <div  className={`md:w-1/3 p-6 ${feature.textRight ? 'md:order-2' : ''}`}>
            <h2 className="text-3xl font-bold text-white">{feature.title}</h2>
            <p className="mt-4 text-lg text-white">{feature.description}</p>
          </div>
          <div className="md:w-1/2 flex justify-center p-6" >
            {/* Image */}
            <Image  src={feature.image} alt={feature.title} className="max-w-full h-auto" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
