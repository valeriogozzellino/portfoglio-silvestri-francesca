'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Autoplay } from 'swiper/modules'
import { cards } from '@/utils/cards'

import 'swiper/css'
import 'swiper/css/effect-cards'

const CardsCarousel = () => {
  return (
    <div className='absolute inset-0 flex justify-center items-center -z-[1]'>
      <Swiper
        effect={'cards'}
        grabCursor={false}
        modules={[EffectCards, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className='w-[240px] h-[340px] md:w-[260px] md:h-[380px] -z-[3]'
      >
        {cards.map(card => (
          <SwiperSlide className='landing-card-slide' key={card.id}>
            <Image
              src={card.src}
              alt={card.description}
              width={300}
              height={500}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CardsCarousel
