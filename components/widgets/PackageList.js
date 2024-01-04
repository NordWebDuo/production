import { ArrowLongRightIcon, CheckIcon, RocketLaunchIcon, StarIcon, TrophyIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import NoData from "../NoData";
import { useState, useEffect } from "react";
import axios from 'axios';

function PackageList() {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const packageIcons = {
        Basic: StarIcon,
        Advanced: TrophyIcon,
        Premium: RocketLaunchIcon,
    };

    useEffect(() => {
        const fetchProfileData = async () => {
          try {
            const response = await axios.get(
              `${process.env.NEXT_PUBLIC_STRAPI_URL}/packages?populate=*`,
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
            {data.data.map((service, index) => {
                const IconComponent = packageIcons[service.attributes.title]; 

                return (
               
        <div className="group max-md:basis-full border-2 rounded-3xl border-slate-800 p-8 hover:border-emerald-400 transition-colors">
                <div className="pack-icon mb-5">
               
                {IconComponent && <IconComponent className="w-16 h-16 text-emerald-400" />}

                </div>
                <div className="package-title mt-2 text-xl">{service.attributes.title}</div>
                <div className="package-price mt-3 font-bold text-3xl">
                  {service.attributes.price}<span className="text-xl">/kr</span>
                </div>
                <div className="package-list mt-4">
                  <ul className="list-none text-slate-300">

                  {service.attributes.services.map((individualService, serviceIndex) => (
              <li key={serviceIndex}>
                <div className="inline-flex items-center">
                  <CheckIcon className="w-5 h-5 mr-2" />
                  {individualService.service_name}
                </div>
              </li>
            ))}

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
              );
            })}
        </div>
    )
}

export default PackageList;