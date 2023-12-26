'use client'; 

import React, { useState } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spline from '@splinetool/react-spline';

const NewTempWatilist = () => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const APIKey = {
    key: '6e19665440a0b39a371e976a7758ad35-us17',
    listid: '4d36fc85b5'
  }
  const radialGradientStyle = {
    background: '#0D0D0D'
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hello");

    const data = {
      email_address: email,
      status: 'subscribed',
    };

    try {
      await fetch(`https://us17.api.mailchimp.com/3.0/lists/<4d36fc85b5>/members/`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${btoa('anystring:' + APIKey.key)}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
      setEmail('');
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);

      // Handle success (show message, clear form, etc.)
    } catch (error) {
      // Handle error (show error message, etc.)
      console.log(error); 
    }
  };

  return (
    <div style={radialGradientStyle} className="flex flex-row text-left lg:px-20 h-screen justify-center items-center">
      <div className="w-1/2 flex flex-col justify-center items-center px-4">
        <h1 className="text-5xl font-semibold mt-10 lg:mt-20">
          Collapse your data with Collapsify
        </h1>
        <p className="text-1x1 font-light mt-6 lg:mt-10">
          Empower your marketing with Collapsify, centralizing all your efforts in one place for streamlined management and enhanced efficiency.
        </p>
        <form onSubmit={handleSubmit} className="flex items-center mt-20 w-full justify-start">
          <input 
            type="email"
            placeholder="Enter your email" 
            className="text-white text-lg font-light w-2/3 border bg-neutral-900 bg-opacity-0 px-4 py-4 border-solid border-white border-opacity-30" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           {showPopup && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <div className="bg-white p-4 rounded shadow-lg">
              <p>Thanks for joining the waitlist!</p>
            </div>
          </div>
        )}
          <button type="submit" className="ml-4 text-black bg-white text-lg font-light px-4 py-4 flex items-center justify-center w-[190px] border border-solid border-white border-opacity-10">
            Join waitlist
            <FontAwesomeIcon icon={faArrowRight} size="sm" className="ml-2" />
          </button>
        </form>
      </div>
      <div className="w-1/2 flex justify-center items-end">
        <Spline scene="https://prod.spline.design/TPgIVH5ih6cX9-aC/scene.splinecode" />
      </div>
    </div>
  );
};

export default NewTempWatilist;
