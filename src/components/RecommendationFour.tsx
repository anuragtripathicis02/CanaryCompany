import { Link } from "react-router-dom"
import Star from "../assets/icons/Star"
import Cardrec01 from "../assets/images/blogRec-01.jpg"
import Cardrec02 from "../assets/images/blogRec-02.jpg"
import Cardrec03 from "../assets/images/blogRec-03.jpg"
import Cardrec04 from "../assets/images/blogRec-04.jpg"
import Cardrec05 from "../assets/images/blogRec-05.jpg"
import Cardrec06 from "../assets/images/blogRec-06.jpg"
import Cardrec07 from "../assets/images/blogRec-07.jpg"
import Cardrec08 from "../assets/images/blogRec-08.jpeg"
import Cardrec09 from "../assets/images/blogRec-09.jpg"
import Cardrec10 from "../assets/images/blogRec-10.jpg"
import Cardrec11 from "../assets/images/blogRec-11.jpg"
import Cardrec12 from "../assets/images/blogRec-12.jpg"
import HelfStar from "../assets/icons/HelfStar"



const RecommendationFour = () => {
  return (
    <div className="recommendations-sec mt-5 pt-5 ">
        <div className="row">
            <div className="col-lg-3 col-md-6  mb-4">
                <Link to="" className="card-box cust-card-box h-100 d-flex flex-column">
                    <div className="img-box">
                        <img src={Cardrec01} alt="" />
                    </div>
                    <div className="text-box-card d-flex flex-column">
                            <h3>Villa Vista Reina</h3>
                            <ul className="d-flex align-items-center gap-1 p-0 m-0 mb-3 list-unstyled">
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                            </ul>
                            <span className="mt-1">Tijarafe, La Palma</span>
                            <ul className="d-flex align-items-center flex-wrap gap-btn-box p-0 m-0 mt-2 list-unstyled">
                                <li className="btn-card skyBlue">Ocean View</li>
                                <li className="btn-card blueTeal">Pool</li>
                                <li className="btn-card darkTealGreen">Private Pool</li>
                                <li className="btn-card darkTealBrown">Private Setting</li>
                            </ul>
                            <div className="text-end w-100 mt-4 text-title mb-3">
                                <div>
                                    <small>from</small>
                                    <span className="curr">€</span>
                                    <span className="amount">235</span>
                                    <small>/night</small>
                                </div>
                            </div>
                            <p>Stunning holiday villa in Tijarafe, situated approximately 350 meters above sea level, featuring a pool, two bedrooms, and fantastic views.</p>
                        <div className="card-text d-flex align-items-center gap-2 mt-auto"><span>Adults: 4</span> <span>Min.stay: 5</span></div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-md-6  mb-4">
                <Link to="" className="card-box cust-card-box h-100 d-flex flex-column">
                    <div className="img-box">
                        <img src={Cardrec02} alt="" />
                    </div>
                    <div className="text-box-card d-flex flex-column">
                            <h3>Villa Veni</h3>
                            <ul className="d-flex align-items-center gap-1 p-0 m-0 mb-3 list-unstyled">
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                            </ul>
                            <span className="mt-1">Tazacorte, La Palma</span>
                            <ul className="d-flex align-items-center flex-wrap gap-btn-box p-0 m-0 mt-2 list-unstyled">
                                <li className="btn-card orange">Family</li>
                                <li className="btn-card skyBlue">Ocean View</li>
                                <li className="btn-card blueTeal">Pool</li>
                                <li className="btn-card purple">Pool Heating</li>
                                <li className="btn-card darkTealGreen">Private Pool</li>
                            </ul>
                            <div className="text-end w-100 mt-4 text-title mb-3">
                                <div>
                                    <small>from</small>
                                    <span className="curr">€</span>
                                    <span className="amount">160</span>
                                    <small>/night</small>
                                </div>
                            </div>
                            <p>This modern holiday villa with a private pool and stunning sea views is located next to the new lava flow in Tazacorte, La Palma, and can comfortably accommodate up to four guests.</p>
                        <div className="card-text d-flex align-items-center gap-2 mt-auto"><span>Adults: 4</span> <span>Min.stay: 5</span></div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-md-6  mb-4">
                <Link to="" className="card-box cust-card-box h-100 d-flex flex-column">
                    <div className="img-box">
                        <img src={Cardrec03} alt="" />
                    </div>
                    <div className="text-box-card d-flex flex-column">
                            <h3>Villa Tigotan</h3>
                            <ul className="d-flex align-items-center gap-1 p-0 m-0 mb-3 list-unstyled">
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                            </ul>
                            <span className="mt-1">Tijarafe, La Palma</span>
                            <ul className="d-flex align-items-center flex-wrap gap-btn-box p-0 m-0 mt-2 list-unstyled">
                                <li className="btn-card orange">Family</li>
                                <li className="btn-card redColor">Handycapped Friendly</li>
                                <li className="btn-card skyBlue">Ocean View</li>
                                <li className="btn-card blueTeal">Pool</li>
                                <li className="btn-card purple">Pool Heating</li>
                                <li className="btn-card darkTealGreen">Private Pool</li>
                                <li className="btn-card darkTealBrown">Private Setting</li>
                            </ul>
                            <div className="text-end w-100 mt-4 text-title mb-3">
                                <div>
                                    <small>from</small>
                                    <span className="curr">€</span>
                                    <span className="amount">170</span>
                                    <small>/night</small>
                                </div>
                            </div>
                            <p>Villa Tigotan is an inviting villa rental on La Palma, part of the Canary Islands, combining traditional architecture with pure luxury, a large private pool and an incomparable view of the Atlantic.</p>
                        <div className="card-text d-flex align-items-center gap-2 mt-auto"><span>Adults: 6</span> <span>Min.stay: 7</span></div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-md-6  mb-4">
                <Link to="" className="card-box cust-card-box h-100 d-flex flex-column">
                    <div className="img-box">
                        <img src={Cardrec04} alt="" />
                    </div>
                    <div className="text-box-card d-flex flex-column">
                            <h3>Villa Odo</h3>
                            <ul className="d-flex align-items-center gap-1 p-0 m-0 mb-3 list-unstyled">
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                            </ul>
                            <span className="mt-1">Lajares, Fuerteventura</span>
                            <ul className="d-flex align-items-center flex-wrap gap-btn-box p-0 m-0 mt-2 list-unstyled">
                                <li className="btn-card orange">Family</li>
                                <li className="btn-card limeGreen">Green, Eco-friendly</li>
                                <li className="btn-card blueTeal">Pool</li>
                                <li className="btn-card purple">Pool Heating</li>
                                <li className="btn-card darkTealGreen">Private Pool</li>
                            </ul>
                            <div className="text-end w-100 mt-4 text-title mb-3">
                                <div>
                                    <small>from</small>
                                    <span className="curr">€</span>
                                    <span className="amount">300</span>
                                    <small>/night</small>
                                </div>
                            </div>
                            <p>Luxurious holiday villa for up to 6 people, with a beautifully framed private pool, in the heart of northern Fuerteventura.</p>
                        <div className="card-text d-flex align-items-center gap-2 mt-auto"><span>Adults: 6</span> <span>Min.stay: 6</span></div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-md-6  mb-4">
                <Link to="" className="card-box cust-card-box h-100 d-flex flex-column">
                    <div className="img-box">
                        <img src={Cardrec05} alt="" />
                    </div>
                    <div className="text-box-card d-flex flex-column">
                            <h3>Villa Mocanes</h3>
                            <ul className="d-flex align-items-center gap-1 p-0 m-0 mb-3 list-unstyled">
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                            </ul>
                            <span className="mt-1">Frontera - Los Mocanes, El Hierro</span>
                            <ul className="d-flex align-items-center flex-wrap gap-btn-box p-0 m-0 mt-2 list-unstyled">
                                <li className="btn-card orange">Family</li>
                                <li className="btn-card skyBlue">Ocean View</li>
                                <li className="btn-card blueTeal">Pool</li>
                                <li className="btn-card darkTealGreen">Private Pool</li>
                            </ul>
                            <div className="text-end w-100 mt-4 text-title mb-3">
                                <div>
                                    <small>from</small>
                                    <span className="curr">€</span>
                                    <span className="amount">140</span>
                                    <small>/night</small>
                                </div>
                            </div>
                            <p>Modern, well-equipped and very comfortable holiday villa on El Hierro with private pool in a privileged location in the El Golfo Valley.</p>
                        <div className="card-text d-flex align-items-center gap-2 mt-auto"><span>Adults: 7</span> <span>Min.stay: 3</span></div>
                    </div>
                </Link>
            </div> 
            <div className="col-lg-3 col-md-6  mb-4">
                <Link to="" className="card-box cust-card-box h-100 d-flex flex-column">
                    <div className="img-box">
                        <img src={Cardrec06} alt="" />
                    </div>
                    <div className="text-box-card d-flex flex-column">
                            <h3>Villa Majarona</h3>
                            <ul className="d-flex align-items-center gap-1 p-0 m-0 mb-3 list-unstyled">
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                            </ul>
                            <span className="mt-1">Puntagorda, La Palma</span>
                            <ul className="d-flex align-items-center flex-wrap gap-btn-box p-0 m-0 mt-2 list-unstyled">
                                <li className="btn-card limeGreen">Green, Eco-friendly</li>
                                <li className="btn-card skyBlue">Ocean View</li>
                                <li className="btn-card blueTeal">Pool</li>
                                <li className="btn-card purple">Pool Heating</li>
                                <li className="btn-card darkTealGreen">Private Pool</li>
                            </ul>
                            <div className="text-end w-100 mt-4 text-title mb-3">
                                <div>
                                    <small>from</small>
                                    <span className="curr">€</span>
                                    <span className="amount">430</span>
                                    <small>/night</small>
                                </div>
                            </div>
                            <p>This exclusive luxury villa in the northwest of the island of La Palma offers the ultimate in comfort, unrivalled sea views, and a stunning infinity pool.</p>
                        <div className="card-text d-flex align-items-center gap-2 mt-auto"><span>Adults: 4</span> <span>Min.stay: 6</span></div>
                    </div>
                </Link>
            </div> 
            <div className="col-lg-3 col-md-6  mb-4">
                <Link to="" className="card-box cust-card-box h-100 d-flex flex-column">
                    <div className="img-box">
                        <img src={Cardrec07} alt="" />
                    </div>
                    <div className="text-box-card d-flex flex-column">
                            <h3>Villa Deleite</h3>
                            <ul className="d-flex align-items-center gap-1 p-0 m-0 mb-3 list-unstyled">
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                            </ul>
                            <span className="mt-1">Lajares, Fuerteventura</span>
                            <ul className="d-flex align-items-center flex-wrap gap-btn-box p-0 m-0 mt-2 list-unstyled">
                                <li className="btn-card orange">Family</li>
                                <li className="btn-card browndark">Hot Tub</li>
                                <li className="btn-card blueTeal">Pool</li>
                                <li className="btn-card darkTealGreen">Private Pool</li>
                            </ul>
                            <div className="text-end w-100 mt-4 text-title mb-3">
                                <div>
                                    <small>from</small>
                                    <span className="curr">€</span>
                                    <span className="amount">485</span>
                                    <small>/night</small>
                                </div>
                            </div>
                            <p>Villa Deleite is a dreamy retreat nestled in the charming village of Lajares, located in the northern part of Fuerteventura, just ten minutes from the beaches and the lively town of Corralejo.</p>
                        <div className="card-text d-flex align-items-center gap-2 mt-auto"><span>Adults: 8</span> <span>Min.stay: 5</span></div>
                    </div>
                </Link>
            </div> 
            <div className="col-lg-3 col-md-6  mb-4">
                <Link to="" className="card-box cust-card-box h-100 d-flex flex-column">
                    <div className="img-box">
                        <img src={Cardrec08} alt="" />
                    </div>
                    <div className="text-box-card d-flex flex-column">
                            <h3>Villa Caprica</h3>
                            <ul className="d-flex align-items-center gap-1 p-0 m-0 mb-3 list-unstyled">
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                            </ul>
                            <span className="mt-1">Las Breñas, Lanzarote</span>
                            <ul className="d-flex align-items-center flex-wrap gap-btn-box p-0 m-0 mt-2 list-unstyled">
                                <li className="btn-card orange">Family</li>
                                <li className="btn-card skyBlue">Ocean View</li>
                                <li className="btn-card blueTeal">Pool</li>
                                <li className="btn-card purple">Pool Heating</li>
                                <li className="btn-card darkTealGreen">Private Pool</li>
                            </ul>
                            <div className="text-end w-100 mt-4 text-title mb-3">
                                <div>
                                    <small>from</small>
                                    <span className="curr">€</span>
                                    <span className="amount">230</span>
                                    <small>/night</small>
                                </div>
                            </div>
                            <p>Charming villa with private pool in the tranquil rural village of Las Breñas.</p>
                        <div className="card-text d-flex align-items-center gap-2 mt-auto"><span>Adults: 6</span> <span>Min.stay: 7</span></div>
                    </div>
                </Link>
            </div> 
            <div className="col-lg-3 col-md-6  mb-4">
                <Link to="" className="card-box cust-card-box h-100 d-flex flex-column">
                    <div className="img-box">
                        <img src={Cardrec09} alt="" />
                    </div>
                    <div className="text-box-card d-flex flex-column">
                            <h3>Villa Bamanija</h3>
                            <ul className="d-flex align-items-center gap-1 p-0 m-0 mb-3 list-unstyled">
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                            </ul>
                            <span className="mt-1">Puerto Calero, Lanzarote</span>
                            <ul className="d-flex align-items-center flex-wrap gap-btn-box p-0 m-0 mt-2 list-unstyled">
                                <li className="btn-card orange">Family</li>
                                <li className="btn-card skyBlue">Ocean View</li>
                                <li className="btn-card blueTeal">Pool</li>
                                <li className="btn-card purple">Pool Heating</li>
                                <li className="btn-card darkTealGreen">Private Pool</li>
                            </ul>
                            <div className="text-end w-100 mt-4 text-title mb-3">
                                <div>
                                    <small>from</small>
                                    <span className="curr">€</span>
                                    <span className="amount">560</span>
                                    <small>/night</small>
                                </div>
                            </div>
                            <p>Situated in the quiet village of Puerto Calero, this impressive villa offers everything you need for a luxurious holiday in Lanzarote: from a 25-metre pool and magnificent sea views to a lounge with billiards.</p>
                        <div className="card-text d-flex align-items-center gap-2 mt-auto"><span>Adults: 10</span> <span>Min.stay: 7</span></div>
                    </div>
                </Link>
            </div> 
            <div className="col-lg-3 col-md-6  mb-4">
                <Link to="" className="card-box cust-card-box h-100 d-flex flex-column">
                    <div className="img-box">
                        <img src={Cardrec10} alt="" />
                    </div>
                    <div className="text-box-card d-flex flex-column">
                            <h3>Finca Esperanza</h3>
                            <ul className="d-flex align-items-center gap-1 p-0 m-0 mb-3 list-unstyled">
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                            </ul>
                            <span className="mt-1">El Paso, La Palma</span>
                            <ul className="d-flex align-items-center flex-wrap gap-btn-box p-0 m-0 mt-2 list-unstyled">
                                <li className="btn-card orange">Family</li>
                                <li className="btn-card limeGreen">Green, Eco-friendly</li>
                                <li className="btn-card browndark">Hot Tub</li>
                                <li className="btn-card skyBlue">Ocean View</li>
                                <li className="btn-card blueTeal">Pool</li>
                                <li className="btn-card purple">Pool Heating</li>
                                <li className="btn-card darkTealGreen">Private Pool</li>
                                <li className="btn-card darkTealBrown">Private Setting</li>
                                <li className="btn-card lighterTealBrown">Sauna</li>
                            </ul>
                            <div className="text-end w-100 mt-4 text-title mb-3">
                                <div>
                                    <small>from</small>
                                    <span className="curr">€</span>
                                    <span className="amount">340</span>
                                    <small>/night</small>
                                </div>
                            </div>
                            <p>A luxurious and historic retreat on La Palma, Finca Esperanza combines authentic Canarian charm with modern comfort.</p>
                        <div className="card-text d-flex align-items-center gap-2 mt-auto"><span>Adults: 6</span> <span>Min.stay: 7</span></div>
                    </div>
                </Link>
            </div> 
            <div className="col-lg-3 col-md-6  mb-4">
                <Link to="" className="card-box cust-card-box h-100 d-flex flex-column">
                    <div className="img-box">
                        <img src={Cardrec11} alt="" />
                    </div>
                    <div className="text-box-card d-flex flex-column">
                            <h3>Casa Ocanto</h3>
                            <ul className="d-flex align-items-center gap-1 p-0 m-0 mb-3 list-unstyled">
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <HelfStar />
                                </li>
                            </ul>
                            <span className="mt-1">Tijarafe, La Palma</span>
                            <ul className="d-flex align-items-center flex-wrap gap-btn-box p-0 m-0 mt-2 list-unstyled">
                                <li className="btn-card limeGreen">Green, Eco-friendly</li>
                                <li className="btn-card skyBlue">Ocean View</li>
                                <li className="btn-card blueTeal">Pool</li>
                                <li className="btn-card purple">Pool Heating</li>
                                <li className="btn-card darkTealGreen">Private Pool</li>
                                <li className="btn-card darkTealBrown">Private Setting</li>
                            </ul>
                            <div className="text-end w-100 mt-4 text-title mb-3">
                                <div>
                                    <small>from</small>
                                    <span className="curr">€</span>
                                    <span className="amount">180</span>
                                    <small>/night</small>
                                </div>
                            </div>
                            <p>It is a picture-book holiday home with pool on La Palma: romantic, dreamy, typically Canarian, with sea views as far as the eye can see.</p>
                        <div className="card-text d-flex align-items-center gap-2 mt-auto"><span>Adults: 4</span> <span>Min.stay: 7</span></div>
                    </div>
                </Link>
            </div> 
            <div className="col-lg-3 col-md-6  mb-4">
                <Link to="" className="card-box cust-card-box h-100 d-flex flex-column">
                    <div className="img-box">
                        <img src={Cardrec12} alt="" />
                    </div>
                    <div className="text-box-card d-flex flex-column">
                            <h3>Casa Alba Marina</h3>
                            <ul className="d-flex align-items-center gap-1 p-0 m-0 mb-3 list-unstyled">
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                                <li className="color-light-blue">
                                    <Star />
                                </li>
                            </ul>
                            <span className="mt-1">Tazacorte, La Palma</span>
                            <ul className="d-flex align-items-center flex-wrap gap-btn-box p-0 m-0 mt-2 list-unstyled">
                                <li className="btn-card limeGreen">Green, Eco-friendly</li>
                                <li className="btn-card skyBlue">Ocean View</li>
                                <li className="btn-card blueTeal">Pool</li>
                                <li className="btn-card purple">Pool Heating</li>
                                <li className="btn-card darkTealGreen">Private Pool</li>
                                <li className="btn-card darkTealBrown">Private Setting</li>
                            </ul>
                            <div className="text-end w-100 mt-4 text-title mb-3">
                                <div>
                                    <small>from</small>
                                    <span className="curr">€</span>
                                    <span className="amount">280</span>
                                    <small>/night</small>
                                </div>
                            </div>
                            <p>The stunning holiday villa of Casa Alba Marina, situated in Tazacorte at 230 m above sea level in the district of Marina Alta, makes holiday hearts beat faster.</p>
                        <div className="card-text d-flex align-items-center gap-2 mt-auto"><span>Adults: 4</span> <span>Min.stay: 7</span></div>
                    </div>
                </Link>
            </div> 

        </div>
    </div>
  )
}

export default RecommendationFour