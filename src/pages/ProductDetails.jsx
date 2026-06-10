import GallerySlider from "../components/GallerySlider"
import Img1 from "../assets/images/blogRec-01.jpg";
import Img2 from "../assets/images/blogRec-02.jpg";
import Img3 from "../assets/images/blogRec-03.jpg";
import Img4 from "../assets/images/blogRec-04.jpg";
import Img5 from "../assets/images/blogRec-05.jpg";
import Img6 from "../assets/images/blogRec-06.jpg";
import Img7 from "../assets/images/blogRec-07.jpg";
import Img8 from "../assets/images/blogRec-08.jpeg";
import PdpdetailTabs from "../components/PdpdetailTabs";
import PdpdetailBooking from "../components/PdpdetailBooking";

const ProductDetails = () => {
        const images = [
        Img1,
        Img2,
        Img3,
        Img4,
        Img5,
        Img6,
        Img7,
        Img8,
    ];
  return (
     <div className="pdp-details mt-4 mb-4">
        <div className="container">
            <div className='row'>
                <div className="col-lg-8">
                    <div className="gallery-img  pb-4">
                        <GallerySlider images={images} />
                    </div>
                    <div className="tabs-outside mb-lg-5 mb-4">
                        <PdpdetailTabs />
                    </div>
                </div>
                <div className="col-lg-4">
                    <PdpdetailBooking />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails