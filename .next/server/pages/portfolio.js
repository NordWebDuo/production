"use strict";(()=>{var e={};e.id=371,e.ids=[371],e.modules={1766:(e,t,r)=>{r.r(t),r.d(t,{config:()=>W,default:()=>N,getServerSideProps:()=>_,getStaticPaths:()=>y,getStaticProps:()=>k,reportWebVitals:()=>q,routeModule:()=>Z,unstable_getServerProps:()=>D,unstable_getServerSideProps:()=>M,unstable_getStaticParams:()=>T,unstable_getStaticPaths:()=>A,unstable_getStaticProps:()=>E});var a={};r.r(a),r.d(a,{default:()=>P,getServerSideProps:()=>S});var s=r(7093),l=r(5244),o=r(1323),i=r(1106),n=r(2166),d=r(997),c=r(6689),u=r(5601),p=r(9741),m=r(1173),f=r(5675),x=r.n(f),g=r(1664),b=r.n(g);let h=({portfolios:e})=>d.jsx(d.Fragment,{children:e&&e.map(e=>(0,d.jsxs)("div",{className:"basis-1/3 group transition ",children:[d.jsx(x(),{src:"https://app.nordwebduo.com"+e.attributes.cover.data.attributes.formats.small.url,width:"600",height:"400",className:"w-full h-auto rounded-3xl mb-4 shadow-md",alt:e.attributes.title}),d.jsx("span",{className:"mt-3 bg-emerald-400 text-slate-800 px-3 py-1 rounded-full text-sm",children:e.attributes.portfolio_categories.data[0].attributes.title}),(0,d.jsxs)("h3",{className:"mt-3 font-medium text-base lg:text-xl",children:[" ",(0,d.jsxs)(b(),{href:"/portfolio/"+e.attributes.slug,children:[" ",e.attributes.title,"  "]})]}),(0,d.jsxs)(b(),{className:"mt-3 group-hover:text-emerald-400 text-slate-500 group-hover:border-emerald-400 font-normal text-sm lg:text-base hover:border-b pb-1 border-b border-b-transparent inline-flex",href:"/portfolio/"+e.attributes.slug,children:["View brief ",d.jsx(m.Z,{className:"w-6 h-6 ml-2"})]})]},e.id))});var w=r(4831);let v=c.forwardRef(function({title:e,titleId:t,...r},a){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?c.createElement("title",{id:t},e):null,c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"}))}),j=({Title:e,onClick:t})=>d.jsx(d.Fragment,{children:(0,d.jsxs)("button",{onClick:t,className:"inline-flex items-center gap-1 border-2 text-emerald-400 hover:text-stone-900 border-emerald-400 hover:bg-emerald-500 transition-colors font-medium rounded-full lg:text-md max-lg:text-sm px-6 max-lg:px-4 max-lg:py-2 py-3",children:[e,"  ",d.jsx(v,{className:"w-4 h-4"})]})}),P=({portfolios:e,categories:t})=>{let[r,a]=(0,c.useState)(e),[s,l]=(0,c.useState)("All Works"),[o,i]=(0,c.useState)(6);if(!t||!e)return(0,d.jsxs)(u.Z,{pageTitle:"Our Works",ogPageTitle:"Portfolio | NordWebDuo",pageDescription:"People friendly digital experiences",ogUrl:"https://www.nordwebduo.com/portfolio",children:[d.jsx(p.Z,{Title:"Our Works",PageDescription:"We use an agile approach to test assumptions and connect with the needs of your audience early and often."}),d.jsx("div",{className:"container mx-auto mt-14",children:d.jsx("p",{className:"text-center text-rose-500",children:"Oops! There was an error fetching the portfolio posts. Please try again later."})})]});let n=t=>{l(t),"All Works"===t?a(e):a(e.filter(e=>(e.attributes.portfolio_categories?.data||[]).some(e=>e.attributes.title===t)))};return(0,d.jsxs)(u.Z,{pageTitle:"Portfolio",ogPageTitle:"Portfolio | NordWebDuo",pageDescription:"People friendly digital experiences",ogUrl:"https://www.nordwebduo.com/portfolio",children:[d.jsx("div",{className:"hero-section-alternative"}),d.jsx(p.Z,{Title:"Our Works",PageDescription:"People friendly digital experiences"}),(0,d.jsxs)("div",{className:"container mx-auto mt-10",children:[d.jsx("div",{className:"flex flex-wrap justify-center gap-4 mb-10 ",children:t.map((e,t)=>d.jsx("button",{onClick:()=>n(e),className:s===e?"transition-all bg-emerald-400 px-5 py-2 text-slate-800 rounded-full":"transition-all px-5 py-2 bg-slate-800 rounded-full hover:bg-slate-700",children:e},t))}),d.jsx("div",{className:"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10",children:r.slice(0,o).map((e,t)=>d.jsx(h,{portfolios:[e]},t))})]}),r.length>o&&d.jsx("div",{className:"flex justify-center mt-5",children:d.jsx(j,{Title:"View More",onClick:()=>{i(o+3)}})})]})};async function S(){try{let e=await (0,w._)("https://app.nordwebduo.com/api/portfolios?populate=*",{headers:{Authorization:"Bearer 6e92a13aa580e5db9120378758c99dbb4afd4dd66d4d3bb13886317fa40913c153cd17cdcc28508c56f2b82535df07a17af2fdb440f18f1d11f1b65a0fc34c2fd60327c5ed5541b3ff79dc3d2e309d181767a726810f3641de4ac5594c60d213d59860f9788f9e889eaacab7761cd294619e53c2f0114daf9ecd9f73cb4f054b"}});if(!e||e.error)return{props:{error:"Eroare la preluarea datelor de la sursa specificată."}};let t=[];return e.data&&e.data.length>0&&e.data.forEach(e=>{(e.attributes.portfolio_categories?.data||[]).forEach(e=>{let r=e.attributes.title;t.includes(r)||t.push(r)})}),t.includes("All Works")||t.unshift("All Works"),{props:{portfolios:e.data,categories:t}}}catch(e){return{props:{error:"A intervenit o eroare \xeen timpul preluării datelor."}}}}let N=(0,o.l)(a,"default"),k=(0,o.l)(a,"getStaticProps"),y=(0,o.l)(a,"getStaticPaths"),_=(0,o.l)(a,"getServerSideProps"),W=(0,o.l)(a,"config"),q=(0,o.l)(a,"reportWebVitals"),E=(0,o.l)(a,"unstable_getStaticProps"),A=(0,o.l)(a,"unstable_getStaticPaths"),T=(0,o.l)(a,"unstable_getStaticParams"),D=(0,o.l)(a,"unstable_getServerProps"),M=(0,o.l)(a,"unstable_getServerSideProps"),Z=new s.PagesRouteModule({definition:{kind:l.x.PAGES,page:"/portfolio",pathname:"/portfolio",bundlePath:"",filename:""},components:{App:n.default,Document:i.default},userland:a})},9741:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(997);let s=({Title:e,PageDescription:t})=>(0,a.jsxs)("div",{className:"text-center",children:[a.jsx("h1",{className:"text-2xl md:text-4xl lg:text-5xl mb-4",children:e}),a.jsx("p",{className:"text-slate-400 w-full md:w-2/3 mx-auto",children:t})]})},4831:(e,t,r)=>{r.d(t,{_:()=>a});async function a(e,t={}){let r;return r=t?await fetch(e,t):await fetch(e),await r.json()}},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")},1173:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(6689);let s=a.forwardRef(function({title:e,titleId:t,...r},s){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"}))})}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[859,270,565],()=>r(1766));module.exports=a})();