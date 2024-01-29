import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode,Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css/free-mode';

function BrandsCarousel() {
    return(
        <>
        <div className='brandscarousel'>
           <Swiper
      spaceBetween={20}
      slidesPerView={4}
      speed={7000}
      freeMode={true}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[FreeMode, Autoplay]}
      className="mySwiper opacity-80 hover:opacity-100 transition-all"
    >
      <SwiperSlide>
        <Image src="nextjs.svg" width={160} height={80} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="nextjs.svg" width={160} height={80} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="nextjs.svg" width={160} height={80} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="woocommerce.svg" width={160} height={80} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="elementor.svg" width={160} height={80} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="elementor.svg" width={160} height={80} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="elementor.svg" width={160} height={80} />
      </SwiperSlide>
     
      </Swiper>
      </div>
        </>
    )
}

export default BrandsCarousel;