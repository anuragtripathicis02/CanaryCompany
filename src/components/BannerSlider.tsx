import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/thumbs";

import Destination01 from "../assets/images/destination-01.jpg";
import Destination02 from "../assets/images/destination-02.jpg";
import Destination03 from "../assets/images/destination-03.jpg";
import Destination04 from "../assets/images/destination-04.jpg";

const BannerSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);

    return (
        <section className="banner-slider-section">
            {/* Main Slider */}
            <Swiper
                modules={[EffectCoverflow, Autoplay, Thumbs]}
                className="main-slider"
                effect="coverflow"
                centeredSlides={true}
                loop={true}
                grabCursor={true}
                speed={800}
                slidesPerView={3}
                 breakpoints={{
        0: {
            slidesPerView: 1,
        },
        200: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        }
       
    }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                coverflowEffect={{
                    rotate: 40,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    scale: 0.9,
                    slideShadows: false,
                }}
                thumbs={{
                    swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                            ? thumbsSwiper
                            : null,
                }}
            >
                <SwiperSlide>
                    <Link to="/" className="destination-card">
                        <div className="destination-content">
                            <p>Luxury Villa & Ocean View</p>
                        </div>

                        <img src={Destination01} alt="Destination 1" />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="/" className="destination-card">
                        <div className="destination-content">
                            <p>Luxury Villa & Ocean View</p>
                        </div>
                        <img src={Destination02} alt="Destination 2" />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="/" className="destination-card">
                        <div className="destination-content">
                            <p>Luxury Villa & Ocean View</p>
                        </div>
                        <img src={Destination03} alt="Destination 3" />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="/" className="destination-card">
                        <div className="destination-content">
                            <p>Luxury Villa & Ocean View</p>
                        </div>
                        <img src={Destination04} alt="Destination 4" />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="/" className="destination-card">
                        <div className="destination-content">
                            <p>Luxury Villa & Ocean View</p>
                        </div>
                        <img src={Destination01} alt="Destination 1" />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="/" className="destination-card">
                        <div className="destination-content">
                            <p>Luxury Villa & Ocean View</p>
                        </div>
                        <img src={Destination01} alt="Destination 1" />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="/" className="destination-card">
                        <div className="destination-content">
                            <p>Luxury Villa & Ocean View</p>
                        </div>
                        <img src={Destination01} alt="Destination 1" />
                    </Link>
                </SwiperSlide>

            </Swiper>
            {/* Thumbnail Slider */}
            <Swiper
                onSwiper={setThumbsSwiper}
                className="thumbs-slider"
                slidesPerView={"auto"}
                spaceBetween={15}
                centeredSlides={false}
                watchSlidesProgress={true}
                slideToClickedSlide={true}
            >
                <SwiperSlide>
                    <img src={Destination01} alt="" className="thumb-image" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Destination02} alt="" className="thumb-image" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Destination03} alt="" className="thumb-image" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Destination04} alt="" className="thumb-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Destination04} alt="" className="thumb-image" />
                </SwiperSlide>

                {/* <SwiperSlide>
                    <img src={Destination04} alt="" className="thumb-image" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Destination04} alt="" className="thumb-image" />
                </SwiperSlide> */}
            </Swiper>
        </section>
    );
};

export default BannerSlider;