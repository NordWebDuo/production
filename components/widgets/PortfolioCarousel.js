import { useState, useEffect } from "react";
import axios from 'axios';
import PortfolioCard from "./layouts/PortfolioTemplate";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import NoData from "../NoData";


function PortfolioCarousel() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/portfolios?populate=*`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
            },
          }
        );

        setData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        // Gestionarea erorii
        console.error('Error fetching data:', error);
      }
    };

    fetchProfileData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data?.data?.length) return <NoData />;

  return (
    <Swiper
      className="mt-10 lg:mt-10 mySwiper"
      spaceBetween={30}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
      }}
      navigation={false}
      modules={[Navigation, Autoplay, Pagination]}
    >
      {data.data.map((portfolio, index) => (
        <SwiperSlide key={index}>
          <PortfolioCard portfolio={portfolio} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default PortfolioCarousel;