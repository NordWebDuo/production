(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{2879:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about-us",function(){return s(2253)}])},1157:function(e,t,s){"use strict";var a=s(5893),r=s(5675),i=s.n(r);t.Z=function(){let e=[{src:"https://app.nordwebduo.com/uploads/Hero1_f3cf2589fa.png",width:599,height:450,alt:"TailwindCSS"},{src:"https://app.nordwebduo.com/uploads/Hero3_478c6b7a2c.png",width:599,height:450,alt:"Flowbite React"},{src:"https://app.nordwebduo.com/uploads/Hero2_d22924427b.png",width:599,height:450,alt:"Elementor"},{src:"https://app.nordwebduo.com/uploads/Hero4_2e48b2b0cf.png",width:599,height:450,alt:"Wordpress"},{src:"https://app.nordwebduo.com/uploads/Hero6_c181f3125a.png",width:599,height:450,alt:"Woocommerce"},{src:"https://app.nordwebduo.com/uploads/Hero5_3c6290bbb2.png",width:599,height:450,alt:"Next.JS"}];return(0,a.jsxs)("div",{className:"overflow-y-hidden grid grid-cols-2 h-[350px] md:h-[500px] herrogallery gap-5",children:[(0,a.jsxs)("div",{className:"flow-1 flex flex-col gap-5",children:[(0,a.jsx)("div",{className:"carousel-vertical flex flex-col gap-5",children:e.map((e,t)=>(0,a.jsx)(i(),{src:e.src,width:e.width,height:e.height,alt:e.alt,priority:!0},t))}),(0,a.jsx)("div",{className:"carousel-vertical flex flex-col gap-5",children:e.map((e,t)=>(0,a.jsx)(i(),{src:e.src,width:e.width,height:e.height,alt:e.alt,priority:!0},t))})]}),(0,a.jsxs)("div",{className:"flow-2 flex flex-col gap-5",children:[(0,a.jsx)("div",{className:"carousel-vertical-down flex flex-col gap-5",children:e.map((e,t)=>(0,a.jsx)(i(),{src:e.src,width:e.width,height:e.height,alt:e.alt,priority:!0},t))}),(0,a.jsx)("div",{className:"carousel-vertical-down flex flex-col gap-5",children:e.map((e,t)=>(0,a.jsx)(i(),{src:e.src,width:e.width,height:e.height,alt:e.alt,priority:!0},t))})]})]})}},5808:function(e,t,s){"use strict";var a=s(5893),r=s(6947);t.Z=function(){return(0,a.jsxs)("div",{className:"flex justify-center items-center gap-2 mt-5 bg-slate-800 rounded-3xl p-4",children:[(0,a.jsx)(r.Z,{className:"text-rose-600 w-6 h-6 "}),(0,a.jsx)("span",{className:"text-rose-600",children:" Something went wrong"})]})}},9741:function(e,t,s){"use strict";var a=s(5893);t.Z=e=>{let{Title:t,PageDescription:s}=e;return(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("h1",{className:"text-3xl md:text-4xl lg:text-5xl mb-4",children:t}),(0,a.jsx)("p",{className:"text-slate-400 w-full md:w-2/3 mx-auto",children:s})]})}},9765:function(e,t,s){"use strict";s.d(t,{Z:function(){return x}});var a=s(5893),r=s(7294),i=s(5121),l=s(1173),d=s(5675),o=s.n(d),n=s(1664),c=s.n(n),h=function(e){let{portfolio:t}=e;return(0,a.jsxs)("div",{className:" group transition mb-8 ",children:[(0,a.jsx)(o(),{src:"".concat("https://app.nordwebduo.com")+t.attributes.cover.data.attributes.formats.small.url,width:"600",height:"400",className:"w-full h-auto rounded-3xl mb-4 shadow-md",alt:t.attributes.title,priority:!0}),(0,a.jsx)("span",{className:"mt-3 bg-emerald-400 text-slate-800 px-3 py-1 rounded-full text-sm",children:t.attributes.portfolio_categories.data[0].attributes.title}),(0,a.jsxs)("h3",{className:"mt-3 font-medium text-base lg:text-xl",children:[" ",(0,a.jsxs)(c(),{href:"/portfolio/"+t.attributes.slug,children:[" ",t.attributes.title,"  "]})]}),(0,a.jsxs)(c(),{className:"mt-3 group-hover:text-emerald-400 text-slate-500 group-hover:border-emerald-400 font-normal text-sm lg:text-base hover:border-b pb-1 border-b border-b-transparent inline-flex",href:"/portfolio/"+t.attributes.slug,children:["View brief ",(0,a.jsx)(l.Z,{className:"w-6 h-6 ml-2"})]})]},t.id)},p=s(2261),m=s(9304);s(3207),s(4276),s(7725);var u=s(5808),x=function(){var e;let[t,s]=(0,r.useState)(null),[l,d]=(0,r.useState)(!0);return((0,r.useEffect)(()=>{(async()=>{try{let e=await i.Z.get("".concat("https://app.nordwebduo.com/api","/portfolios?populate=*"),{headers:{Authorization:"Bearer ".concat("6e92a13aa580e5db9120378758c99dbb4afd4dd66d4d3bb13886317fa40913c153cd17cdcc28508c56f2b82535df07a17af2fdb440f18f1d11f1b65a0fc34c2fd60327c5ed5541b3ff79dc3d2e309d181767a726810f3641de4ac5594c60d213d59860f9788f9e889eaacab7761cd294619e53c2f0114daf9ecd9f73cb4f054b")}});s(e.data),d(!1)}catch(e){d(!1),console.error("Error fetching data:",e)}})()},[]),l)?(0,a.jsx)("p",{children:"Loading..."}):(null==t?void 0:null===(e=t.data)||void 0===e?void 0:e.length)?(0,a.jsx)(p.tq,{className:"mt-10 lg:mt-10 mySwiper",spaceBetween:20,pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1},slidesPerView:2,breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:2,spaceBetween:20},1024:{slidesPerView:3,spaceBetween:20}},navigation:!1,modules:[m.W_,m.pt,m.tl],children:t.data.map((e,t)=>(0,a.jsx)(p.o5,{children:(0,a.jsx)(h,{portfolio:e})},t))}):(0,a.jsx)(u.Z,{})}},2253:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return b}});var a=s(5893),r=s(1157),i=s(5601),l=s(9741),d=s(5675),o=s.n(d);s(8662);var n=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex overflow-x-hidden brandscarousel gap-7",children:[(0,a.jsxs)("div",{className:"flex  shrink-0 carousel-default gap-2",children:[(0,a.jsx)(o(),{src:"https://app.nordwebduo.com/uploads/brand1_bafd0519d8.png",width:228,height:78,alt:"TailwindCSS"}),(0,a.jsx)(o(),{src:"https://app.nordwebduo.com/uploads/brand2_1035e73ff1.png",width:228,height:78,alt:"Flowbite React"}),(0,a.jsx)(o(),{src:"https://app.nordwebduo.com/uploads/brand3_d5cf0695b0.png",width:228,height:78,alt:"Elementor"}),(0,a.jsx)(o(),{src:"https://app.nordwebduo.com/uploads/brand5_883f402dc3.png",width:228,height:78,alt:"Wordpress"}),(0,a.jsx)(o(),{src:"https://app.nordwebduo.com/uploads/brand4_ee28c708d0.png",width:228,height:78,alt:"Woocommerce"}),(0,a.jsx)(o(),{src:"https://app.nordwebduo.com/uploads/brand6_9ed17cc6e3.png",width:228,height:78,alt:"Next.JS"})]}),(0,a.jsxs)("div",{className:"flex carousel-default shrink-0 gap-3",children:[(0,a.jsx)(o(),{src:"https://app.nordwebduo.com/uploads/brand1_bafd0519d8.png",width:228,height:78,alt:"TailwindCSS"}),(0,a.jsx)(o(),{src:"https://app.nordwebduo.com/uploads/brand2_1035e73ff1.png",width:228,height:78,alt:"Flowbite React"}),(0,a.jsx)(o(),{src:"https://app.nordwebduo.com/uploads/brand3_d5cf0695b0.png",width:228,height:78,alt:"Elementor"}),(0,a.jsx)(o(),{src:"https://app.nordwebduo.com/uploads/brand5_883f402dc3.png",width:228,height:78,alt:"Wordpress"}),(0,a.jsx)(o(),{src:"https://app.nordwebduo.com/uploads/brand4_ee28c708d0.png",width:228,height:78,alt:"Woocommerce"}),(0,a.jsx)(o(),{src:"https://app.nordwebduo.com/uploads/brand6_9ed17cc6e3.png",width:228,height:78,alt:"Next.JS"})]})]})})},c=s(9765),h=s(3858),p=function(e){let{number:t,title:s,description:r}=e;return(0,a.jsxs)("div",{className:"text-balanced value-item bg-slate-800 hover:bg-slate-700 transition-colors group border border-white/5 p-10 rounded-3xl",children:[(0,a.jsx)("div",{className:"value-icon text-emerald-400 text-4xl mb-2",children:t}),(0,a.jsx)("h3",{className:"value-title text-xl font-medium mb-2",children:s}),(0,a.jsx)("p",{className:"value-desc text-slate-400",children:r})]})},m=s(7294),u=function(e){let{endValue:t,title:s}=e,[r,i]=(0,m.useState)(0);return(0,m.useEffect)(()=>{let e=setInterval(()=>{i(s=>{let a=Math.ceil(t/100);return s+a>=t?(clearInterval(e),t):s+a})},20);return()=>clearInterval(e)},[t]),(0,a.jsxs)("div",{className:"stat bg-slate-800 hover:bg-slate-700 rounded-2xl border border-white/5 p-5 md:p-10",children:[(0,a.jsxs)("div",{className:"stat-value text-3xl md:text-5xl font-bold text-emerald-400 mb-2",children:[r,(0,a.jsx)("span",{className:"text-2xl align-top",children:"+"})]}),(0,a.jsx)("div",{className:"stat-title text-sm md:text-base text-slate-300",children:s})]})},x=s(1467),b=function(){return(0,a.jsxs)(i.Z,{pageTitle:"About Us",pageDescription:"We are a dynamic team comprised of talented designers, developers, and marketing experts.",ogUrl:"https://www.nordwebduo.com/about",ogPageTitle:"About Us | NordWebDuo",children:[(0,a.jsx)("div",{className:"hero-section-alternative"}),(0,a.jsx)(l.Z,{Title:"About Us",PageDescription:"We are a dynamic team comprised of talented designers, developers, and marketing experts. "}),(0,a.jsx)("div",{className:"about-us",children:(0,a.jsxs)("div",{className:"container mx-auto mt-14",children:[(0,a.jsxs)("div",{className:"about-us-content items-center gap-14 grid md:grid-cols:1 lg:grid-cols-2 mb-10 lg:mb-24 mt-24",children:[(0,a.jsx)("div",{className:"image",children:(0,a.jsx)(r.Z,{})}),(0,a.jsxs)("div",{className:"about-content text-base lg:text-base",children:[(0,a.jsx)("div",{className:"relative -z-[1] heading-subtitle inline-block bg-emerald-400 bg-opacity-10 px-3 py-1 rounded-full text-white mb-5",children:(0,a.jsx)("span",{className:"ml-4 text-sm",children:"About Us"})}),(0,a.jsx)("h1",{className:"mb-3 text-emerald-400 text-2xl font-semibold",children:"Who We Are"}),(0,a.jsxs)("div",{className:"mt-6 mb-10 leading-7",children:[(0,a.jsx)("p",{className:"mb-2 font-medium",children:"Nord Web Duo, headquartered in the picturesque landscapes of Iceland."}),(0,a.jsx)("p",{className:" mb-4",children:"Is a pioneering digital agency renowned for crafting superior-quality websites and devising comprehensive digital marketing strategies aimed at bolstering engagement and amplifying conversion rates."}),(0,a.jsxs)("p",{className:"mb-4",children:["Boasting a team of seasoned professionals, Nord Web Duo brings together a diverse mix of talents, including adept developers, innovative designers, and astute marketing experts."," "]}),(0,a.jsx)("p",{children:"This skilled ensemble is deeply committed to thoroughly comprehending the distinct business objectives of their clients and meticulously customizing their services to align with those specific goals."})]}),(0,a.jsx)(h.Z,{Source:"/portfolio",Title:"Explore our Works",Icon:x.Z,color:"bordered",iconPosition:"right"})]})]}),(0,a.jsx)("div",{className:"mb-10 mt-10 md:mt-20 md:mb-20",children:(0,a.jsx)(n,{})}),(0,a.jsxs)("div",{className:"our-stats grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-12",children:[(0,a.jsx)(u,{endValue:24,title:"Projects completed"}),(0,a.jsx)(u,{endValue:30,title:"Happy clients"}),(0,a.jsx)(u,{endValue:200,title:"Cups of coffee"}),(0,a.jsx)(u,{endValue:6,title:"Years of experience"}),(0,a.jsx)(u,{endValue:4,title:"Team members"})]}),(0,a.jsx)("div",{className:"text-2xl lg:text-3xl text-center mt-20",children:"Our Values"}),(0,a.jsxs)("div",{className:"values grid grid-cols-1 md:grid-cols-2 gap-5 mt-10",children:[(0,a.jsx)(p,{number:"01.",title:"We are specialized",description:"We develop unique digital experiences based on user insights, our expertise and proved data. We study the market, your competitors, and more importantly, your customers. We do the heavy lifting for you."}),(0,a.jsx)(p,{number:"02.",title:"We are responsive",description:"We always keep door open in communication both with client and teammates. Everyone’s feedback is valuable, and we're never too busy to hear it. This is more than listening and discussion. It is about finding the right way."}),(0,a.jsx)(p,{number:"03.",title:"We focus on results",description:"We carefully consider every project we take on because when we commit, we always bring 100%, and even a bit more. We are driven by a desire to provide best experience which exceeds a client's expectation."}),(0,a.jsx)(p,{number:"04.",title:"We work smart",description:"We approach every challenge with an open mind. We are not afraid to experiment, try something new or combine things that no one has done before. This keeps us sharp and brings unique solutions to our clients."})]}),(0,a.jsx)("div",{className:"text-2xl lg:text-3xl text-center mt-20",children:"Our Works"}),(0,a.jsx)("div",{className:"latest-works -mb-20",children:(0,a.jsx)(c.Z,{})})]})})]})}},8662:function(){}},function(e){e.O(0,[370,172,846,601,774,888,179],function(){return e(e.s=2879)}),_N_E=e.O()}]);