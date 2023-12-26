import { useState, useEffect } from "react";
import PortfolioCard from "./layouts/PortfolioTemplate";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';

function PortfolioCarousel() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      const reqOptions = {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
        revalidate: 60,
      };

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/portfolios?populate=*`,
          reqOptions
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const fetchedData = await response.json();
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data || !data.data || data.length === 0) return <p>No data available</p>;
  return (
    <>
    <Swiper className="mt-10 lg:mt-10 mySwiper"
spaceBetween={30}
pagination={{
  clickable: true,
}}
autoplay={{
  delay: 2500,
  disableOnInteraction: false,
}}
breakpoints={{
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
}}
navigation={false} 
modules={[Navigation,Autoplay,Pagination]}>
      {data.data.map((portfolio) => (
      <SwiperSlide key={portfolio.id}>  
        <PortfolioCard portfolio={portfolio} />
      </SwiperSlide>
      ))}
     </Swiper>
    </>
  );
}

export default PortfolioCarousel;
