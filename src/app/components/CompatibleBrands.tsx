import { faGoogle, faMeta, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CompatibleBrands = () => {
  return (
    <div>
    <div className="self-stretch flex w-full flex-col pl-20 pt-12 max-md:max-w-full max-md:pl-5">
    <h2 className="text-white text-center text-5xl font-semibold self-center max-w-lg mt-20 max-md:max-w-full max-md:text-4xl max-md:mt-10">
      Seamless Integrations
    </h2>
    <div className="text-white text-center text-4xl font-light self-center max-w-[839px] mt-7 max-md:max-w-full">
      Unlock the full potential of your marketing efforts with
      Collapsify's vast network of seamless integrations across leading
      platforms and services
    </div>{" "}
    <div className="self-center flex w-full max-w-[1293px] items-center justify-between gap-5 mt-36 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
      <FontAwesomeIcon icon={faGoogle}  color="white"></FontAwesomeIcon>
     
      <div className="border bg-zinc-300 bg-opacity-0 self-stretch flex grow basis-[0%] flex-col justify-center items-center px-11 py-12 rounded-[36px] border-solid border-white max-md:px-5">
      <FontAwesomeIcon icon={faMeta}  color="white"></FontAwesomeIcon>
      </div>{" "}
      <div className="border bg-zinc-300 bg-opacity-0 self-stretch flex grow basis-[0%] flex-col justify-center items-center px-16 py-12 rounded-[36px] border-solid border-white max-md:px-5">
      <FontAwesomeIcon icon={faLinkedin}  color="white"></FontAwesomeIcon>
      </div>{" "}
      <div className="border bg-zinc-300 bg-opacity-0 self-stretch flex w-[169px] shrink-0 h-[244px] flex-col rounded-[36px] border-solid border-white" />
    </div>{" "}
    <div className="self-stretch w-full shrink-0 h-px mt-40 max-md:mt-10" />
  </div>{" "}
  </div>
  )
}

export default CompatibleBrands

