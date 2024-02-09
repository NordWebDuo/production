import Head from "next/head";
import Footer from "./FooterNav";
import Header from "./Navigation";


const Layout = ({ children, pageTitle, pageDescription, ogPageTitle,metaImage,metaKeywords,ogUrl }) => (
    <>
    <Head>
        <title>{pageTitle ? `${pageTitle} | NordWebDuo` : 'NordWebDuo'}</title>
        <meta
          name="description"
          content={pageDescription ? pageDescription : 'Innovative digital agency that specializes in creating high-quality websites and digital marketing strategies.'}
        />
        <meta name="keywords" content={metaKeywords ? metaKeywords : 'Web Design Iceland, Web Design, Digital Agency, Website, SEO Iceland'} />
        <meta property="og:title" content={ogPageTitle ? ogPageTitle : 'NordWebDuo'} />
        <meta property="og:description" content={pageDescription ? pageDescription : 'Innovative digital agency that specializes in creating high-quality websites and digital marketing strategies.'} />
        <meta property="og:image" content={metaImage ? metaImage : 'https://app.nordwebduo.com/uploads/Nord_Web_Duo_bf70fa3229.jpg'} />
        <meta property="og:url" content={ogUrl ? ogUrl : 'https://www.nordwebduo.com'} /> 
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://app.nordwebduo.com/uploads/favicon_32x32_88df5d0db5.png" />
        <meta http-equiv="Content-Security-Policy" content="script-src 'none'" />
    </Head>
    <Header />
    <main>
        <div className="pt-36 md:pt-48 lg:pt-52 xl:pt-52 px-5">{children}</div>
    </main>
    <Footer />
    </>
)

export default Layout;