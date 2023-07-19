'use client'

import '../components/swiper.css';
import Image1 from '../asset/10.jpg'
import Image2 from '../asset/5.jpg'
import Image3 from '../asset/7.jpg'
import Image4 from '../asset/21.jpg'
import Image5 from '../asset/23.jpg'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
    return (
        <>

            <style jsx>{`
      
      `}</style>

            <Swiper
                effect={'cards'}
                grabCursor={true}
                loop={true}
                pagination={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {/* <SwiperSlide><img src="https://image.tmdb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg" width="100%" alt="" /></SwiperSlide> */}
                <SwiperSlide>
                    <Image
                        src={Image1}
                        alt="Ice-cream"
                        className='image-size'
                    />
                </SwiperSlide>
                <SwiperSlide> <Image
                    src={Image2}
                    alt="Ice-cream"
                    className='image-size'
                /></SwiperSlide>
                <SwiperSlide> <Image
                    src={Image3}
                    alt="Ice-cream"
                    className='image-size'
                /></SwiperSlide>
                <SwiperSlide>
                <Image
                  src={Image4}
                  alt="Ice-cream"
                  className='image-size'
                />
                </SwiperSlide>
                <SwiperSlide>
                <Image
                  src={Image5}
                  alt="Ice-cream"
                  className='image-size'
                />
                </SwiperSlide>
                {/* <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </>
    );
}
