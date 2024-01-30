"use client";

import ContactForm from "@/components/ContactForm";
import Layout from "@/components/Layout";
import TitleDesc from "@/components/PageTitle";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

function Contact() {
  return (
    <Layout pageTitle={"Contact Us"} 
    ogPageTitle={"Contact Us | NordWebDuo"}
    pageDescription={"Get in Touch with Us: Customer Support and Service Inquiries"}
    ogUrl={`https://www.nordwebduo.com/contact`}
    >
      <TitleDesc
        Title="Contact Us"
        PageDescription="Get in Touch with Us: Customer Support and Service Inquiries"
      />

      <div className="hero-section-alternative"></div>

      <div className="container mx-auto">
        <div className="contact-us-content items-center gap-20 grid md:grid-cols:1 lg:grid-cols-2 mb-24 mt-24">
          <div className="bg-[#111827] border-slate-800 border rounded-3xl p-10">
            <ContactForm />
          </div>
          <div>
            <div className="contact-card">
              <div className="contact-card-content mb-8">
                <h4 className="text-2xl font-semibold text-white mb-3">
                  Let's Talk
                </h4>
                <p className="text-slate-300">
                  We are a dynamic team comprised of talented designers,
                  developers, and marketing experts.
                </p>
              </div>

              <div className="flex gap-5 items-center mb-5">
                <div className="icon bg-emerald-400 p-3 rounded-full">
                  <PhoneIcon className="w-6 h-6 text-emerald-900" />
                </div>
                <div className="contact-card-info">
                  <h5 className="text-base text-white mb-1">Phone</h5>
                  <p className="text-slate-400">+40 123 456 789</p>
                </div>
              </div>

              <div className="flex gap-5 items-center mb-5">
                <div className="icon bg-emerald-400 p-3 rounded-full">
                  <EnvelopeIcon className="w-6 h-6 text-emerald-900" />
                </div>
                <div className="contact-card-info">
                  <h5 className="text-base text-white mb-1">Email</h5>
                  <p className="text-slate-400">contact@nordwebduo.com</p>
                </div>
              </div>

              <div className="flex gap-5 items-center ">
                <div className="icon bg-emerald-400 p-3 rounded-full">
                  <MapPinIcon className="w-7 h-7 text-emerald-900" />
                </div>
                <div className="contact-card-info">
                  <h5 className="text-base text-white mb-1">Our location</h5>
                  <p className="text-slate-400">Reykjavik, Iceland</p>
                </div>
              </div>

              <div className="social">
                <h5 className="text-base text-white mb-1 mt-8">Follow us</h5>
                <div className="flex gap-3 mt-3">
                  <a
                    href="#"
                    className="social-icon bg-slate-800 group transition-colors hover:bg-emerald-400 p-3 rounded-full"
                  >
                    <svg
                      className="w-4 h-4 text-white  group-hover:text-emerald-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 8 19"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="social-icon bg-slate-800 group transition-colors hover:bg-emerald-400 p-3 rounded-full"
                  >
                    <svg className="w-4 h-4 text-white group-hover:text-emerald-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
    <path fillRule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd"/>
    <path d="M3 5.012H0V15h3V5.012Z"/>
  </svg>
    
                  </a>
                  <a
                    href="#"
                    className="social-icon bg-slate-800 group transition-colors hover:bg-emerald-400 p-3 rounded-full"
                  >
                   <svg className="w-4 h-4 text-white group-hover:text-emerald-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path fill="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"/>
  </svg>
  
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
