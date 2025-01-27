import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import img1 from "../../assets/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2071.avif";
import img2 from "../../assets/carosel3.png.jpg";
import img3 from "../../assets/carosel.png.jpg";
import img4 from "../../assets/carosel2.png.jpg";

const Banner = () => {
  return (
    <div className="m-auto w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <div className="relative w-full h-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper w-full h-full"
        >
          {[img1, img2, img3, img4].map((img, index) => (
            <SwiperSlide
              key={index}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
            >
              <img
                className="w-full h-full object-cover"
                src={img}
                alt={`Image ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 flex justify-center items-center z-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="absolute top-[20px] left-[20px] px-4 py-2 sm:top-[50px] sm:left-[50px] lg:top-[150px] lg:left-[150px]">
            <div className="space-y-2 sm:space-y-4 lg:space-y-6">
              <h2 className="capitalize text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#f46c29]">
                Lorem ipsum dolor sit amet <br />
                <span className="text-[#0eb477]">consectetur adipisicing.</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Quidem labore voluptate corporis molestiae porro <br />
                repellat reprehenderit unde tenetur dicta quae.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white rounded-lg py-2 px-4">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
