import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

function BlogHome() {
    return(
        <div>
            <Header />
            <div className="porftolio-selection mt-28 max-md:mt-10 container mx-auto">


                <div className="categories">
                    <div className="page-title text-6xl mb-10 justify-center flex">All our works</div>
                    <ul className="flex gap-5 items-center justify-center font-semibold text-lg">
                        <li>All</li>
                        <li>Web Design</li>
                        <li>Web Development</li>
                        <li>E-Commerce</li>
                    </ul>
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
            
                <div className="inline-flex items-center gap-1 border-2 text-emerald-400 hover:text-stone-900 border-emerald-400 hover:bg-emerald-500 transition-colors font-medium rounded-full lg:text-md max-lg:text-sm px-6 max-lg:px-4 max-lg:py-2 py-3">
                  View more
                  <ArrowLongRightIcon className="w-6 h-6" />
                </div>
              </Link>
            </div>
          </div>
            <Footer />
        </div>
    )
}

export default BlogHome;