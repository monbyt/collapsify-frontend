import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faMeta } from '@fortawesome/free-brands-svg-icons/faMeta'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Image from 'next/image'; 

const Footer = () => {
  return (
<div className="self-stretch flex w-full flex-col pr-6 max-md:max-w-full max-md:mt-10 max-md:pr-5">
          <div className="self-center z-[1] mt-0 w-[966px] max-w-full">
            
          </div>{" "}
          <div className="self-center w-full max-w-[982px] mt-32 max-md:max-w-full max-md:mt-10">
            
          </div>{" "}
          <div className="text-white text-center text-sm font-bold tracking-[2.8px] uppercase self-center max-w-[518px] mt-10"> {/* Reduced margin */}
            EVOLVE YOUR MARKETING FOR A BRIGHTER TOMORROW
          </div>{" "}
          <div className="text-white text-center text-5xl font-bold self-center max-w-[546px] mt-12 max-md:max-w-full max-md:text-4xl max-md:mt-10">
            Request More Information
          </div>{" "}
          <div className="text-white text-center text-lg font-thin leading-8 self-center max-w-[767px] mt-16 max-md:max-w-full max-md:mt-10">
            Collapsify, LLC is an innovative marketing technology company,
            revolutionizing the industry by developing unique AI-powered
            solutions for targeted and efficient marketing strategies
          </div>{" "}
          <div className="text-white text-center text-base font-medium border-[color:var(--White,#FFF)] shadow-2xl bg-sky-500 self-center w-[265px] max-w-full justify-center items-center mt-5 px-16 py-4 rounded-[30px] border-0 border-solid max-md:mt-5 max-md:px-5"> {/* Reduced margin and padding */}
            Contact Us
          </div>{" "}
          <div className="text-white text-center text-sm font-thin mt-16 max-md:mt-10">
            © 2023 Collapsify, LLC
          </div>{" "}
          <Image
        loading="lazy"
        className="aspect-[1416] object-contain object-center w-full fill-white stroke-[1px] stroke-white overflow-hidden self-stretch mt-20 max-md:max-w-full max-md:mt-10" src={''} alt={''}          />{" "}
          <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-12 pr-6 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10 max-md:pr-5">
            <div className="text-white text-center text-4xl font-extrabold my-auto">
              Collapsify
            </div>{" "}
            <div className="self-center flex items-stretch justify-between gap-5 my-auto max-md:justify-center">
              <div className="text-white text-base font-thin">Team</div>{" "}
              <div className="text-white text-center text-base font-thin">
                Case Studies
              </div>{" "}
              <div className="text-white text-base font-thin">Publications</div>
            </div>{" "}
            <div className="flex flex-row items-end gap-4 aspect-[5.7] object-contain object-center w-[100px] overflow-hidden shrink-0 max-w-full">
        
          <FontAwesomeIcon icon={faTwitter} color="white" size="xs" />
   
       
        <FontAwesomeIcon icon={faMeta} color="white" size="xs"/>
  
       
        <FontAwesomeIcon icon={faInstagram} color="white" size="xs"/>
    
      </div>

          </div>
        </div>
  
  )
}

export default Footer

