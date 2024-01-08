import Head from "next/head";
import Footer from "./FooterNav";
import Header from "./Navigation";


const Layout = ({ children, pageTitle, pageDescription, ogPageTitle,metaImage }) => (
    <>
    <Head>
        <title>{pageTitle ? `${pageTitle} | NordWebDuo` : 'NordWebDuo'}</title>
        <meta
          name="description"
          content={pageDescription ? pageDescription : 'Writer is designed to help you generate high-quality texts instantly Based on WoodMart theme 2023 WooCommerce Themes.'}
        />

        <meta property="og:title" content={ogPageTitle ? ogPageTitle : 'NordWebDuo'} />
        <meta property="og:description" content={pageDescription ? pageDescription : 'Writer is designed to help you generate high-quality texts instantly Based on WoodMart theme 2023 WooCommerce Themes.'} />
        <meta property="og:image" content={metaImage ? metaImage : 'http://localhost:1337/uploads/Euro_Performance_Full_e38dce6643.jpg'} />
         
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </Head>
    <Header />
    <main>
        <div className="pt-36 md:pt-30 lg:pt-52 px-5">{children}</div>
    </main>
    <Footer />
    </>
)

export default Layout;