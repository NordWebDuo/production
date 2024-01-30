import Layout from "@/components/Layout";
import { fetcher } from "@/lib/api";
import { ArrowUpRightIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import Image from "next/image";
import TitleDesc from "@/components/PageTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import markDownToHtml from "@/lib/markDownToHtml";

const PortfolioSlug = ({ portfolio, description }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!portfolio || !portfolio.attributes) {
    // Redirecționează către pagina de eroare 404 a Next.js dacă nu există blogul sau atributul dorit
    return <Error404 />;
  }

  return (
    <Layout 
    pageTitle={portfolio.attributes.title} 
    ogPageTitle={`${portfolio.attributes.title}` + " | NordWebDuo"}
    pageDescription={portfolio.attributes.shortDescription}
    metaImage={`${process.env.NEXT_PUBLIC_ASSETS_URL}` + portfolio.attributes.full_image.data.attributes.url}
    ogUrl={`https://www.nordwebduo.com/portfolio/${portfolio.attributes.slug}`}
    >
      
      <div className="hero-section-alternative"></div>
        <div className='container mx-auto'>
        <TitleDesc 
                    Title={portfolio.attributes.title}
                    PageDescription={portfolio.attributes.shortDescription}
                />
       <div className="mt-10">
        <Image className="rounded-3xl" src={`${process.env.NEXT_PUBLIC_ASSETS_URL}` + portfolio.attributes.full_image.data.attributes.url} width="2048" height="600" alt={portfolio.attributes.title} />
       <div className="flex flex-col lg:flex-row mt-10">
        <div className="lg:w-4/12 w-full mb-4">
          <h2 className="lg:text-3xl text-xl ">About the project</h2>
          </div>
        <div className="lg:w-8/12 w-full">
        <div className="description leading-7 text-slate-400 text-base lg:text-lg" dangerouslySetInnerHTML={{__html: description}} />
            <div className="mt-2 inline-flex  border-2  border-emerald-400 hover:bg-emerald-400 transition-colors font-medium rounded-full">
              <a className="inline-flex text-emerald-400 hover:text-stone-900 items-center gap-2 max-lg:text-sm px-6 max-lg:px-4 max-lg:py-2 py-3" href={portfolio.attributes.website_url} target="_blank"> Visit Website <ArrowUpRightIcon className="w-5 h-5" /> </a>
            </div>
            <div className="mt-10">
              <h3 className="font-semibold mb-3 text-xl">Our role</h3>
             <div className="text-slate-300"> {portfolio.attributes.portfolio_categories.data[0].attributes.title}</div>
              </div>
            
        </div>
        </div>

<Swiper className="mt-10 lg:mt-20 mySwiper"
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
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
}}
navigation={false} 
modules={[Navigation,Autoplay,Pagination]}>

        {portfolio.attributes.gallery.data.map((image) => (
         <SwiperSlide key={image.id}>
          
            <Image
              className="rounded-3xl mb-12"
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}` + image.attributes.formats.medium.url}
              alt={image.attributes.name}
              width={image.attributes.width}
              height={image.attributes.height}
              priority
            />
            
       
          </SwiperSlide>
        ))}
        </Swiper>

          </div>
         <div className="mt-10 lg:mt-20 lg:w-1/2 w-full mx-auto">
          <ChatBubbleBottomCenterTextIcon className="w-8 h-8 mx-auto mb-5 text-emerald-400" />
          <div className="text-lg lg:text-2xl text-slate-400 text-center leading-7 lg:leading-10">   {portfolio.attributes.review.data.attributes.review} </div>
          <div className="text-center text-slate-200 text-lg mt-3 mb-1">{portfolio.attributes.review.data.attributes.author}</div>
          <div className="text-center text-sm text-slate-400">{portfolio.attributes.review.data.attributes.author_info}</div>
       
          </div>
          </div>
          
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
  };

  try {
    const portfolioResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/portfolio/${slug}?populate=*`, reqOptions);

    if (!portfolioResponse || !portfolioResponse.data) {
      return { notFound: true };
    }

    const description = await markDownToHtml(
      portfolioResponse.data.attributes.description
    );

    return {
      props: {
        portfolio: portfolioResponse.data,
        description,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default PortfolioSlug;