
import RealHouse from "../assets/images/real-house-01.jpg";
import FeelHome from "../assets/images/real-house-02.jpg";
import ExpertAdvice from "../assets/images/real-house-03.jpg";
import EveryPrice from "../assets/images/real-house-04.jpg";
import { Link } from "react-router-dom";


const HomeFeatures = () => {
  return (
    <div className="home-features py-4 pb-5">
        <div className="bg-white px-3 pt-3">
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="feature-card h-100">
                        <h3 className="feature-title text-andadaPro">Real houses</h3>
                        <div className="img-box py-3">
                            <img src={RealHouse} alt="" />
                        </div>
                        <p>All our accommodations are exactly as you see them here. We have personally selected and visited them. They meet our quality standards in terms of facilities, location and recreational value.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="feature-card h-100">
                        <h3 className="feature-title text-andadaPro">Feel like home</h3>
                        <div className="img-box py-3">
                            <img src={FeelHome} alt="" />
                        </div>
                        <p>No matter whether you are travelling with your dog, want to take private yoga lessons on Sundays or want to treat yourself to a professional massage in the garden of your holiday villa, we are there for you and have an open ear for your wishes and requests. Discover all <Link to="" className="light-blue"> <strong> our personalized services.</strong></Link></p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="feature-card h-100">
                        <h3 className="feature-title text-andadaPro">More expert advice</h3>
                        <div className="img-box py-3">
                            <img src={ExpertAdvice} alt="" />
                        </div>
                        <p>The Canaries (and us) have something to offer for your better holiday experience. Whether you are looking for warm-weather winter escapes or fresh air to spend healthy summer vacation. Your advantage: CanaryCompany is a team of enthusiastic Canary Islands fans. With passion and a lot of experience you will enjoy an extraordinary more of advice and input.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="feature-card h-100">
                        <h3 className="feature-title text-andadaPro">Every price, any occasion</h3>
                        <div className="img-box py-3">
                            <img src={EveryPrice} alt="" />
                        </div>
                        <p>There is a holiday home for every possibility and any occasion. From small picture square apartments and rural mountain houses to elegant modern or colonial villas.<Link to="" className="light-blue"> <strong>Let your holiday be!</strong></Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HomeFeatures;