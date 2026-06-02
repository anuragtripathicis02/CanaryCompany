import { Link } from "react-router-dom"
import Star from "../assets/icons/star"
import Cardrec01 from "../assets/images/card-rec-01.jpg"
import Cardrec02 from "../assets/images/card-rec-02.jpg"

const Recommendations = () => {
  return (
    <div className="recommendations-sec">
        <div className="heading-box">
            <h3>House recommendations for June</h3>
        </div>
        <div className="row">
            <div className="col-md-6 mb-md-0 mb-4">
                <Link to="" className="card-box cust-card-box h-100 d-flex flex-column">
                    <div className="img-box">
                        <img src={Cardrec01} alt="" />
                    </div>
                    <div className="text-box-card d-flex flex-column">
                            <h3>Villa Bajamar</h3>
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
                            <ul className="d-flex align-items-center gap-2 p-0 m-0 mt-2 list-unstyled">
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
                                    <span className="amount">370</span>
                                    <small>/night</small>
                                </div>
                            </div>
                            <p>Exceptional villa in Puntagorda, on the island of La Palma, with infinity pool, stunning views over the Atlantic, and the ultimate in comfort.</p>
                        <div className="card-text d-flex align-items-center gap-2 mt-auto"><span>Adults: 2</span> <span>Min.stay: 6</span></div>
                    </div>
                </Link>
            </div>
            <div className="col-md-6 mb-md-0 mb-4">
                <Link to="" className="card-box cust-card-box h-100 d-flex flex-column">
                    <div className="img-box">
                        <img src={Cardrec02} alt="" />
                    </div>
                    <div className="text-box-card d-flex flex-column">
                            <h3>Villa Relax</h3>
                            <span className="mt-1">Tijarafe, La Palma</span>
                            <ul className="d-flex align-items-center gap-2 p-0 m-0 mt-2 list-unstyled">
                                <li className="btn-card limeGreen">Green, Eco-friendly</li>
                                <li className="btn-card browndark">Hot Tub</li>
                                <li className="btn-card skyBlue">Ocean View</li>
                                <li className="btn-card blueTeal">Pool</li>
                                <li className="btn-card purple">Pool Heating</li>
                                <li className="btn-card darkTealGreen">Private Pool</li>
                            </ul>
                            <div className="text-end w-100 mt-4 text-title mb-3">
                                <div>
                                    <small>from</small>
                                    <span className="curr">€</span>
                                    <span className="amount">245</span>
                                    <small>/night</small>
                                </div>
                            </div>
                            <p>Luxuriously furnished holiday villa on La Palma with private heated pool, jacuzzi & fantastic sea views for a truly premium vacation experience.</p>
                        <div className="card-text d-flex align-items-center gap-2 mt-auto"><span>Adults: 4</span> <span>Min.stay: 7</span></div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Recommendations