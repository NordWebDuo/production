import useSWR from 'swr';
import axios from 'axios';
import Image from 'next/image';
import NoData from '../NoData';
import Link from 'next/link';
import { ChatBubbleBottomCenterTextIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

const getAuthToken = async () => {
  // Aici ar trebui să fie logica de obținere a token-ului dintr-o sursă securizată
  return process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
};

const fetcherWithAuth = async (url) => {
  const token = await getAuthToken();

  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.data);
};

const ReviewsCarousel = () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/reviews?populate=*`;

  const { data, error } = useSWR(
    apiUrl,
    fetcherWithAuth
  );

  if (error) return <div><NoData /></div>;
  if (!data)return <div>Loading...</div>;
  if (!Array.isArray(data.data)) {
    console.log('Invalid data format:', data);
    return <div>Invalid data format</div>;
  }

  return (
    <div className='grid lg:grid-cols-3'>
       {data.data.map((review) => (
        <Link href={`/portfolio/${review.attributes.portfolio.data.attributes.slug}`} key={review.id}>
          <div className='bg-slate-800 p-10 border border-white border-opacity-5 rounded-3xl hover:bg-slate-700 transition-colors'>
          <ChatBubbleBottomCenterTextIcon className='w-10 h-10 text-emerald-400 mb-4' />
          <p className='italic leading-7'>“ {review.attributes.review} „</p>
          <div className='bottom-info mt-5 flex items-center gap-5'>
          <Image src={`${process.env.NEXT_PUBLIC_ASSETS_URL}` + review.attributes.avatar.data.attributes.url } width={60} height={60} className='rounded-full border-2 border-emerald-400' />
         
         <div className='author-details'>
          <h2 className='text-base font-semibold text-emerald-400'>{review.attributes.author}  <CheckBadgeIcon className='w-5 h-5 inline text-emerald-400' /></h2>
          <div className='text-slate-400 text-sm mt-1'>{review.attributes.client.data.attributes.company_name}</div>
          </div>
          </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ReviewsCarousel;