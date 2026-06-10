import GallerySlider from "../components/GallerySlider";
import IslandRight from "../components/IslandRight";
import Img1 from "../assets/images/blogRec-01.jpg";
import Img2 from "../assets/images/blogRec-02.jpg";
import Img3 from "../assets/images/blogRec-03.jpg";
import Img4 from "../assets/images/blogRec-04.jpg";
import Img5 from "../assets/images/blogRec-05.jpg";
import Img6 from "../assets/images/blogRec-06.jpg";
import Img7 from "../assets/images/blogRec-07.jpg";
import Img8 from "../assets/images/blogRec-08.jpeg";
import TabsOutside from "../components/TabsOutside";

const TheCanaryIsland = () => {

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
    <div className="island-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="gallery-img pt-4 pb-4">
                        <h3 className="p-0 m-0 mb-3 weight-400">La Palma</h3>
                        <GallerySlider images={images} />
                    </div>
                    <div className="tabs-outside mb-lg-5 mb-4">
                        <TabsOutside />
                    </div>
                </div>
                <div className="col-lg-4">
                    <IslandRight />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TheCanaryIsland