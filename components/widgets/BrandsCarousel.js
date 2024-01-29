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
      className="mySwiper opacity-80 hover:opacity-100 transition-all items-center"
    >

      <SwiperSlide>
        <Image src="https://app.nordwebduo.com/uploads/nextjs_ce6127ed25.svg" width={160} height={80} />
      </SwiperSlide>

      <SwiperSlide>
        <Image src="https://app.nordwebduo.com/uploads/Woocommerce_e73a517344.svg" width={160} height={80} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="https://app.nordwebduo.com/uploads/elementor_0eb87258af.svg" width={160} height={80} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="https://app.nordwebduo.com/uploads/Wordpress_fe311c4c20.svg" width={160} height={80} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="https://app.nordwebduo.com/uploads/Tailwindcss_8598b43b45.svg" width={160} height={80} />
      </SwiperSlide>
     
      </Swiper>
      </div>
        </>
    )
}

export default BrandsCarousel;