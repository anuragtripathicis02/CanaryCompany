import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const location = useLocation();

    return (
        <section
            className="banner-slider-section"
            style={{
                visibility: loaded ? "visible" : "hidden",
            }}
        >
            {/* Main Slider */}
            <Swiper
                key={location.pathname}
                modules={[EffectCoverflow, Autoplay, Thumbs]}
                className="main-slider"
                effect="coverflow"
                centeredSlides={true}
                loop={true}
                grabCursor={true}
                speed={800}
                observer={true}
                observeParents={true}
                resizeObserver={true}
                updateOnWindowResize={true}
                slidesPerView={3}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
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
                    scale: 0.8,
                    slideShadows: false,
                }}
                thumbs={{
                    swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                            ? thumbsSwiper
                            : null,
                }}
                onInit={() => setLoaded(true)}
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
                        <img src={Destination01} alt="Destination 5" />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="/" className="destination-card">
                        <div className="destination-content">
                            <p>Luxury Villa & Ocean View</p>
                        </div>
                        <img src={Destination02} alt="Destination 6" />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="/" className="destination-card">
                        <div className="destination-content">
                            <p>Luxury Villa & Ocean View</p>
                        </div>
                        <img src={Destination03} alt="Destination 7" />
                    </Link>
                </SwiperSlide>
            </Swiper>

            {/* Thumbnail Slider */}
            <Swiper
                onSwiper={setThumbsSwiper}
                className="thumbs-slider mt-4"
                slidesPerView={"auto"}
                spaceBetween={15}
                watchSlidesProgress={true}
                slideToClickedSlide={true}
                observer={true}
                observeParents={true}
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
                    <img src={Destination01} alt="" className="thumb-image" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Destination02} alt="" className="thumb-image" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Destination03} alt="" className="thumb-image" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default BannerSlider;