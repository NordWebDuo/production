import Layout from "@/components/Layout";
import { fetcher } from "@/lib/api";
import { CalendarDaysIcon, TagIcon, UserIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import Image from "next/image";
import markDownToHtml from "@/lib/markDownToHtml";
import { Badge } from "flowbite-react";

const BlogSlug = ({ blog, description }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!blog || !blog.attributes) {
    // Redirecționează către pagina de eroare 404 a Next.js dacă nu există blogul sau atributul dorit
    return <Error404 />;
  }

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-EN', options);
  }

  return (
    <Layout pageTitle={blog.attributes.Title}>

<div className="hero-section-alternative"></div>
      
     
        <div className='container mt-10 mx-auto'>
          <div className="blog-desc mb-10 flex flex-col justify-center">
        
          
        <div className="text-2xl md:text-3xl font-medium mb-4">{blog.attributes.Title}</div>
                    <p className="text-slate-400 md:text-lg">{blog.attributes.shortDescription}</p>
                    <div className="inline-flex items-center gap-4 mb-3 mt-3">
          <div className="relative heading-subtitle inline-block bg-emerald-400 bg-opacity-10 px-3 py-1 rounded-full text-white">
                <span className="ml-4 text-sm">{blog.attributes.category.data.attributes.title}</span>
              </div>

           <div className="inline-flex items-center"> <CalendarDaysIcon className='w-5 h-5 mr-2 text-emerald-400' /> {formatDate(blog.attributes.createdAt)}</div>
           </div>
                    </div>


                    <div className='pt-32 pb-32 md:pt-60 md:pb-60 rounded-3xl container mx-auto' style={{ 
           backgroundImage: `url(http://localhost:1337${blog.attributes.cover.data.attributes.url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition:'center'
        }}>

          </div>

        <div className="description leading-7 text-slate-400" dangerouslySetInnerHTML={{__html: description}} />
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
    const blogResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/blog/${slug}?populate=*`, reqOptions);
    const description = await markDownToHtml(blogResponse.data.attributes.description);
    if (!blogResponse || !blogResponse.data) {
      return { notFound: true };
    }

    return {
      props: {
        blog: blogResponse.data,
        description
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default BlogSlug;