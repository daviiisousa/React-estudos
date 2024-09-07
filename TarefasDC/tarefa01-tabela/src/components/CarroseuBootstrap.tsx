import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef, useEffect } from "react";

interface CarrosselProps {
  images: string[];
}

export const Carrossel: React.FC<CarrosselProps> = ({ images }) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      const swiperEl = document.querySelector(".swiper") as any;
      swiperEl.swiper.params.navigation.prevEl = prevRef.current;
      swiperEl.swiper.params.navigation.nextEl = nextRef.current;
      swiperEl.swiper.navigation.init();
      swiperEl.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="relative w-[100%] h-[400px] ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-96 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}

        {/* Botões de navegação customizados */}
        <div
          ref={prevRef}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full cursor-pointer"
        >
          ←
        </div>
        <div
          ref={nextRef}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full cursor-pointer"
        >
          →
        </div>
      </Swiper>
    </div>
  );
};
