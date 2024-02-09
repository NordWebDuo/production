import Image from "next/image";

function HerroGallery() {

  const images = [
    { src: "https://app.nordwebduo.com/uploads/Hero1_f3cf2589fa.png", width: 599, height: 450, alt: "TailwindCSS" },
    { src: "https://app.nordwebduo.com/uploads/Hero3_478c6b7a2c.png", width: 599, height: 450, alt: "Flowbite React" },
    { src: "https://app.nordwebduo.com/uploads/Hero2_d22924427b.png", width: 599, height: 450, alt: "Elementor" },
    { src: "https://app.nordwebduo.com/uploads/Hero4_2e48b2b0cf.png", width: 599, height: 450, alt: "Wordpress" },
    { src: "https://app.nordwebduo.com/uploads/Hero6_c181f3125a.png", width: 599, height: 450, alt: "Woocommerce" },
    { src: "https://app.nordwebduo.com/uploads/Hero5_3c6290bbb2.png", width: 599, height: 450, alt: "Next.JS" }
  ];

  return (
    <div className="overflow-y-hidden grid grid-cols-2 h-[350px] md:h-[500px] herrogallery gap-5">
      <div className="flow-1 flex flex-col gap-5">
      <div className="carousel-vertical flex flex-col gap-5">
        {images.map((image, index) => (
          <Image key={index} src={image.src} width={image.width} height={image.height} alt={image.alt} priority />
        ))}
      </div>
      <div className="carousel-vertical flex flex-col gap-5">
        {images.map((image, index) => (
          <Image key={index} src={image.src} width={image.width} height={image.height} alt={image.alt} priority />
        ))}
      </div>
      </div>
      <div className="flow-2 flex flex-col gap-5">
      <div className="carousel-vertical-down flex flex-col gap-5">
        {images.map((image, index) => (
          <Image key={index} src={image.src} width={image.width} height={image.height} alt={image.alt} priority />
        ))}
      </div>
      <div className="carousel-vertical-down flex flex-col gap-5">
        {images.map((image, index) => (
          <Image key={index} src={image.src} width={image.width} height={image.height} alt={image.alt} priority />
        ))}
      </div>
      </div>
    </div>
  );
}


export default HerroGallery;