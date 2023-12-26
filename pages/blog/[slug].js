import Layout from "@/components/Layout";
import { fetcher } from "@/lib/api";
import { CalendarDaysIcon, TagIcon, UserIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import Image from "next/image";

const BlogSlug = ({ blog }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!blog || !blog.attributes) {
    // Redirecționează către pagina de eroare 404 a Next.js dacă nu există blogul sau atributul dorit
    return <Error404 />;
  }

  return (
    <Layout pageTitle={blog.attributes.Title}>
      
        <div className='pt-32 pb-32 md:pt-60 md:pb-60 rounded-3xl container mx-auto' style={{ 
           backgroundImage: `url(http://localhost:1337${blog.attributes.cover.data.attributes.url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition:'center'
        }}>

          </div> 
        <div className='container mt-10 mx-auto'>
          <div className="blog-desc mb-10">
        <div className="text-2xl md:text-3xl font-medium mb-4">{blog.attributes.Title}</div>
                    <p className="text-slate-400 md:text-lg">{blog.attributes.shortDescription}</p>
                    <div className="flex flex-wrap gap-8 items-center mt-4">
                    <div className="avatar -mr-4">
                        <Image className="rounded-full" src="/blog.jpg" width="50" height="50" />
                    </div>
                    <div className="blog-info text-left">
                     <div className="text-sm text-slate-400 inline-flex"> Author</div>
                     <div className="font-medium">Andrei</div> 
                    </div>
                    <div className="blog-info text-left">
                     <div className="text-sm text-slate-400 inline-flex"><CalendarDaysIcon className='w-5 h-5 mr-2' /> Posted</div>
                     <div className="font-medium">26 nov, 2023</div> 
                    </div>
                    <div className="blog-info text-left">
                     <div className="text-sm text-slate-400 inline-flex"><TagIcon className='w-5 h-5 mr-2' /> Category</div>
                     <div className="font-medium">SEO</div> 
                    </div>
                    </div>
                    </div>

        <div className="leading-7 text-slate-400" dangerouslySetInnerHTML={{__html: blog.attributes.description}} />
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

    if (!blogResponse || !blogResponse.data) {
      return { notFound: true };
    }

    return {
      props: {
        blog: blogResponse.data,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default BlogSlug;