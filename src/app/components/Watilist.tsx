    import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
    
    const Watilist = () => {
      const radialGradientStyle = {
        background: 'radial-gradient(circle at center, #0E2247 0%, #00071400 40%)'
      }
    return (
        <div style={radialGradientStyle} className="flex flex-col text-center px-4 lg:px-20 py-10 h-screen justify-center items-center">
        <h1 className="text-6xl font-semibold mt-10 lg:mt-20">
        Collapse your data with Collapsify.
        </h1>
        <p className="text-3xl font-light mt-6 lg:mt-10">
        Empower your marketing with Collapsify, centralizing all your efforts in one place for streamlined management and enhanced efficiency.
        </p>
        <div className="flex items-center mt-20 w-full justify-center">
        <input placeholder="Enter your email" className="text-white text-lg font-light w-1/3 border bg-neutral-900 bg-opacity-0 px-4 py-4 rounded-[41px] border-solid border-white border-opacity-30">
        </input>
        <button className="ml-4 bg-gray-900 hover:bg-gray-800 text-white text-lg font-light px-4 py-4 rounded-full flex items-center justify-center w-[190px] border border-solid border-white border-opacity-10">
          Join waitlist
          <div className="w-1/6">
          <FontAwesomeIcon icon={faArrowRight} size="sm" className="ml-2" />
          </div>
        </button>
        </div>
                </div>
    )
    }

    export default Watilist

