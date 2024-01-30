import HeadingTitle from "@/components/HeadingTitle";
import HerroGallery from "@/components/HeroGallery";
import Layout from "@/components/Layout";
import TitleDesc from "@/components/PageTitle";
import BrandsCarousel from "@/components/widgets/BrandsCarousel";
import PortfolioCarousel from "@/components/widgets/PortfolioCarousel";
import DefaultButton from "@/components/widgets/buttons/DefaultButton";
import CardText from "@/components/widgets/buttons/cards/CardText";
import StatCard from "@/components/widgets/buttons/cards/StatCard";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

function About() {
  return (
    <Layout
      pageTitle="About Us"
      pageDescription="We are a dynamic team comprised of talented designers, developers, and marketing experts."
      ogUrl={"https://www.nordwebduo.com/about"}
      ogPageTitle="About Us | NordWebDuo"
    >
      <div className="hero-section-alternative"></div>

      <TitleDesc
        Title="About Us"
        PageDescription="We are a dynamic team comprised of talented designers, developers, and marketing experts. "
      />

      <div className="about-us">
        <div className="container mx-auto mt-14">
          <div className="about-us-content items-center gap-14 grid md:grid-cols:1 lg:grid-cols-2 mb-10 lg:mb-24 mt-24">
            <div className="image">
              <HerroGallery />
            </div>

            <div className="about-content text-base lg:text-base">
              <div className="relative -z-[1] heading-subtitle inline-block bg-emerald-400 bg-opacity-10 px-3 py-1 rounded-full text-white mb-5">
                <span className="ml-4 text-sm">About Us</span>
              </div>
              <h1 className="mb-3 text-emerald-400 font-semibold">
                Who We Are
              </h1>
              <div className="mt-6 mb-10 leading-7">
                <p className="mb-2 font-medium">
                  Nord Web Duo, headquartered in the picturesque landscapes of
                  Iceland.
                </p>
                <p className=" mb-4">
                  Is a pioneering digital agency renowned for crafting
                  superior-quality websites and devising comprehensive digital
                  marketing strategies aimed at bolstering engagement and
                  amplifying conversion rates.
                </p>

                <p className="mb-4">
                  Boasting a team of seasoned professionals, Nord Web Duo brings
                  together a diverse mix of talents, including adept developers,
                  innovative designers, and astute marketing experts.{" "}
                </p>

                <p>
                  This skilled ensemble is deeply committed to thoroughly
                  comprehending the distinct business objectives of their
                  clients and meticulously customizing their services to align
                  with those specific goals.
                </p>
              </div>
              <DefaultButton
                Source={"/portfolio"}
                Title={"Explore our Works"}
                Icon={ArrowUpRightIcon}
                color="bordered"
                iconPosition="right"
              />
            </div>
          </div>
         <div className="mb-20 mt-20">
          <BrandsCarousel />
          </div>

          <div className="our-stats grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-12">
            <StatCard endValue={24} title={"Projects completed"} />
            <StatCard endValue={30} title={"Happy clients"} />
            <StatCard endValue={200} title={"Cups of coffee"} />
            <StatCard endValue={6} title={"Years of experience"} />
            <StatCard endValue={4} title={"Team members"} />
          </div>

         <div className="text-3xl mt-20">Our Values</div>

          <div className="values grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            <CardText
              number={"01."}
              title={"We are specialized"}
              description={
                "We develop unique digital experiences based on user insights, our expertise and proved data. We study the market, your competitors, and more importantly, your customers. We do the heavy lifting for you."
              }
            />

            <CardText
              number={"02."}
              title={"We are responsive"}
              description={
                "We always keep door open in communication both with client and teammates. Everyone’s feedback is valuable, and we're never too busy to hear it. This is more than listening and discussion. It is about finding the right way."
              }
            />

            <CardText
              number={"03."}
              title={"We focus on results"}
              description={
                "We carefully consider every project we take on because when we commit, we always bring 100%, and even a bit more. We are driven by a desire to provide best experience which exceeds a client's expectation."
              }
            />

            <CardText
              number={"04."}
              title={"We work smart"}
              description={
                "We approach every challenge with an open mind. We are not afraid to experiment, try something new or combine things that no one has done before. This keeps us sharp and brings unique solutions to our clients."
              }
            />
          </div>

          
          <div className="text-3xl mt-20">Our Works</div>
          
            <PortfolioCarousel />
        
        </div>
      </div>
    </Layout>
  );
}

export default About;
