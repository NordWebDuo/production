import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/free-mode';
import Image from 'next/image';

function HerroGallery() {

    return(
        <>
        <div className='relative'>
        <div className='herrogallery grid grid-cols-2 gap-5 items-center relative rotate-3'>
       
        <div className=' w-full rounded-3xl'>
    <div className='overflow-hidden'>
    <Swiper
      breakpoints={{
        640: { slidesPerView: 1  },
        768: { slidesPerView: 2  },
        1024: { slidesPerView: 2 },
      }}
      spaceBetween={20}
      direction={'vertical'}
      speed={10000}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
        reverseDirection: true,
      }}
      loop={true}
      modules={[Autoplay]}
      className="mySwiper lg:h-[500px] md:h-[400px] h-[300px] w-full">
      <SwiperSlide>
        <Image className='w-full h-full  rounded-2xl' src="/hero-carousel/Motion1.jpg" width={375} height={400} alt='Nord Web Duo' />
      </SwiperSlide>
      <SwiperSlide>
      <Image className='w-full h-full rounded-2xl' src="/hero-carousel/Motion2.jpg" width={375} height={400} alt='Nord Web Duo' />
    </SwiperSlide>
    <SwiperSlide>
    <Image className='w-full h-full rounded-2xl' src="/hero-carousel/Motion3.jpg" width={375} height={400} alt='Nord Web Duo' /> 
    </SwiperSlide>
    <SwiperSlide>
    <Image className='w-full h-full rounded-2xl' src="/hero-carousel/Motion4.jpg" width={375} height={400} alt='Nord Web Duo' />
    </SwiperSlide>
    <SwiperSlide>
    <Image className='w-full h-full rounded-2xl' src="/hero-carousel/Motion5.jpg" width={375} height={400} alt='Nord Web Duo' />
    </SwiperSlide>

    <SwiperSlide>
    <Image className='w-full h-full rounded-2xl' src="/hero-carousel/Motion6.jpg" width={375} height={500} alt='Nord Web Duo' />
    </SwiperSlide>
      
    </Swiper>
    </div>
    </div>

    <div className=' w-full rounded-3xl'>
    <div className='overflow-hidden rounded-3xl '>
    <Swiper
      breakpoints={{
        640: { slidesPerView: 1  },
        768: { slidesPerView: 2  },
        1024: { slidesPerView: 2 },
      }}
      spaceBetween={20}
      direction={'vertical'}
      speed={10000}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
        reverseDirection: false,
      }}
      loop={true}
      modules={[Autoplay]}
      className="mySwiper lg:h-[500px] xl:h-[500px] h-[300px] md:h-[400px] w-full">
           <SwiperSlide>
        <Image className='w-full h-full  rounded-2xl' src="/hero-carousel/Motion1.jpg" width={375} height={400} alt='Nord Web Duo' />
      </SwiperSlide>
      <SwiperSlide>
      <Image className='w-full h-full rounded-2xl' src="/hero-carousel/Motion2.jpg" width={375} height={400} alt='Nord Web Duo' />
    </SwiperSlide>
    <SwiperSlide>
    <Image className='w-full h-full rounded-2xl' src="/hero-carousel/Motion3.jpg" width={375} height={400} alt='Nord Web Duo' /> 
    </SwiperSlide>
    <SwiperSlide>
    <Image className='w-full h-full rounded-2xl' src="/hero-carousel/Motion4.jpg" width={375} height={400} alt='Nord Web Duo' />
    </SwiperSlide>
    <SwiperSlide>
    <Image className='w-full h-full rounded-2xl' src="/hero-carousel/Motion5.jpg" width={375} height={400} alt='Nord Web Duo' />
    </SwiperSlide>

    <SwiperSlide>
    <Image className='w-full h-full rounded-2xl' src="/hero-carousel/Motion6.jpg" width={375} height={500} alt='Nord Web Duo' />
    </SwiperSlide>
      
    </Swiper>
    </div>
    </div>
   
    </div>
    </div>
        </>
    )

}


export default HerroGallery;