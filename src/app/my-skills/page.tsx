'use client';
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { SkillData } from '@/constants';
import Image from 'next/image';
import {Autoplay} from 'swiper/modules';
const page = () => {
  return (
    <div className='skills-container'>
     <div className='skill-content'>
      <div className='skill'>
        <h1>Skills<span>
             {" "} 
             &
             {" "}
            </span>
            Technologies</h1>
            <p>
            Create with passion, code with purpose.</p>
      </div>
      <Swiper
     slidesPerView = {5}
     loop = {true}
     autoplay ={{
       delay: 0,
       disableOnInteraction: false,
     }}
     speed={4000}
     modules={[Autoplay]}
     className='max-w-[80%]'
    >
     {SkillData.map((skill, index) => (
       <SwiperSlide key={index}>
         <Image
         src={skill.Image}
         alt={skill.name}
         width={skill.width}
         height={skill.height}
         />
       </SwiperSlide>
       ))}

      </Swiper>
      <Swiper
     slidesPerView = {5}
     loop = {true}
     autoplay ={{
       delay: 0,
       disableOnInteraction: false,
       reverseDirection: true
     }}
     speed={6000}
     modules={[Autoplay]}
     className='max-w-[80%]'
    >
     {SkillData.map((skill, index) => (
       <SwiperSlide key={index}>
         <Image
         src={skill.Image}
         alt={skill.name}
         width={skill.width}
         height={skill.height}
         />
       </SwiperSlide>
       ))}

      </Swiper>
      <div className="img-box2">
        <Image
          alt="trees"
          src="/img/trees.webp"
          width={2000}
          height={1000}
          className="w-full h-[30%]"
        />
      </div>
     </div>
    </div>
  )
}

export default page