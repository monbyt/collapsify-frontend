import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faRobot, faChartPie, faPeopleGroup, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

// Define a type for the Feature component's props
type FeatureProps = {
  icon: IconDefinition;
  title: string;
  description: string;
};

const WhyUseCollapsify: React.FC = () => {
  const radialGradientStyle = {
    background: 'radial-gradient(circle at center, #0E2247 0%, #00071400 40%)'
  }
  return (
    <div style={radialGradientStyle} className='flex w-full flex-col items-center justify-center mt-4 pl-6 min-h-screen'>
      <h2 className="text-3xl font-bold text-white">
        Why use Collapsify?
      </h2>
      <p className="mt-4 text-lg text-white">
        Discover how Collapsify simplifies your marketing efforts and boosts your business efficiency
      </p>
      <div className="w-full max-w-[1073px] mt-10 flex justify-center gap-5 flex-wrap">
        <Feature icon={faRobot} title="Easy Automation" description="Collapsify takes the heavy lifting out of marketing, making complex tasks simple." />
        <Feature icon={faChartPie} title="Smart Insights" description="Get quick, smart data that guides your decisions without the guesswork." />
        <Feature icon={faPeopleGroup} title="Wider Reach" description="Easily connect with more people across different channels." />
        <Feature icon={faMoneyBill} title="Save Money" description="Use smarter strategies that stretch your budget further." />
      </div>
    </div>
  )
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center w-full max-w-[250px] justify-center">
    <div className="w-1/3"><FontAwesomeIcon icon={icon} color="white" size='1x' /></div>
    <h3 className="mt-6 text-xl text-white text-center">{title}</h3>
    <p className="mt-2 text-sm text-white text-center">{description}</p>
  </div>
);

export default WhyUseCollapsify;
