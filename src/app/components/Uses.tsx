import React from 'react';

const Uses = () => {
    const radialGradientStyle = {
        background: 'radial-gradient(circle at center, #0E2247 0%, #00071400 50%)'
      }
  return (
    <div style={radialGradientStyle} className="flex flex-col justify-center items-center min-h-screen py-40 px-10 mt-40" >

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl mx-auto">
          {/* Repeated for each div */}
          <div className="bg-white/5 border border-white/20 shadow-lg rounded-[36px] p-8 backdrop-blur-md hover:shadow-2xl transition-shadow">
          <h3 className="text-white text-center text-3xl font-semibold mt-2.5">
            E-Commerce Personalization
          </h3>
          <p className="text-white text-center text-xl font-light mt-7 mb-9">
            Use AI-driven insights to create personalized marketing strategies that significantly boost e-commerce sales and customer retention.
          </p>
        </div>
        
        <div className="bg-white/5 border border-white/20 shadow-lg rounded-[36px] p-8 backdrop-blur-md hover:shadow-2xl transition-shadow">
          <h3 className="text-white text-center text-3xl font-semibold mt-2.5">
            Event Promotion
          </h3>
          <p className="text-white text-center text-xl font-light mt-7 mb-9">
            Effectively promote events by leveraging predictive analytics to reach the most interested and engaged audiences across multiple channels.
          </p>
        </div>

        <div className="bg-white/5 border border-white/20 shadow-lg rounded-[36px] p-8 backdrop-blur-md hover:shadow-2xl transition-shadow">
          <h3 className="text-white text-center text-3xl font-semibold mt-3">
            Small Business Growth
          </h3>
          <p className="text-white text-center text-xl font-light mt-7 mb-9">
            Collapsify helps small businesses amplify their market presence by optimizing budget-friendly, targeted marketing campaigns.
          </p>
        </div>

        <div className="bg-white/5 border border-white/20 shadow-lg rounded-[36px] p-8 backdrop-blur-md hover:shadow-2xl transition-shadow">
          <h3 className="text-white text-center text-3xl font-semibold mt-3">
            B2B Lead Generation
          </h3>
          <p className="text-white text-center text-1xl font-light mt-7 mb-9">
            Streamline B2B marketing efforts to generate high-quality leads with data-backed strategies and precise targeting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Uses;
