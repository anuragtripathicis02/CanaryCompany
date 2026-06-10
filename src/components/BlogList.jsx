
import { Link } from "react-router-dom"
import Infocard01 from "../assets/images/destination-01.jpg"
import Placeholder from "../assets/images/placeholder.png"

const BlogList = () => {
    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="block-list-sec">
        <div className="row">
            <div className="col-md-12 mb-3">
                <div className="bg-white p-3 info-card h-100">
                    <h3 className="mb-3 weight-400">Holiday in Lajares</h3>
                    <Link to="/blog-details" className="info-img">
                        <img src={Placeholder} alt="" />
                    </Link>
                    <p className="pb-0 pt-3 three-line-text">Holiday in Lajares – A creative village between volcanoes and the Atlantic The small village of Lajares in the north of Fuerteventura has developed into one of the island’s most interesting holiday destinations in recent years. Once a quiet agricultural settlement, it is now a meeting point for surfers, artists, and independent travelers – while</p>
                    <Link to="/blog-details" className="btn-theme mt-3 d-inline-block">Read More...</Link>
                </div>
            </div>
            <div className="col-md-12 mb-4">
                <div className="bg-white p-3 info-card h-100">
                    <h3 className="mb-3 weight-400">Holiday in Tazacorte</h3>
                    <Link to="/blog-details" className="info-img">
                        <img src={Infocard01} alt="" />
                    </Link>
                    <p className="pb-0 pt-3 three-line-text">Holiday in Tazacorte – The Sunniest Municipality on La Palma Tazacorte is known as the sunniest municipality on the island, boasting a charming old town, long beaches, and a lively harbor – an ideal holiday destination for sun lovers and those who enjoy the good life. Not surprisingly, many visitors return year after year to</p>
                     <Link to="/blog-details" className="btn-theme mt-3 d-inline-block">Read More...</Link>
                </div>
            </div>
            <div className="col-md-12 mb-3">
                <div className="bg-white p-3 info-card h-100">
                    <h3 className="mb-3 weight-400">Holiday in Lajares</h3>
                    <Link to="/blog-details" className="info-img">
                        <img src={Placeholder} alt="" />
                    </Link>
                    <p className="pb-0 pt-3 three-line-text">Holiday in Lajares – A creative village between volcanoes and the Atlantic The small village of Lajares in the north of Fuerteventura has developed into one of the island’s most interesting holiday destinations in recent years. Once a quiet agricultural settlement, it is now a meeting point for surfers, artists, and independent travelers – while</p>
                    <Link to="/blog-details" className="btn-theme mt-3 d-inline-block">Read More...</Link>
                </div>
            </div>
            <div className="col-md-12 mb-3">
                <div className="bg-white p-3 info-card h-100">
                    <h3 className="mb-3 weight-400">Holiday in Lajares</h3>
                    <Link to="/blog-details" className="info-img">
                        <img src={Placeholder} alt="" />
                    </Link>
                    <p className="pb-0 pt-3 three-line-text">Holiday in Lajares – A creative village between volcanoes and the Atlantic The small village of Lajares in the north of Fuerteventura has developed into one of the island’s most interesting holiday destinations in recent years. Once a quiet agricultural settlement, it is now a meeting point for surfers, artists, and independent travelers – while</p>
                    <Link to="/blog-details" className="btn-theme mt-3 d-inline-block">Read More...</Link>
                </div>
            </div>
        </div>
        
        <div className="d-flex pagination-filter justify-content-between align-items-center border p-0  flex-wrap gap-3 pb-md-5 mb-2 pt-2">
            <button className="btn btn-light radius-0"  onClick={scrollToTop}>
                BACK UP
            </button>
            <div className="d-flex gap-1 flex-wrap">
                <button className="btn btn-light radius-0">FIRST PAGE</button>
                <button className="btn btn-active text-white radius-0">1</button>
                <button className="btn btn-light radius-0">2</button>
                <button className="btn btn-light radius-0">&gt;</button>
                <button className="btn btn-light radius-0">LAST PAGE</button>
            </div>
        </div>
    </div>
  )
}

export default BlogList