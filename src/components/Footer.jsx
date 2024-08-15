import React from 'react'
import { FaInstagram, FaYoutube, FaLinkedin, FaAngleRight } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='p-8 bg-blue-500 text-white'>
        <h1 className='text-3xl font-bold'>Quick Links</h1>
        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-2 p-8'>
            <li><a href='#' className='flex flex-row items-center'><FaAngleRight/>Syllabus</a></li>
            <li><a href='#'className='flex flex-row items-center'><FaAngleRight/>Results</a></li>
            <li><a href='#'className='flex flex-row items-center'><FaAngleRight/>RTI</a></li>
            <li><a href='#'className='flex flex-row items-center'><FaAngleRight/>Login</a></li>
            <li><a href='#'className='flex flex-row items-center'><FaAngleRight/>Feedback</a></li>
            <li><a href='#'className='flex flex-row items-center'><FaAngleRight/>e-Downloads</a></li>
            <li><a href='#'className='flex flex-row items-center'><FaAngleRight/>Students</a></li>
            <li><a href='#'className='flex flex-row items-center'><FaAngleRight/>Academic Calender</a></li>
            <li><a href='#'className='flex flex-row items-center'><FaAngleRight/>Regulation and Curriculum</a></li>
            <li><a href='#'className='flex flex-row items-center'><FaAngleRight/>Dissertation Formats</a></li>
        </ul>
        <h1 className='text-3xl font-bold'>Contact Us</h1>
        <div className='flex flex-row justify-between items-center'>
            <div className='p-8 flex flex-col'>
                <span>National Institute of Technology Goa</span>
                <span>Kottamoll Plateau, Cuncolim Municipal Area,</span>
                <span>Salcete Taluka, South Goa District, Goa - 403703</span>
                <span>Website: www.nitgoa.ac.in</span>
            </div>
            <div className='flex flex-row gap-4'>
                <FaInstagram className='w-6 h-6'/>
                <FaYoutube className='w-6 h-6'/>
                <FaXTwitter className='w-6 h-6'/>
                <FaLinkedin className='w-6 h-6'/>
            </div>
        </div>
    </div>
  )
}

export default Footer