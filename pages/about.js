import Layout from "@/components/Layout";
import TitleDesc from "@/components/PageTitle";
import CardText from "@/components/widgets/buttons/cards/CardText";
import StatCard from "@/components/widgets/buttons/cards/StatCard";
import Image from "next/image";

function About() {
  return (
    <Layout
      pageTitle="About Us"
      pageDescription="Aceasta este pagina titlu"
      ogPageTitle="About Us | NordWebDuo"
    >
      <div className="hero-section-alternative"></div>

      <TitleDesc
        Title="About Us"
        PageDescription="We are a dynamic team comprised of talented designers, developers, and marketing experts. "
      />
        

        <div className="about-us">
 

      <div className="container mx-auto mt-14">
      
      <div className="about-us-content items-center gap-10 grid md:grid-cols:1 lg:grid-cols-2 mb-24 mt-24">

        <div className="image">
          <Image className="rounded-3xl" src="/OIG.jpg" width={600} height={400} alt="about us" />
        </div>

        <div className="about-content text-lg">
       <p className="mb-5"> Nord Web Duo is an innovative digital agency that specializes in creating high-quality websites and digital marketing strategies designed to drive engagement and increase conversions.</p>

        <p>The team, consisting of experienced developers, designers, and marketing experts, is dedicated to understanding their clients unique business needs and tailoring their solutions to achieve the desired outcome. Nord Web Duo prides itself on its ability to deliver exceptional results on time and within budget.</p>
        </div>

      </div>
     
      <div className="section-title">
          <h2 className="text-2xl md:text-3xl font-medium text-center mb-10">
            In numbers
          </h2>
        </div>


      <div className="our-stats grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-12">
      <StatCard endValue={24} title={"Projects completed"} />
      <StatCard endValue={30} title={"Happy clients"} />
      <StatCard endValue={200} title={"Cups of coffee"} />
      <StatCard endValue={6} title={"Years of experience"} />
      <StatCard endValue={4} title={"Team members"} />
      </div>

        <div className="section-title">
          <h2 className="text-2xl md:text-3xl font-medium text-center mb-10">
            Our Values
          </h2>
        </div>

        <div className="values grid grid-cols-1 md:grid-cols-2 gap-5">
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
        </div>
      </div>
    </Layout>
  );
}

export default About;
