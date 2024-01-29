import Image from "next/image";
import Link from "next/link";

const Blogs = ({blogs}) => {
    
    return (
        <>
       {blogs &&
        blogs.data.map((blog) => {
          return (
            
               <div key={blog.id} className="basis-1/3 group transition hover:bg-slate-700 border border-white border-opacity-5 p-5 rounded-3xl bg-gray-800 ">
                 
                    <Image
                      src={`${process.env.NEXT_PUBLIC_ASSETS_URL}` + blog.attributes.cover.data.attributes.formats.small.url}
                      width="500"
                      height="283"
                      className="w-full h-auto rounded-3xl mb-4 shadow-md"
                      alt={blog.attributes.Title}
                    />
                   <span className="mt-3 bg-emerald-400 text-slate-800 px-3 py-1 rounded-full text-sm">{blog.attributes.category.data.attributes.title}</span>
                    <h3 className="mt-3 font-medium text-lg"> <Link href={'/blog/' + blog.attributes.slug}> {blog.attributes.Title}  </Link></h3>
                    <p className="text-slate-400 group-hover:text-slate-300 mt-2">{blog.attributes.shortDescription}</p>
                </div>
                
            );
            })}
          
        </>
    );
};

export default Blogs;