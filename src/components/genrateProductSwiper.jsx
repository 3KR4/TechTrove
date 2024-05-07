import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import MainCard from '../components/main-card';

export default function genrateProductSwiper(x) {
  return (

    <Swiper
    pagination={{
      dynamicBullets: true,
      clickable: true,
    }}
    modules={[Pagination, Autoplay]}
    loop={true}
    slidesPerView={4}
    speed={1150}
    autoplay={{ delay: 2000, disableOnInteraction: false }}
    spaceBetween={14}
    breakpoints={{
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    }}
  >
    {x.map((y) => (
      <SwiperSlide key={y.id}>
        <MainCard product={y} details={false}/>
      </SwiperSlide>
    ))}
  </Swiper>
  )
}