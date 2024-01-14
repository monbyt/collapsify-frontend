'use client'; 

import { useState } from 'react';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { collection, addDoc } from 'firebase/firestore'; 
import {db} from '../../../firebase.js'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import banner from '../assets/collapsifybanner.png'; 
import collapsifylogo from '../assets/collapsifylogotext.png'
import Image from 'next/image';

const WaitlistSignup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const nav = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const radialGradientStyle = {
    background: '#0D0D0D'
  };

  const onSubmit = async (formData: any) => {
    try {
      await addDoc(collection(db, 'waitlist'), { email: formData.email });
      nav('/joined');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
     <div className="mt-5 lg:mt-4 mb-6">
        <Image src={collapsifylogo} alt="Chumy Logo" className="w-auto h-16" />
      </div>
    <div style={radialGradientStyle} className="flex flex-col lg:flex-row text-left px-4 lg:px-20  justify-center items-center text-white overflow-hidden">
    {/* {isLoading && (
      <div style={radialGradientStyle} className="absolute inset-0 flex justify-center items-center ">
        <img src={chumyLogo} alt="Loading..." className="w-16 h-16" />
      </div>
    )} */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-start mb-0 lg:mb-0">
      <h1 className="text-xl lg:text-4xl mt-0 lg:mt-0 font-sans break-words">
      Collapse your data with
      </h1>
      <h1 className="text-2xl lg:text-6xl font-bold font-sans break-words">
        Collapsify
      </h1>
      <p className="text-xs lg:text-1x1 font-sans font-extralight mt-6 break-words">
      Empower your marketing with Collapsify, centralizing all your efforts in one place for streamlined management and enhanced efficiency.
      </p>
        {/* Checkmarks and Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-white-500 mr-2" />
            <p className="text-sm font-extralight">Centralized Analytics</p>
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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row items-start mt-6 w-full justify-start">
  <div className="flex flex-col w-full lg:w-2/3 mb-4 lg:mb-0">
    <input 
      placeholder="Enter your email" 
      className={`text-white text-lg font-extralight font-sans w-full border bg-neutral-900 bg-opacity-0 px-4 py-2 border-solid ${errors.email ? 'border-red-500' : 'border-white'}`}
      {...register("email", {
        required: '',
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: 'Invalid email address'
        }
      })}
    />
    {errors.email && (
      <p className="text-red-500 text-sm mt-2">{errors.email?.message?.toString()}</p>
    )}
  </div>
  <button 
    type="submit" 
    className="font-sans text-black bg-white text-lg font-light px-4 py-2 flex items-center justify-center w-[190px] border border-solid border-white border-opacity-10 lg:align-top"
  >
    Join waitlist
    <FontAwesomeIcon icon={faArrowRight} size="sm" className="ml-2" />
  </button>
</form>


<div className="mt-auto">
      <p className="text-sm lg:text-1x1 font-thin mt-6">inquire@collapsify.com</p>
    </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center ml-0 lg:ml-6 mt-6 lg:mt-0 lg:mb-0">
          <Image src={banner} alt="Loading..." className="w-auto" />
        {/* {isLoading && <div></div>} {/* Loading animation */}
        {/* <div className="spline-container self-center" style={{ display: isLoading ? 'none' : 'block' }}> */}

        {/* <Spline scene="https://prod.spline.design/TPgIVH5ih6cX9-aC/scene.splinecode" onLoad={handleSplineLoad} /> */}
        {/* </div> */} 
      </div>
    </div>
    </div>
  );
};

export default WaitlistSignup;
