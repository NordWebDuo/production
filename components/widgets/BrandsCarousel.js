import Image from "next/image";
import "swiper/css/free-mode";

function BrandsCarousel() {
  return (
    <>
      <div className="flex overflow-x-hidden brandscarousel gap-7">
        <div className="flex  shrink-0 carousel-default gap-2">
          <Image
            src="https://app.nordwebduo.com/uploads/brand1_bafd0519d8.png"
            width={228}
            height={78}
            alt="TailwindCSS"
          />
          <Image
            src="https://app.nordwebduo.com/uploads/brand2_1035e73ff1.png"
            width={228}
            height={78}
            alt="Flowbite React"
          />
          <Image
            src="https://app.nordwebduo.com/uploads/brand3_d5cf0695b0.png"
            width={228}
            height={78}
            alt="Elementor"
          />
          <Image
            src="https://app.nordwebduo.com/uploads/brand5_883f402dc3.png"
            width={228}
            height={78}
            alt="Wordpress"
          />
          <Image
            src="https://app.nordwebduo.com/uploads/brand4_ee28c708d0.png"
            width={228}
            height={78}
            alt="Woocommerce"
          />
          <Image
            src="https://app.nordwebduo.com/uploads/brand6_9ed17cc6e3.png"
            width={228}
            height={78}
            alt="Next.JS"
          />
        </div>
        <div className="flex carousel-default shrink-0 gap-3">
        <Image
            src="https://app.nordwebduo.com/uploads/brand1_bafd0519d8.png"
            width={228}
            height={78}
            alt="TailwindCSS"
          />
          <Image
            src="https://app.nordwebduo.com/uploads/brand2_1035e73ff1.png"
            width={228}
            height={78}
            alt="Flowbite React"
          />
          <Image
            src="https://app.nordwebduo.com/uploads/brand3_d5cf0695b0.png"
            width={228}
            height={78}
            alt="Elementor"
          />
          <Image
            src="https://app.nordwebduo.com/uploads/brand5_883f402dc3.png"
            width={228}
            height={78}
            alt="Wordpress"
          />
          <Image
            src="https://app.nordwebduo.com/uploads/brand4_ee28c708d0.png"
            width={228}
            height={78}
            alt="Woocommerce"
          />
          <Image
            src="https://app.nordwebduo.com/uploads/brand6_9ed17cc6e3.png"
            width={228}
            height={78}
            alt="Next.JS"
          />
        </div>
      </div>
    </>
  );
}

export default BrandsCarousel;
