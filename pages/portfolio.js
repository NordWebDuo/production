import { useState } from 'react';
import Layout from "@/components/Layout";
import TitleDesc from "@/components/PageTitle";
import Portfolios from "@/components/PortfolioCard";
import { fetcher } from "@/lib/api";
import ButtonBordered from '@/components/ButtonOnClick';

const PortfolioList = ({ portfolios, categories }) => {
    const [filteredPortfolios, setFilteredPortfolios] = useState(portfolios);
    const [selectedCategory, setSelectedCategory] = useState('All Works');

    const [displayCount, setDisplayCount] = useState(6); // Inițializează cu numărul de elemente afișate inițial

const handleViewMore = () => {
    // Incrementează numărul de elemente afișate când se apasă butonul "View more"
    setDisplayCount(displayCount + 3); // Poți ajusta numărul de elemente afișate după necesități
};

if (!categories || !portfolios) {
    return (
        <Layout pageTitle="Our Works"
        ogPageTitle="Portfolio | NordWebDuo"
        pageDescription="People friendly digital experiences"
        ogUrl={`https://www.nordwebduo.com/portfolio`}
        >
        <TitleDesc 
            Title="Our Works"
            PageDescription="We use an agile approach to test assumptions and connect with the needs of your audience early and often."
        />
        <div className="container mx-auto mt-14">
            <p className="text-center text-rose-500">Oops! There was an error fetching the portfolio posts. Please try again later.</p>
        </div>
    </Layout>
    );
}


    const handleFilter = (category) => {
        setSelectedCategory(category);
        if (category === 'All Works') {
            setFilteredPortfolios(portfolios);
        } else {
            const filtered = portfolios.filter((portfolio) => {
                const portfolioCategories = portfolio.attributes.portfolio_categories?.data || [];
                return portfolioCategories.some(
                    (cat) => cat.attributes.title === category
                );
            });
            setFilteredPortfolios(filtered);
        }
    };

    return (
        <Layout 
        pageTitle="Portfolio"
        ogPageTitle="Portfolio | NordWebDuo"
        pageDescription="People friendly digital experiences"
        ogUrl={`https://www.nordwebduo.com/portfolio`}
        >

<div className="hero-section-alternative"></div>

            <TitleDesc 
                Title="Our Works"
                PageDescription="People friendly digital experiences"
            />
            <div className="container mx-auto mt-10">
                {/* Afișează lista de categorii */}
                <div className="flex flex-wrap justify-center gap-4 mb-10 ">
                    {categories.map((category, index) => (
                        <button key={index} onClick={() => handleFilter(category)}
                        className={selectedCategory === category ? 'transition-all bg-emerald-400 px-5 py-2 text-slate-800 rounded-full' : 'transition-all px-5 py-2 bg-slate-800 rounded-full hover:bg-slate-700'}>
                            {category}
                        </button>
                    ))}

                </div>
                {/* Afiseaza portofoliile filtrate */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                {filteredPortfolios.slice(0, displayCount).map((portfolio, index) => (
                    <Portfolios key={index} portfolios={[portfolio]} />
                    ))}
                </div>
            </div>
            {filteredPortfolios.length > displayCount && (
                <div className="flex justify-center mt-5">
                 <ButtonBordered Title="View More" onClick={handleViewMore} />
                </div>
            )}
        </Layout>
    );
};

export default PortfolioList;

export async function getServerSideProps() {

    

    const reqOptions = {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
    };

    try {
        const portfolioResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/portfolios?populate=*`, reqOptions);

        if (!portfolioResponse || portfolioResponse.error) {
            return {
                props: {
                    error: "Eroare la preluarea datelor de la sursa specificată."
                }
            };
        }

        let categories = [];

        if (portfolioResponse.data && portfolioResponse.data.length > 0) {
            portfolioResponse.data.forEach((portfolio) => {
                const portfolioCategories = portfolio.attributes.portfolio_categories?.data || [];
                portfolioCategories.forEach((category) => {
                    const categoryName = category.attributes.title;
                    if (!categories.includes(categoryName)) {
                        categories.push(categoryName);
                    }
                });
            });
        }

        // Verificare și adăugare 'All' doar dacă nu există în listă
        if (!categories.includes('All Works')) {
            categories.unshift('All Works');
        }

        return {
            props: {
                portfolios: portfolioResponse.data,
                categories: categories
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