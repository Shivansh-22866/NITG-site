import React from 'react'
import { FaInfoCircle, FaGraduationCap } from 'react-icons/fa'
import { MdGroups2, MdBook } from 'react-icons/md';
import { BsBuildingGear } from 'react-icons/bs';
import { PiCertificate } from 'react-icons/pi';
import Carousel from '../components/Carousel/Carousel'
import {Card, CardBody, Divider, Image, Tabs, Tab} from "@nextui-org/react";
import HomePageEvents from '../components/HomePageEvents';
import PNTCarousel from '../components/PNTCarousel/PNTCarousel';

const HomePage = () => {

  return (
    <>
        {/* Main Carousel for  */}
        <Carousel/>

        {/* Announcements marquee section: hidden for small screens */}
        <div className='lg:flex items-center justify-center text-small py-8 hidden'>
          <div className='w-1/12 text-lg drop-shadow-xl font-bold flex items-center justify-center'>
            Announcements
          </div>
          <div className='w-1/12 flex items-center justify-center'>
            <Divider orientation='vertical' className='drop-shadow-xl py-4 w-1 bg-black'/>
          </div>
          <marquee className='w-9/12'>
            <div>
              <strong>NITG Announcement:</strong> New curriculum for 2023-24 is out.<strong>NITG Update:</strong> NITG is conducting a virtual event.
              <strong>NITG News:</strong> NITG released a new research paper.
            </div>
          </marquee>
        </div>


        <div className='grid grid-cols-4 h-20 gap-2 m-4 sm:hidden'>
          <Card shadow='sm' isPressable>
            <CardBody className='bg-blue-700 text-xs flex flex-col gap-2 text-white items-center justify-center text-center'>
              <FaInfoCircle className='scale-150' />
              About
            </CardBody>
          </Card>
          <Card shadow='sm' isPressable>
            <CardBody className='bg-blue-700 text-xs flex flex-col gap-2 text-white items-center justify-center text-center'>
              <FaInfoCircle className='scale-150' />
              Admissions
            </CardBody>
          </Card>
          <Card shadow='sm' isPressable>
            <CardBody className='bg-blue-700 text-xs flex flex-col gap-2 text-white items-center justify-center text-center'>
              <FaInfoCircle className='scale-150' />
              Academics
            </CardBody>
          </Card>
          <Card shadow='sm' isPressable>
            <CardBody className='bg-blue-700 text-xs flex flex-col gap-2 text-white items-center justify-center text-center'>
              <FaInfoCircle className='scale-150' />
              Hostels & Campus
            </CardBody>
          </Card>
        </div>


        <HomePageEvents/>

        <div className='xl:block hidden my-8'>
          <PNTCarousel/>
        </div>

        <div className='lg:block hidden relative my-8'>
          <Card radius='lg' className='border-none w-3/4 mx-auto p-8'>
            <div className='flex flex-row gap-4 items-center justify-center'>
            <div>
            <Image
              alt="National Institute of Technology, Goa"
              className='object-cover z-0'
              height={500}
              src="/intro.png"
              width={1200}
            />
            </div>
            <div className='w-3/4'>
            <div className="flex flex-col items-center justify-center">
              <h1 className='text-4xl font-bold'>NIT GOA</h1>
              <Tabs aria-label="Options" placement="bottom" variant='underlined' className='flex flex-col justify-center'>
                <Tab key="photos" title="Photos">
                  <Card className='h-64'>
                    <CardBody>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </CardBody>
                  </Card>  
                </Tab>
                <Tab key="music" title="Music">
                  <Card className='h-64'>
                    <CardBody>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </CardBody>
                  </Card>  
                </Tab>
                <Tab key="videos" title="Videos">
                  <Card className='h-64'>
                    <CardBody>
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </CardBody>
                  </Card>  
                </Tab>
              </Tabs>
            </div> 
            </div>
            </div>
          </Card>

          <div className='flex w-full h-1/5 bg-blue-700 absolute -z-10 top-1/2 -translate-y-1/2'>
          </div>
        </div>

        <div className='w-full flex-row my-32 hidden lg:flex'>
          <div className='flex flex-col items-center justify-center w-2/3'>
            <h1 className='text-3xl font-bold my-4'>National Portals</h1>

            <div className='grid grid-cols-2 grid-rows-3 gap-8'>
              <Image src='/natpor1.png' className='border-4 rounded-xl object-cover z-0' width={300} height={200}/>
              <Image src='/natpor2.png' className='border-4 rounded-xl object-cover z-0' width={300} height={200}/>
              <Image src='/natpor3.png' className='border-4 rounded-xl object-cover z-0' width={300} height={200}/>
              <Image src='/natpor4.png' className='border-4 rounded-xl object-cover z-0' width={300} height={200}/>
              <Image src='/natpor5.png' className='border-4 rounded-xl object-cover z-0' width={300} height={200}/>
              <Image src='/natpor6.png' className='border-4 rounded-xl object-cover z-0' width={300} height={200}/>
            </div>

          </div>
          <div className=' border-l-8 bg-blue-400 w-1/3 flex flex-col p-24 items-center justify-center'>
            <h1 className='text-5xl font-bold my-16'>आज का शब्द</h1>
            <div className='text-4xl font-bold mb-16'>सहिष्णुता</div>
            <div className='text-2xl font-bold'>(&quot;Sahishnuta&quot;)</div>
            <div className='text-2xl font-bold'>-</div>
            <div className='text-2xl font-bold'>Tolerance</div>
          </div>
        </div>

        <div className='bg-blue-700 text-white p-8 grid grid-cols-5 text-xs sm:text-xl'>

        <div className='flex flex-col items-center justify-center gap-4'>
          <FaGraduationCap className='text-9xl'/>
          <span className='text-9xl'>911</span>
          <span>Students</span>
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <MdGroups2 className='text-9xl'/>
          <span className='text-9xl'>55</span>
          <span>Faculty</span>
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <BsBuildingGear className='text-9xl'/>
          <span className='text-9xl'>7</span>
          <span>Departments</span>
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <MdBook className='text-9xl'/>
          <span className='text-9xl'>1611</span>
          <span>Publications</span>
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <PiCertificate className='text-9xl'/>
          <span className='text-9xl'>18</span>
          <span>Patents</span>
        </div>

        </div>
    </>
  )
}

export default HomePage