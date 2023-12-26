import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

function PortfolioCard({portfolio}) {
    return(
        <div key={portfolio.id} className=" group transition mb-8 ">
     <Image
         src={'http://127.0.0.1:1337' + portfolio.attributes.cover.data.attributes.url}
         width="600"
         height="400"
         className="w-full h-auto rounded-3xl mb-4 shadow-md"
         alt={portfolio.attributes.title}
         priority
     />
     <span className="mt-3 bg-emerald-400 text-slate-800 px-3 py-1 rounded-full text-sm">{portfolio.attributes.portfolio_categories.data[0].attributes.title}</span>
     <h3 className="mt-3 font-medium text-base lg:text-xl"> <Link href={'/portfolio/' + portfolio.attributes.slug}> {portfolio.attributes.title}  </Link></h3>
     <Link
         className="mt-3 group-hover:text-emerald-400 text-slate-500 group-hover:border-emerald-400 font-normal text-sm lg:text-base hover:border-b pb-1 border-b border-b-transparent inline-flex"
         href={'/portfolio/' + portfolio.attributes.slug}
     >
         View brief <ArrowLongRightIcon className="w-6 h-6 ml-2" />
     </Link>
 </div>
    );
}

export default PortfolioCard;