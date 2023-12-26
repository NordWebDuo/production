import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

const Blogs = ({blogs}) => {
    
    const [visibleBlogs, setVisibleBlogs] = useState(6); // Afiseaza initial primele 3 bloguri
    const increment = 3; // Numarul de bloguri adaugate la fiecare apasare pe butonul "load more"
  
    const handleLoadMore = () => {
      setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + increment);
    };

    return (
        <>
       {blogs &&
        blogs.data.slice(0, visibleBlogs).map((blog) => {
          return (
            
               <div key={blog.id} className="basis-1/3 group transition hover:bg-slate-700 border border-white border-opacity-5 p-5 rounded-3xl bg-gray-800 ">
                 
                    <Image
                      src={'http://127.0.0.1:1337' + blog.attributes.cover.data.attributes.url}
                      width="600"
                      height="400"
                      className="w-full h-auto rounded-3xl mb-4 shadow-md"
                      alt={blog.attributes.Title}
                    />
                   <span className="mt-3 bg-emerald-400 text-slate-800 px-3 py-1 rounded-full text-sm">{blog.attributes.categories.data[0].attributes.title}</span>
                    <h3 className="mt-3 font-medium text-lg"> <Link href={'/blog/' + blog.attributes.slug}> {blog.attributes.Title}  </Link></h3>
                    <p className="text-slate-400 group-hover:text-slate-300 mt-2">{blog.attributes.shortDescription}</p>
                </div>
                
            );
            })}
             {visibleBlogs < blogs.data.length && (
    <div className="flex mt-5">
    <button onClick={handleLoadMore} className="inline-flex items-center gap-1 border-2 text-emerald-400 hover:text-stone-900 border-emerald-400 hover:bg-emerald-500 transition-colors font-medium rounded-full lg:text-md max-lg:text-sm px-6 max-lg:px-4 max-lg:py-2 py-3">
    View more
    <ArrowLongRightIcon className="w-6 h-6" />
  </button>
  </div>
      )}
        </>
    );
};

export default Blogs;