"use client";

import Image from "next/image";
import { BoltIcon, CommandLineIcon, RectangleGroupIcon, PuzzlePieceIcon, ArrowUpRightIcon, ChatBubbleOvalLeftEllipsisIcon
} from "@heroicons/react/24/outline";
import Layout from "@/components/Layout";
import HeadingTitle from "@/components/HeadingTitle";
import PortfolioCarousel from "@/components/widgets/PortfolioCarousel";
import ReviewsCarousel from "@/components/widgets/ReviewsCarousel";
import DefaultButton from "@/components/widgets/buttons/DefaultButton";
import PackageList from "@/components/widgets/PackageList";
import HerroGallery from "@/components/HeroGallery";

function HomePage() {
  return (
    <Layout>
    <div className="main">
      <div className="all">
      
        <div className="container gap-20 md:flex flex-row items-center mx-auto z-auto"> 
        <div className="hero-section"></div>
          <div className="description basis-1/2 max-lg:basis-9/12 ">
          <div className="relative -z-[1] heading-subtitle inline-block bg-emerald-400 bg-opacity-10 px-3 py-1 rounded-full text-white mb-1">
                <span className="ml-4 text-sm">Cool Designs, Hot results</span>
              </div>
            <h1 className="xl:leading-tight text-white lg:leading-tight md:leading-tight mt-4 lg:text-5xl max-lg:text-3xl font-semibold">
              We are Digital Creative<br></br> Web Agency
            </h1>
            <div className="mb-10">
              <p className="leading-7 pt-5 mb-10 max-lg:mb-5 text-slate-300">
                Innovative digital agency that specializes in creating high-quality websites and digital marketing strategies designed to drive engagement and increase conversions.
              </p>
              <div className="flex gap-5 mt-8">
              <DefaultButton
                Source={"/contact"}
                Title={"Contact Us"}
                Icon={ChatBubbleOvalLeftEllipsisIcon}
                color="default"
           
                iconPosition="left"
              />

              <DefaultButton
                Source={"/portfolio"}
                Title={"View Portfolio"}
                Icon={BoltIcon}
                iconPosition="left"
                color="bordered"
              />

              </div>
            </div>
          </div>
          <div className="hero-sliders mt-20 md:mt-0 rounded-3xl">
            <HerroGallery />
          </div>
        </div>

        <div className="container mx-auto mt-28 max-md:mt-10">
        
          

          <div className="flex max-md:flex-col flex-row gap-5 pt-10">
            <div className="basis-4/12 group">
              <div className="card p-6 rounded-3xl bg-slate-800 hover:bg-emerald-400 hover:text-stone-900 transition-colors">
                <CommandLineIcon className="w-12 h-12 text-emerald-400 group-hover:text-stone-900" />
                <div className="card-title mt-3">
                  <h2 className="text-lg font-medium ">
                  Web Development 
                  </h2>
                </div>
                <div className="card-description text-slate-400 group-hover:text-emerald-800 mt-2">
                  <p>
                  We create visually appealing and functional websites that reflect your brand and engage your audience.
                  </p>
                </div>
              </div>
            </div>

            <div className="basis-4/12 group">
              <div className="card p-6 rounded-3xl bg-slate-800 hover:bg-emerald-400 hover:text-stone-900 transition-colors">
                <RectangleGroupIcon className="w-12 h-12 text-emerald-400 group-hover:text-stone-900" />
                <div className="card-title mt-3">
                  <h2 className="text-lg font-medium ">
                  Graphic Design
                  </h2>
                </div>
                <div className="card-description mt-2 text-slate-400 group-hover:text-emerald-800">
                  <p>
                  Our team of graphic designers crafts unique and compelling designs to capture the essence of your business.
                  </p>
                </div>
              </div>
            </div>

            <div className="basis-4/12 group">
              <div className="card p-6 rounded-3xl bg-slate-800 hover:bg-emerald-400 hover:text-stone-900 transition-colors">
                <PuzzlePieceIcon className="w-12 h-12 text-emerald-400 group-hover:text-stone-900" />
                <div className="card-title mt-3">
                  <h2 className="text-lg font-medium ">
                  Digital Marketing
                  </h2>
                </div>
                <div className="card-description text-slate-400 group-hover:text-emerald-800 mt-2">
                  <p>
                  We devise effective digital marketing strategies to increase your online presence and drive conversions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-us flex flex-row max-md:flex-col mt-28 max-md:mt-16 items-center">
            <div className="basis-6/12">
              <Image
                src="https://app.nordwebduo.com/uploads/hero_pic_89ee693c84.png"
                width="460"
                height="457"
                className="max-md:w-full mb-10 object-center"
              ></Image>
            </div>
            <div className="basis-6/12">
              <div className="section-title">
              <div className="relative -z-[1] heading-subtitle inline-block bg-emerald-400 bg-opacity-10 px-3 py-1 rounded-full text-white mb-3">
                <span className="ml-4 text-sm">About Us </span>
              </div>
                <div className="section-title w-3/4 max-md:w-full">
                  <h2 className="leading-10 font-semibold text-3xl max-md:text-2xl">
                    Services Built Specifically for your Business
                  </h2>
                </div>
                <div className="about-us-desc leading-7 mt-4 max-md:text-md text-slate-300">
                  <p className="mb-2 ">
                    Nord Web Duo is an innovative digital agency that
                    specializes in creating high-quality websites and digital
                    marketing strategies designed to drive engagement and
                    increase conversions.
                  </p>
                  <p>
                    The team, consisting of experienced developers, designers,
                    and marketing experts, is dedicated to understanding their
                    clients unique business needs and tailoring their solutions
                    to achieve the desired outcome. Nord Web Duo prides itself
                    on its ability to deliver exceptional results on time and
                    within budget.
                  </p>
                 
                </div>
                <div className="mt-8 flex gap-3">
                <DefaultButton
                Source={"/about"}
                Title={"Read More"}
                Icon={ArrowUpRightIcon}
                color="default"
                iconPosition="right"
              />

              

              <DefaultButton
                Source={"/contact"}
                Title={"Contact Us"}
                Icon={ChatBubbleOvalLeftEllipsisIcon}
                iconPosition="left"
                color="bordered"
              />
              </div>
              </div>
            </div>
          </div>

          <div className="porftolio-selection mt-28 max-md:mt-16">
            <HeadingTitle 
            subtitle="Crafting Digital Excellence"
            title="Our Works"
            description="Explore our diverse portfolio showcasing cutting-edge web design, development, and tailored digital strategies"
            />

            <PortfolioCarousel />

            </div>

          <div className="packages-selection mt-28 max-md:mt-8" id="packages">
           
          <HeadingTitle 
            subtitle="Irresistible Offers"
            title="Unbeatable Packages"
            description="Explore our Basic, Advanced, and Premium packages, featuring unbeatable packages on top-notch products and services. Act now to seize limited-time offers."
            />

           <PackageList />

          </div>
           
          <div className="packages-selection mt-28 max-md:mt-16">
          <HeadingTitle 
            subtitle="Our happy Clients"
            title="Testimonials"
            description="Explore our Basic, Advanced, and Premium packages, featuring unbeatable packages on top-notch products and services. Act now to seize limited-time offers."
            />
     <div className="mt-10">
         <ReviewsCarousel />      
</div>

          </div>


        </div>
        
      </div>
  
    </div>
    </Layout>
  );
}
export default HomePage;
