'use client'; 

import React, { useState } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spline from '@splinetool/react-spline';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

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
      <div className="w-1/2 flex flex-col justify-center items-start px-4">
        <h1 className="text-5xl mt-5 lg:mt-10 font-sans">
          Collapse your data with 
        </h1>
        <h1 className="text-7xl  font-bold font-sans ">
        Collapsify
        </h1>
        <p className="text-1x1 font-sans font-extralight mt-6">
        The hub for AI-driven marketing analytics: All your data in one place, Automated reports, Fully demonstrate your work to clients. Collapsing your data means to combine several cases into single lines with Collapsify.
        </p>
        {/* Checkmarks and Solutions */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-white-500 mr-2" />
            <p className="text-sm font-extralight">Centralized Analytics </p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-white-500 mr-2" />
            <p className="text-sm font-extralight">Automated Reporting</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-white-500 mr-2" />
            <p className="text-sm font-extralight">Client Transparency</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-white-500 mr-2" />
            <p className="text-sm font-extralight">Data Simplification</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex items-center mt-6 w-full justify-start">
          <input 
            type="email"
            placeholder="Enter your email" 
            className="text-white text-lg font-extralight font-sans w-2/3 border bg-neutral-900 bg-opacity-0 px-4 py-4 border-solid border-white border-opacity-30" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           {showPopup && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <div className="bg-white p-4 rounded shadow-lg">
              <p className="font-sans">Thanks for joining the waitlist!</p>
            </div>
          </div>
        )}
          <button type="submit" className="ml-4 font-sans text-black bg-white text-lg font-light px-4 py-4 flex items-center justify-center w-[190px] border border-solid border-white border-opacity-10">
            Join waitlist
            <FontAwesomeIcon icon={faArrowRight} size="sm" className="ml-2" />
          </button>
        </form>
        <p className="text-1x1 font-thin self-start mt-6">inquire@collapsify.com</p>
      </div>
      <div className="w-1/2 flex justify-center items-end">
        <Spline scene="https://prod.spline.design/TPgIVH5ih6cX9-aC/scene.splinecode" />
      </div>
    </div>
  );
};

export default NewTempWatilist;
