'use client'
import Blogs from "@/components/Blogscard";
import Layout from "@/components/Layout";
import TitleDesc from "@/components/PageTitle";
import { fetcher } from "@/lib/api";
import { useState } from "react";

const BlogList = ({blogs}) => {

    const [visibleBlogs, setVisibleBlogs] = useState(6);

  const handleViewMore = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3);
  };
 
    if (!blogs || blogs.error) {
        return (
            <Layout pageTitle="Blog">
                <TitleDesc 
                    Title="Our Blog"
                    PageDescription="Explore our digital musings and discover the latest insights, stories, and ideas."
                />
                <div className="container mx-auto mt-14">
                    <p className="text-center">Oops! There was an error fetching the blog posts. Please try again later.</p>
                </div>
            </Layout>
        );
    }

    return (

      <Layout pageTitle="Blog"
      ogPageTitle="Blog | NordWebDuo"
      pageDescription={"Explore our digital musings and discover the latest insights, stories, and ideas."}
      ogPageDescription={"Explore our digital musings and discover the latest insights, stories, and ideas."}
      >
        <TitleDesc 
        Title="Our Blog"
        PageDescription="Explore our digital musings and discover the latest insights, stories, and ideas."
        
        />

<div className="hero-section-alternative"></div>
        
        <div className="container mx-auto mt-14">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
         
         <Blogs blogs={blogs} visibleBlogs={visibleBlogs} />

         {visibleBlogs < blogs.length && (
          <div className="flex justify-center mt-5">
            <ButtonBordered Title="View More" onClick={handleViewMore} />
          </div>
        )}

         </div>
         </div>
      </Layout>
    )
}

export default BlogList;

export async function getServerSideProps() {
    const reqOptions = {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
    };

    try {
        const blogResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?populate=*`, reqOptions);

        if (!blogResponse || blogResponse.error) {
            return {
                props: {
                    error: "Eroare la preluarea datelor de la sursa specificată."
                }
            };
        }

        return {
            props: {
                blogs: blogResponse
            },
        };
    } catch (error) {
        return {
            props: {
                error: "A intervenit o eroare în timpul preluării datelor."
            }
        };
    }
}