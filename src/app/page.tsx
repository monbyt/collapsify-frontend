import Image from 'next/image'
import NavBar from './components/NavBar'
import FeatureDropdown from './components/FeatureSection.client'
import Demo from './components/Demo.client';
import { faArrowRight, faChevronDown, faRobot, faChartPie, faPeopleGroup, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FeatureSection from './components/FeatureSection.client';
import CampaignTimeline from './components/CampaignTimeline.client';
import CompatibleBrands from './components/CompatibleBrands';
import WhyUseCollapsify from './components/WhyUseCollapsify';
import Watilist from './components/Watilist';
import Footer from './components/Footer';
import Uses from './components/Uses';
import { faInstagram, faTwitter, faMeta } from '@fortawesome/free-brands-svg-icons';
import NewTempWatilist from './components/NewTempWaitlist.client';
export default function Home() {
  return (
    <main className="bg-gray-950 text-white">
      {/* <NavBar /> */}
      <NewTempWatilist/>
      {/* <Watilist/> */}
      {/* <FeatureSection />
      <WhyUseCollapsify />
      <CampaignTimeline /> */}
      {/* <Uses /> */}
      {/* <Footer/> */}
      
      
    </main>
  )
}
