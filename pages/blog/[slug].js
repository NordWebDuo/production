import Layout from "@/components/Layout";
import { fetcher } from "@/lib/api";
import {
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import markDownToHtml from "@/lib/markDownToHtml";
import Image from "next/image";

const BlogSlug = ({ blog, description }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!blog || !blog.attributes) {
    return <Error404 />;
  }

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-EN", options);
  };

  return (
    <Layout pageTitle={blog.attributes.Title}
            ogPageTitle={blog.attributes.seo.metaTitle}
            pageDescription={blog.attributes.seo.metaDescription}
            metaImage={`${process.env.NEXT_PUBLIC_ASSETS_URL}` + blog.attributes.cover.data.attributes.formats.small.url}
            metaKeywords={blog.attributes.seo.keywords}
            ogUrl={`https://www.nordwebduo.com/blog/${blog.attributes.slug}`}
    >
      <div className="hero-section-alternative"></div>

      <div className="container xl:w-[900px] mt-10 mx-auto">
        <div className="blog-desc mb-10 flex flex-col justify-center">
          <div className="text-2xl md:text-3xl font-medium mb-4">
            {blog.attributes.Title}
          </div>
          <p className="text-slate-400 md:text-lg">
            {blog.attributes.shortDescription}
          </p>
          <div className="inline-flex items-center gap-4 mb-3 mt-7">
            <div className="relative heading-subtitle inline-block bg-emerald-400 bg-opacity-10 px-3 py-1 rounded-full text-white">
              <span className="ml-4 text-sm">
                {blog.attributes.category.data.attributes.title}
              </span>
            </div>

            <div className="inline-flex items-center">
              <CalendarDaysIcon className="w-5 h-5 mr-2 text-emerald-400" />{" "}
              {formatDate(blog.attributes.createdAt)}
            </div>
          </div>
        </div>

       <Image src={`${process.env.NEXT_PUBLIC_ASSETS_URL}` + blog.attributes.cover.data.attributes.url} width="600" height="400" className="w-full h-auto rounded-3xl mb-8 shadow-md" alt={blog.attributes.title} />
           <div
          className="description leading-7 text-slate-400"
          dangerouslySetInnerHTML={{ __html: description }}
        />
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
    const blogResponse = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/blog/${slug}?populate=*`,
      reqOptions
    );
    const description = await markDownToHtml(
      blogResponse.data.attributes.description
    );
    if (!blogResponse || !blogResponse.data) {
      return { notFound: true };
    }

    return {
      props: {
        blog: blogResponse.data,
        description,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default BlogSlug;
