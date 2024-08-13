import { useState } from "react"
import { aboutTripadvisor, explore, doBusinessWithUs, tripadvisorSites } from "../data/FooterData"
import Logo from '../img/logo.png'

const Footer = () => {
    const [aboutTriggered,setAboutTriggered] = useState(false)
    const [exploreTriggered,setExploreTriggered] = useState(false)
    const [businessTriggered,setBusinessTriggered] = useState(false)
    const [tripTriggered,setTripTriggered] = useState(false)

  return (
    <div className="bg-footer flex justify-center  items-center min-h-[420px] py-14 px-10 md:px-14">
        <div className="flex flex-col gap-14 lg:gap-8 justify-center items-start w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 footer-group  w-full">
                <ul className="ff">
                <li className="text-lg flex justify-start items-center gap-2" onClick={()=>setAboutTriggered(!aboutTriggered)}><span className="text-2xl block md:hidden text-gray-600">{aboutTriggered ? '-' : '+'}</span>About Trip planner</li>
                    {aboutTripadvisor.map((item,index)=>(
                        <li key={index} className={`${aboutTriggered ? 'block' : 'hidden'} md:block `}>{item}</li>
                    ))}
                </ul>
                
                <ul className="ff">
                <li className="text-lg flex justify-start items-center gap-2" onClick={()=>setExploreTriggered(!exploreTriggered)}><span className="text-2xl block md:hidden text-gray-600">{exploreTriggered ? '-' : '+'}</span>Explore</li>
                    {explore.map((item,index)=>(
                        <li key={index} className={`${exploreTriggered ? 'block' : 'hidden'} md:block `}>{item}</li>
                    ))}
                </ul>

                <ul className="ff">
                <li className="text-lg flex justify-start items-center gap-2" onClick={()=>setBusinessTriggered(!businessTriggered)}><span className="text-2xl block md:hidden text-gray-600">{businessTriggered ? '-' : '+'}</span>Do Business With Us</li>
                    {doBusinessWithUs.map((item,index)=>(
                        <li key={index} className={`${businessTriggered ? 'block' : 'hidden'}  md:block`}>{item}</li>
                    ))}
                </ul>

                <ul className="ff">
                <li className="text-lg flex justify-start items-center gap-2" onClick={()=>setTripTriggered(!tripTriggered)}><span className="text-2xl block md:hidden text-gray-600">{tripTriggered ? '-' : '+'}</span>TripPlanner Sites</li>
                    {tripadvisorSites.map((item,index)=>(
                        <li key={index} className={`${tripTriggered ? 'block' : 'hidden'} md:block `}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="flex gap-5">
                <img src={Logo} className="w-12 h-12" />
                <div className="flex flex-col">
                    <small>© 2024 Tripplanner LLC All rights reserved.</small>
                    <ul className="flex gap-2 footer-last-group flex-wrap ff">
                        <li>Terms of Use</li>
                        <li>Privacy and Cookies Statement</li>
                        <li>Cookie consent</li>
                        <li>Site Map</li>
                        <li>How the site works</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer