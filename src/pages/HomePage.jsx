import React from 'react'
import { FaInfoCircle, FaArrowRight, FaLink } from 'react-icons/fa'
import Carousel from '../components/Carousel/Carousel'
import {Card, CardBody, CardHeader, CardFooter, Divider} from "@nextui-org/react";
import HomePageEvents from '../components/HomePageEvents';
import PNTCarousel from '../components/PNTCarousel/PNTCarousel';
import StackedBarChart from '../components/StackedBarChart';

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

        <div className='bg-blue-700 text-white p-8 grid grid-cols-5 text-xs sm:text-xl'>

          <div className='flex flex-col'>
            <span>911</span>
            <span>Students</span>
          </div>
          <div className='flex flex-col'>
            <span>55</span>
            <span>Faculty</span>
          </div>
          <div className='flex flex-col'>
            <span>7</span>
            <span>Departments</span>
          </div>
          <div className='flex flex-col'>
            <span>1611</span>
            <span>Publications</span>
          </div>
          <div className='flex flex-col'>
            <span>18</span>
            <span>Patents</span>
          </div>

        </div>
    </>
  )
}

export default HomePage