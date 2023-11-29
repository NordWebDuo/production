'use-client';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";
import Image from "next/image";
import axios from 'axios';
import { Spinner } from 'flowbite-react';

import { useState, useEffect } from 'react';


function Posts() {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('All'); // Categoria selectată pentru filtrare
   
    useEffect(() => {
        const fetchData = async () => {
          try {
            const [postsResponse, categoriesResponse] = await Promise.all([
              axios.get('https://www.panel.nordwebduo.com/api/posts'),
              axios.get('https://www.panel.nordwebduo.com/api/categories')
            ]);
    
            const postsData = postsResponse.data;
            const categoriesData = categoriesResponse.data;
    
            const updatedPostsData = postsData.map(post => {
              const category = categoriesData.find(category => category.id === post.category_id);
              return {
                ...post,
                category: category ? category.name : 'Unknown', // Aici asociezi numele categoriei
                category_slug: category ? category.slug : 'unknown-slug'
              };
            });
    
            setData(updatedPostsData);
            setLoading(false);
          } catch (error) {
            console.error('Eroare la preluarea datelor:', error);
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
   
    // Funcție pentru formatarea datei într-un format specific (de exemplu, 'dd MMM yyyy HH:mm')
  const formatDateTime = (dateTimeString) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return new Date(dateTimeString).toLocaleDateString('is-IS', options);
  };

  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredData = selectedCategory === 'All'
    ? data
    : data.filter(post => post.category === selectedCategory);


   
    return (
        <div>
        <Header />

        <div className="page-title text-center mt-24">
                    <div className="text-5xl mb-4">Our Blog</div>
                    <p className="text-slate-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
                </div>
                  
                
                {data && (
  <div className="categories-list mt-10 flex gap-3 justify-center align-middle transition-all ease-in-out">
    {/* Afișează categoria "All categories" */}
    <div
      className={selectedCategory === 'All' ? 'bg-emerald-400 px-4 py-1 rounded-2xl text-stone-800 cursor-pointer transition-all ease-in-out border border-transparent' : 'cursor-pointer px-4 py-1 border border-white border-opacity-20 rounded-2xl hover:bg-emerald-500 hover:text-stone-800 transition-all'}
      onClick={() => filterByCategory('All')}
    >
      All
    </div>

    {/* Creează un set pentru a elimina duplicatele înainte de afișare */}
    {Array.from(new Set(data.map(post => post.category))).map(category => (
      <div
        key={category}
        className={selectedCategory === category ? 'bg-emerald-400 px-4 py-1 rounded-2xl text-stone-800 cursor-pointer transition-all ease-in-out border border-transparent' : 'cursor-pointer px-4 py-1 border border-white border-opacity-20 rounded-2xl hover:bg-emerald-500 hover:text-stone-800 transition-all'}
        onClick={() => filterByCategory(category)}
      >
        {category}
      </div>
    ))}
  </div>
)}

      
        {isLoading ? (
         <div className="container mx-auto"> 
         <div className="flex justify-center mt-14 mb-14">
         <Spinner aria-label="Loading" /> 
         </div>
         </div>
        ) : (
          // Verificare pentru existenta datelor
          !data ? <p>Something went wrong</p> : (
            <div className="container mx-auto mt-14">
            
                <div className="grid grid-cols-3 gap-5 transition-all ease-in-out">
                {filteredData.map((post) => (
                <div className="basis-1/3 group transition hover:bg-slate-700 border border-white border-opacity-5 p-5 rounded-3xl bg-gray-800 " key={post.id}>
                 
                    <Image
                      src={'https://www.panel.nordwebduo.com/storage/' + post.image}
                      width="600"
                      height="300"
                      className="w-auto h-auto rounded-3xl mb-4 shadow-md"
                      alt={post.title}
                    />
                   <Link href={'/blog/' + post.category_slug}> <span className="mt-3 bg-emerald-400 text-slate-800 px-3 py-1 rounded-full text-sm">{post.category}</span></Link>
                    <h3 className="mt-3 font-medium text-lg"> <Link href={'/blog/' + post.category_slug + '/' + post.slug}> {post.title}  </Link></h3>
                    <p className="text-slate-400 group-hover:text-slate-300 mt-2">{post.excerpt}</p>
                    <div className="flex gap-3 items-center mt-4">
                    <div className="avatar">
                        <Image className="rounded-full" src="/blog.jpg" width="50" height="50" />
                    </div>
                    <div className="blog-info">
                        <div className="font-medium">Andrei</div>
                        <div className="text-sm text-slate-400">{formatDateTime(post.created_at)}</div>
                    </div>
                    </div>
                </div>
              ))}
              </div>
            </div>
          )
        )}
        <Footer />
      </div>
    );
  }

  export default Posts;