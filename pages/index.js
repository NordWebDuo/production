"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';

import {
  PhoneIcon,
  BoltIcon,
  ArrowLongRightIcon,
  StarIcon,
  CheckIcon,
  BriefcaseIcon,
  ChatBubbleOvalLeftIcon,
  CommandLineIcon,
  RectangleGroupIcon,
  PuzzlePieceIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

function HomePage() {
  return (
    <div className=" dark">
      <Header />

      <div className="hero-section lg:pt-10 max-md:pt-20 gap-5 px-5">
        <div className="z-10 gap-20 container md:flex flex-row items-center mx-auto">
          <div className="description basis-1/2 max-lg:basis-9/12 ">
            <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-1.5 rounded-full dark:bg-green-900 dark:text-green-300">
              Cool Designs, Hot Results
            </span>
            <h1 className="xl:leading-tight lg:leading-tight md:leading-tight mt-4 lg:text-5xl max-lg:text-3xl font-semibold">
              We are Digital Creative Web Agency
            </h1>
            <div className="mb-10">
              <p className="pt-5 mb-10 max-lg:mb-5">
                Writer is designed to help you generate high-quality texts
                instantly Based on WoodMart theme 2023 WooCommerce Themes.
              </p>
              <div className="flex gap-3">
              <Link href="/contact">
              <div className="text-stone-900 inline-flex items-center gap-1 border-2 border-emerald-400 hover:border-emerald-500 bg-emerald-400 hover:bg-emerald-500 transition-colors font-medium rounded-full lg:text-md max-lg:text-sm px-6 py-3 max-lg:px-4 max-lg:py-2  me-2 mb-2 ">
                <PhoneIcon className="w-6 h-6" /> Contact Us
              </div>
              </Link>
              <Link href="/portfolio">
              <div className=" inline-flex items-center gap-1 border-2 text-emerald-400 hover:text-stone-900 border-emerald-400 hover:bg-emerald-500 transition-colors font-medium rounded-full lg:text-md max-lg:text-sm px-6 max-lg:px-4 max-lg:py-2 py-3 me-2 mb-2 ">
                <BoltIcon className="w-6 h-6" />
                View Portfolio
              </div>
              </Link>
              </div>
            </div>
          </div>
          <div className="flex hero-image">
            <Image
              src="/hero-pic.png"
              width="460"
              height="457"
              className="max-md:w-3/5 object-center"
            ></Image>
          </div>
        </div>

        <div className="container mx-auto mt-28 max-md:mt-10">
          <div className="section-title text-center">
            <div className="section-subtitle mb-4 inline-block bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
              Subtitle text example
            </div>
            <div className="section-title">
              <h2 className="font-semibold text-2xl">
                Services Built Specifically for your Business
              </h2>
            </div>
            <div className="section-desc pt-2 text-slate-300">
              Text after title text example
            </div>
          </div>

          <div className="flex max-md:flex-col flex-row gap-5 pt-10">
            <div className="basis-4/12 group">
              <div className="card p-6 rounded-3xl bg-gray-800 hover:bg-emerald-400 hover:text-stone-900 transition-colors">
                <CommandLineIcon className="w-12 h-12 text-emerald-400 group-hover:text-stone-900" />
                <div className="card-title mt-3">
                  <h2 className="text-lg font-medium ">
                  Web Development 
                  </h2>
                </div>
                <div className="card-description text-slate-400 group-hover:text-slate-700 mt-2">
                  <p>
                  We create visually appealing and functional websites that reflect your brand and engage your audience.
                  </p>
                </div>
              </div>
            </div>

            <div className="basis-4/12 group">
              <div className="card p-6 rounded-3xl bg-gray-800 hover:bg-emerald-400 hover:text-stone-900 transition-colors">
                <RectangleGroupIcon className="w-12 h-12 text-emerald-400 group-hover:text-stone-900" />
                <div className="card-title mt-3">
                  <h2 className="text-lg font-medium ">
                  Graphic Design
                  </h2>
                </div>
                <div className="card-description mt-2 text-slate-400 group-hover:text-slate-700">
                  <p>
                  Our team of graphic designers crafts unique and compelling designs to capture the essence of your business.
                  </p>
                </div>
              </div>
            </div>

            <div className="basis-4/12 group">
              <div className="card p-6 rounded-3xl bg-gray-800 hover:bg-emerald-400 hover:text-stone-900 transition-colors">
                <PuzzlePieceIcon className="w-12 h-12 text-emerald-400 group-hover:text-stone-900" />
                <div className="card-title mt-3">
                  <h2 className="text-lg font-medium ">
                  Digital Marketing
                  </h2>
                </div>
                <div className="card-description text-slate-400 group-hover:text-slate-700 mt-2">
                  <p>
                  We devise effective digital marketing strategies to increase your online presence and drive conversions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-us flex flex-row max-md:flex-col mt-28 max-md:mt-10 items-center">
            <div className="basis-6/12">
              <Image
                src="/hero-pic.png"
                width="460"
                height="457"
                className="max-md:w-full mb-10 object-center"
              ></Image>
            </div>
            <div className="basis-6/12">
              <div className="section-title">
                <div className="section-subtitle mb-4 inline-block bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  Subtitle text example
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
                  <button
                    type="button"
                    className="mt-5 text-stone-900 inline-flex items-center gap-1 border-2 border-emerald-400 hover:border-emerald-500 bg-emerald-400 hover:bg-emerald-500 transition-colors font-medium rounded-full lg:text-md max-lg:text-sm px-6 py-3 max-lg:px-4 max-lg:py-2  me-2 mb-2 "
                  >
                    <PhoneIcon className="w-6 h-6" /> Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="porftolio-selection mt-28 max-md:mt-10">
            <div className="section-title text-center">
              <div className="section-subtitle mb-4 inline-block bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                Subtitle text example
              </div>
              <div className="section-title">
                <h2 className="font-semibold text-3xl max-md:text-2xl">Our Works</h2>
              </div>
              <div className="section-desc pt-2 text-slate-300 max-md:text-sm">
                Save big on high-quality products and services with limited-time
                offers and discounts across various industries.
              </div>
            </div>

            <div className="flex flex-row max-md:flex-col gap-5 mt-10">
              <div className="basis-4/12 max-md:basis-full p-8 bg-slate-800 rounded-3xl hover:bg-emerald-400  transition-all group">
                <Image
                  className="w-max rounded-2xl mb-4"
                  src="/project.jpg"
                  width="500"
                  height="300"
                ></Image>
                <div className="w-title">
                  <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    Web Development
                  </span>
                </div>
                <div className="pt-2 text-xl font-semibold group-hover:text-stone-800">
                  <h2>Euro Performance LLC</h2>
                  <Link
                    className="mt-3 group-hover:text-stone-700 text-slate-400 group-hover:border-stone-700 font-normal text-base hover:border-b pb-1 border-b border-b-transparent inline-flex"
                    href="/portfolio/1"
                  >
                    View brief <ArrowLongRightIcon className="w-6 h-6 ml-2" />
                  </Link>
                </div>
              </div>

              <div className="basis-4/12 max-md:basis-full p-8 bg-slate-800 rounded-3xl hover:bg-emerald-400 transition-all hover:text-stone-900">
                <Image
                  className="w-max rounded-2xl mb-4"
                  src="/project.jpg"
                  width="500"
                  height="300"
                ></Image>
                <div className="w-title">
                  <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    Web Development
                  </span>
                </div>
                <div className="pt-2 text-xl font-semibold">
                  <h2>Euro Performance LLC</h2>
                </div>
              </div>

              <div className="basis-4/12 max-md:basis-full p-8 bg-slate-800 rounded-3xl hover:bg-emerald-400 transition-all hover:text-stone-900">
                <Image
                  className="w-max rounded-2xl mb-4"
                  src="/project.jpg"
                  width="500"
                  height="300"
                ></Image>
                <div className="w-title">
                  <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    Web Development
                  </span>
                </div>
                <div className="pt-2 text-xl font-semibold">
                  <h2>Euro Performance LLC</h2>
                </div>
              </div>
            </div>
            <div className="justify-center flex mt-10">
              <Link href="/portfolio">
                {" "}
                <div className="inline-flex items-center gap-1 border-2 text-emerald-400 hover:text-stone-900 border-emerald-400 hover:bg-emerald-500 transition-colors font-medium rounded-full lg:text-md max-lg:text-sm px-6 max-lg:px-4 max-lg:py-2 py-3">
                  View more
                  <ArrowLongRightIcon className="w-6 h-6" />
                </div>
              </Link>
            </div>
          </div>

          <div className="packages-selection mt-28 max-md:mt-10">
            <div className="section-title text-center">
              <div className="section-subtitle mb-4 inline-block bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                Subtitle text example
              </div>
              <div className="section-title">
                <h2 className="font-semibold text-3xl">Unbeatable Packages</h2>
              </div>
              <div className="section-desc pt-2 text-slate-300">
                Save big on high-quality products and services with limited-time
                offers and discounts across various industries.
              </div>
            </div>

            <div className="flex flex-row max-md:flex-col gap-5 mt-10">
              <div className="basis-4/12 group max-md:basis-full border-2 rounded-3xl border-slate-800 p-8 hover:border-emerald-400 transition-colors">
                <div className="pack-icon">
                  <StarIcon className="w-16 h-16 text-emerald-400" />
                </div>
                <div className="package-title mt-2 text-xl">Basic</div>
                <div className="package-price mt-3 font-bold text-3xl">
                  200.000<span className="text-xl">/kr</span>
                </div>
                <div className="package-list mt-4">
                  <ul className="list-none text-slate-300">
                    <li>
                      <div className="inline-flex items-center">
                        <CheckIcon className="w-5 h-5 mr-2" />A custom-designed
                        website
                      </div>
                    </li>
                    <li>
                      <div className="inline-flex items-center">
                        <CheckIcon className="w-5 h-5 mr-2" />
                        Basic SEO services
                      </div>
                    </li>
                    <li>
                 
                      <div className="inline-flex items-center">
                        <CheckIcon className="w-5 h-5 mr-2" />
                        Social media setup
                      </div>
                    </li>
                    <li>
                 
                      <div className="inline-flex items-center">
                        <CheckIcon className="w-5 h-5 mr-2" />
                        SSL
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="call-btn mt-6">
                  <Link href="/get-started">
                    <div className="inline-flex items-center gap-1 border-2 text-emerald-400 group-hover:text-stone-900 border-emerald-400 group-hover:bg-emerald-500 transition-colors font-medium rounded-full lg:text-md max-lg:text-sm px-6 max-lg:px-4 max-lg:py-2 py-3">
                      Get Started
                      <ArrowLongRightIcon className="w-6 h-6" />
                    </div>
                  </Link>
                </div>
              </div>

              <div className="basis-4/12 group max-md:basis-full border-2 rounded-3xl border-slate-800 p-8 hover:border-emerald-400 transition-colors">
                <div className="pack-icon">
                  <BoltIcon className="w-16 h-16 text-emerald-400" />
                </div>
                <div className="package-title mt-2 text-xl">Advanced</div>
                <div className="package-price mt-3 font-bold text-3xl">
                  400.000<span className="text-xl">/kr</span>
                </div>
                <div className="package-list mt-4">
                  <ul className="list-none text-slate-300">
                    <li>
                      <div className="inline-flex items-center">
                        <CheckIcon className="w-5 h-5 mr-2" />A custom-designed
                        website
                      </div>
                    </li>
                    <li>
                      <div className="inline-flex items-center">
                        <CheckIcon className="w-5 h-5 mr-2" />
                        Basic SEO services
                      </div>
                    </li>
                    <li>

                      <div className="inline-flex items-center">
                        <CheckIcon className="w-5 h-5 mr-2" />
                        Social media setup
                      </div>
                    </li>
                    <li>
                     
                      <div className="inline-flex items-center">
                        <CheckIcon className="w-5 h-5 mr-2" />
                        SSL
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="call-btn mt-6">
                  <Link href="/get-started">
                    <div className="inline-flex items-center gap-1 border-2 text-emerald-400 group-hover:text-stone-900 border-emerald-400 group-hover:bg-emerald-500 transition-colors font-medium rounded-full lg:text-md max-lg:text-sm px-6 max-lg:px-4 max-lg:py-2 py-3">
                      Get Started
                      <ArrowLongRightIcon className="w-6 h-6" />
                    </div>
                  </Link>
                </div>
              </div>

              <div className="basis-4/12 group max-md:basis-full border-2 rounded-3xl border-slate-800 p-8 hover:border-emerald-400 transition-colors">
                <div className="pack-icon">
                  <BriefcaseIcon className="w-16 h-16 text-emerald-400" />
                </div>
                <div className="package-title mt-2 text-xl">Premium</div>
                <div className="package-price mt-3 font-bold text-3xl">
                  600.000<span className="text-xl">/kr</span>
                </div>
                <div className="package-list mt-4">
                  <ul className="list-none text-slate-300">
                    <li>
                      <div className="inline-flex items-center">
                        <CheckIcon className="w-5 h-5 mr-2" />A custom-designed
                        website
                      </div>
                    </li>
                    <li>
                      <div className="inline-flex items-center">
                        <CheckIcon className="w-5 h-5 mr-2" />
                        Basic SEO services
                      </div>
                    </li>
                    <li>
                      {" "}
                      <div className="inline-flex items-center">
                        <CheckIcon className="w-5 h-5 mr-2" />
                        Social media setup
                      </div>
                    </li>
                    <li>
                      {" "}
                      <div className="inline-flex items-center">
                        <CheckIcon className="w-5 h-5 mr-2" />
                        SSL
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="call-btn mt-6">
                  <Link href="/get-started">
                    <div className="inline-flex items-center gap-1 border-2 text-emerald-400 group-hover:text-stone-900 border-emerald-400 group-hover:bg-emerald-500 transition-colors font-medium rounded-full lg:text-md max-lg:text-sm px-6 max-lg:px-4 max-lg:py-2 py-3">
                      Get Started
                      <ArrowLongRightIcon className="w-6 h-6" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="packages-selection mt-28">
            <div className="section-title text-center">
              <div className="section-subtitle mb-4 inline-block bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                Subtitle text example
              </div>
              <div className="section-title">
                <h2 className="font-semibold text-3xl">Testimonials</h2>
              </div>
              <div className="section-desc pt-2 text-slate-300">
                Save big on high-quality products and services with limited-time
                offers and discounts across various industries.
              </div>
            </div>
          </div>


          <Swiper className="mt-10 mySwiper"
      spaceBetween={20}
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
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      navigation={false} 
      modules={[Navigation,Autoplay]}

    >
      <SwiperSlide>

      <div className="basis-4/12 relative group max-md:basis-full border-2 rounded-3xl group border-slate-800 p-8 bg-slate-800 hover:bg-emerald-400 transition-colors">
             <ChatBubbleOvalLeftIcon className="w-12 h-12 absolute right-7 top-6 opacity-10 group-hover:opacity-30 group-hover:text-stone-800" />
              <div className="review-avatar">
                <Image
                  className="rounded-full mb-4"
                  src="/review1.png"
                  width="60"
                  height="60"
                />
              </div>
              <div className="flex items-center review-stars">
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <div className="review-text mt-3 group-hover:text-stone-700 text-base">
			Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs
              </div>

              <div className="review-author mt-4">
                <p className="text-lg font-medium group-hover:text-stone-800">Vadim Godonoaga </p>
              </div>

        
            </div>

      </SwiperSlide>
      <SwiperSlide>

      <div className="basis-4/12 relative group max-md:basis-full border-2 rounded-3xl group border-slate-800 p-8 bg-slate-800 hover:bg-emerald-400 transition-colors">
             <ChatBubbleOvalLeftIcon className="w-12 h-12 absolute right-7 top-6 opacity-10 group-hover:opacity-30 group-hover:text-stone-800" />
              <div className="review-avatar">
                <Image
                  className="rounded-full mb-4"
                  src="/review1.png"
                  width="60"
                  height="60"
                  alt="Vadim Godonoga"
                />
              </div>
              <div className="flex items-center review-stars">
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <div className="review-text mt-3 group-hover:text-stone-700 text-base">
			Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs
              </div>

              <div className="review-author mt-4">
                <p className="text-lg font-medium group-hover:text-stone-800">Vadim Godonoaga </p>
              </div>

        
            </div>

      </SwiperSlide>
      <SwiperSlide>
      <div className="basis-4/12 relative group max-md:basis-full border-2 rounded-3xl group border-slate-800 p-8 bg-slate-800 hover:bg-emerald-400 transition-colors">
             <ChatBubbleOvalLeftIcon className="w-12 h-12 absolute right-7 top-6 opacity-10 group-hover:opacity-30 group-hover:text-stone-800" />
              <div className="review-avatar">
                <Image
                  className="rounded-full mb-4"
                  src="/review1.png"
                  width="60"
                  height="60"
                />
              </div>
              <div className="flex items-center review-stars">
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-3 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <div className="review-text mt-3 group-hover:text-stone-700 text-base">
			Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs
              </div>

              <div className="review-author mt-4">
                <p className="text-lg font-medium group-hover:text-stone-800">Vadim Godonoaga </p>
              </div>

        
            </div>
      </SwiperSlide>
      <SwiperSlide>

      <div className="basis-4/12 relative group max-md:basis-full border-2 rounded-3xl group border-slate-800 p-8 bg-slate-800 hover:bg-emerald-400 transition-colors">
             <ChatBubbleOvalLeftIcon className="w-12 h-12 absolute right-7 top-6 opacity-10 group-hover:opacity-30 group-hover:text-stone-800" />
              <div className="review-avatar">
                <Image
                  className="rounded-full mb-4"
                  src="/review1.png"
                  width="60"
                  height="60"
                />
              </div>
              <div className="flex items-center review-stars">
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <div className="review-text mt-3 group-hover:text-stone-700 text-base">
			Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs
              </div>

              <div className="review-author mt-4">
                <p className="text-lg font-medium group-hover:text-stone-800">Vadim Godonoaga </p>
              </div>

        
            </div>

      </SwiperSlide>
      
    </Swiper>


        </div>
        
      </div>
    
      <Footer />

    </div>
  );
}
export default HomePage;
