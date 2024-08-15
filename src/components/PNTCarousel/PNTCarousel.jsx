import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import StackedBarChart from '../StackedBarChart';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Navigation } from 'swiper/modules';

export default function PNTCarousel() {
  const chartData = {
    labels: ['UG 2019', 'UG 2020', 'UG 2021', 'UG 2022', 'UG 2023', 'UG 2024'], // Example column labels
    averageLPAs: [3, 7, 4, 4, 3, 5], // Example average LPAs
    highestLPAs: [2, 3, 3, 1, 3, 4], // Example highest LPAs
  };
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
      >
        <SwiperSlide className='flex flex-col justify-end items-start'>
          <div>Placement Statistics</div>
          <StackedBarChart data={chartData} height={300} width={550}/>
        </SwiperSlide>
        <SwiperSlide className='flex flex-col justify-end items-start'>
          <div>Bi-Annual Newsletter</div>
          <img src="/synapse_newsletter.png"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
