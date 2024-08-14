import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper navigation={true} modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true
      }}
      className="mySwiper">
        <SwiperSlide className='swiper-slide'>
            <img src="/img1.jpeg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
            <img src="/img2.jpeg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
            <img src="/img3.jpeg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
            <img src="/img4.jpg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
            <img src="/img5.png" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
            <img src="/img6.png" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
            <img src="/img7.jpg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
            <img src="/img8.jpg" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
            <img src="/img9.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
