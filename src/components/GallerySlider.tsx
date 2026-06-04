import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import {
  Navigation,
  Thumbs,
  FreeMode,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

const GallerySlider = ({ images }: { images: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  const handleZoom = (index: number) => {
    if (zoomedIndex === index) {
      setZoomedIndex(null);
    } else {
      setZoomedIndex(index);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };

  return (
    <div className="gallery-slider">

      {/* Main Slider */}

      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{
          swiper:
            thumbsSwiper &&
            !thumbsSwiper.destroyed
              ? thumbsSwiper
              : null,
        }}
        className="main-gallery"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className={`zoom-wrapper ${
                zoomedIndex === index ? "zoomed" : ""
              }`}
              onClick={() => handleZoom(index)}
              onMouseMove={handleMouseMove}
            >
              <img src={img} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */}

      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        modules={[Thumbs, FreeMode]}
        freeMode
        watchSlidesProgress
        slidesPerView={7}
        spaceBetween={5}
        className="thumb-gallery"
        breakpoints={{
          320: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 6,
          },
          1200: {
            slidesPerView: 7,
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt=""
              className="thumb-img"
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default GallerySlider;