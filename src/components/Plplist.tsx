import { Link } from 'react-router-dom'
import Plp01 from '../assets/images/blogRec-01.jpg'
import Plp02 from '../assets/images/blogRec-02.jpg'
import Plp03 from '../assets/images/blogRec-03.jpg'
import Plp04 from '../assets/images/blogRec-04.jpg'
import Plp05 from '../assets/images/blogRec-05.jpg'
import Plp06 from '../assets/images/blogRec-06.jpg'
import Plp07 from '../assets/images/blogRec-07.jpg'
import FullStar from '../assets/icons/FullStar'

const Plplist = () => {
    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="plplist-sec">
        
        <Link to="/villa-relax" className="card-box cust-card-box d-flex flex-wrap mb-3">
            <div className="img-box">
                <img src={Plp01} alt="" />
            </div>
            <div className="text-box-card d-flex flex-wrap ">
                <div className="plp-box-top d-flex flex-wrap w-100">
                    <div className='text-left-plp'>
                        <h3>Villa Relax </h3>
                         <ul className="d-flex align-items-center gap-1 p-0 m-0 mb-3 list-unstyled">
                                <li className="color-light-blue">
                                    <FullStar />
                                </li>
                                <li className="color-light-blue">
                                    <FullStar />
                                </li>
                                <li className="color-light-blue">
                                    <FullStar />
                                </li>
                                <li className="color-light-blue">
                                    <FullStar />
                                </li>
                                <li className="color-light-blue">
                                    <FullStar />
                                </li>
                            </ul>
                        <span className="mt-1">Tijarafe, La Palma</span>
                    </div>
                    <div className='text-right-plp text-end'>
                        <div className="text-end w-100 mt-4 text-title mb-3">
                            <div>
                                <small>from</small>
                                <span className="curr">€</span>
                                <span className="amount">235</span>
                                <small>/night</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="plp-box-bottom d-flex flex-wrap w-100">
                    <div className='text-left-plp'>
                        <p className='p-0'>Luxuriously furnished holiday villa on La Palma with private heated pool, jacuzzi & fantastic sea views for a truly premium vacation experience.</p>
                    </div>
                    <div className='text-right-plp'>
                        <div className="card-text d-flex align-items-center gap-2 justify-content-md-end"><span>Adults: 4</span> <span>Min.stay: 5</span></div>
                    </div>
                </div>
            </div>
        </Link>
        <Link to="/villa-relax" className="card-box cust-card-box d-flex flex-wrap mb-3">
            <div className="img-box">
                <img src={Plp02} alt="" />
            </div>
            <div className="text-box-card d-flex flex-wrap ">
                <div className="plp-box-top d-flex flex-wrap w-100">
                    <div className='text-left-plp'>
                        <h3>Villa Relax </h3>
                         <ul className="d-flex align-items-center gap-1 p-0 m-0 mb-3 list-unstyled">
                                <li className="color-light-blue">
                                    <FullStar />
                                </li>
                                <li className="color-light-blue">
                                    <FullStar />
                                </li>
                                <li className="color-light-blue">
                                    <FullStar />
                                </li>
                                <li className="color-light-blue">
                                    <FullStar />
                                </li>
                                <li className="color-light-blue">
                                    <FullStar />
                                </li>
                            </ul>
                        <span className="mt-1">Tijarafe, La Palma</span>
                    </div>
                    <div className='text-right-plp text-end'>
                        <div className="text-end w-100 mt-4 text-title mb-3">
                            <div>
                                <small>from</small>
                                <span className="curr">€</span>
                                <span className="amount">235</span>
                                <small>/night</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="plp-box-bottom d-flex flex-wrap w-100">
                    <div className='text-left-plp'>
                        <p className='p-0'>Luxuriously furnished holiday villa on La Palma with private heated pool, jacuzzi & fantastic sea views for a truly premium vacation experience.</p>
                    </div>
                    <div className='text-right-plp'>
                        <div className="card-text d-flex align-items-center gap-2 justify-content-md-end"><span>Adults: 4</span> <span>Min.stay: 5</span></div>
                    </div>
                </div>
            </div>
        </Link>
        <Link to="/villa-relax" className="card-box cust-card-box d-flex flex-wrap mb-3">
            <div className="img-box">
                <img src={Plp03} alt="" />
            </div>
            <div className="text-box-card d-flex flex-wrap ">
                <div className="plp-box-top d-flex flex-wrap w-100">
                    <div className='text-left-plp'>
                        <h3>Villa Relax </h3>
                         <ul className="d-flex align-items-center gap-1 p-0 m-0 mb-3 list-unstyled">
                                <li className="color-light-blue">
                                    <FullStar />
                                </li>
                                <li className="color-light-blue">
                                    <FullStar />
                                </li>
                                <li className="color-light-blue">
                                    <FullStar />
                                </li>
                                <li className="color-light-blue">
                                    <FullStar />
                                </li>
                                <li className="color-light-blue">
                                    <FullStar />
                                </li>
                            </ul>
                        <span className="mt-1">Tijarafe, La Palma</span>
                    </div>
                    <div className='text-right-plp text-end'>
                        <div className="text-end w-100 mt-4 text-title mb-3">
                            <div>
                                <small>from</small>
                                <span className="curr">€</span>
                                <span className="amount">235</span>
                                <small>/night</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="plp-box-bottom d-flex flex-wrap w-100">
                    <div className='text-left-plp'>
                        <p className='p-0'>Luxuriously furnished holiday villa on La Palma with private heated pool, jacuzzi & fantastic sea views for a truly premium vacation experience.</p>
                    </div>
                    <div className='text-right-plp'>
                        <div className="card-text d-flex align-items-center gap-2 justify-content-md-end"><span>Adults: 4</span> <span>Min.stay: 5</span></div>
                    </div>
                </div>
            </div>
        </Link>
        <Link to="/villa-relax" className="card-box cust-card-box d-flex flex-wrap mb-3">
            <div className="img-box">
                <img src={Plp04} alt="" />
            </div>
            <div className="text-box-card d-flex flex-wrap ">
                <div className="plp-box-top d-flex flex-wrap w-100">
                    <div className='text-left-plp'>
                        <h3>Villa Relax </h3>
                        <span className="mt-1">Tijarafe, La Palma</span>
                    </div>
                    <div className='text-right-plp text-end'>
                        <div className="text-end w-100 mt-4 text-title mb-3">
                            <div>
                                <small>from</small>
                                <span className="curr">€</span>
                                <span className="amount">235</span>
                                <small>/night</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="plp-box-bottom d-flex flex-wrap w-100">
                    <div className='text-left-plp'>
                        <p className='p-0'>Luxuriously furnished holiday villa on La Palma with private heated pool, jacuzzi & fantastic sea views for a truly premium vacation experience.</p>
                    </div>
                    <div className='text-right-plp'>
                        <div className="card-text d-flex align-items-center gap-2 justify-content-md-end"><span>Adults: 4</span> <span>Min.stay: 5</span></div>
                    </div>
                </div>
            </div>
        </Link>
        <Link to="/villa-relax" className="card-box cust-card-box d-flex flex-wrap mb-3">
            <div className="img-box">
                <img src={Plp05} alt="" />
            </div>
            <div className="text-box-card d-flex flex-wrap ">
                <div className="plp-box-top d-flex flex-wrap w-100">
                    <div className='text-left-plp'>
                        <h3>Villa Relax </h3>
                        <span className="mt-1">Tijarafe, La Palma</span>
                    </div>
                    <div className='text-right-plp text-end'>
                        <div className="text-end w-100 mt-4 text-title mb-3">
                            <div>
                                <small>from</small>
                                <span className="curr">€</span>
                                <span className="amount">235</span>
                                <small>/night</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="plp-box-bottom d-flex flex-wrap w-100">
                    <div className='text-left-plp'>
                        <p className='p-0'>Luxuriously furnished holiday villa on La Palma with private heated pool, jacuzzi & fantastic sea views for a truly premium vacation experience.</p>
                    </div>
                    <div className='text-right-plp'>
                        <div className="card-text d-flex align-items-center gap-2 justify-content-md-end"><span>Adults: 4</span> <span>Min.stay: 5</span></div>
                    </div>
                </div>
            </div>
        </Link>
        <Link to="/villa-relax" className="card-box cust-card-box d-flex flex-wrap mb-3">
            <div className="img-box">
                <img src={Plp06} alt="" />
            </div>
            <div className="text-box-card d-flex flex-wrap ">
                <div className="plp-box-top d-flex flex-wrap w-100">
                    <div className='text-left-plp'>
                        <h3>Villa Relax </h3>
                        <span className="mt-1">Tijarafe, La Palma</span>
                    </div>
                    <div className='text-right-plp text-end'>
                        <div className="text-end w-100 mt-4 text-title mb-3">
                            <div>
                                <small>from</small>
                                <span className="curr">€</span>
                                <span className="amount">235</span>
                                <small>/night</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="plp-box-bottom d-flex flex-wrap w-100">
                    <div className='text-left-plp'>
                        <p className='p-0'>Luxuriously furnished holiday villa on La Palma with private heated pool, jacuzzi & fantastic sea views for a truly premium vacation experience.</p>
                    </div>
                    <div className='text-right-plp'>
                        <div className="card-text d-flex align-items-center gap-2 justify-content-md-end"><span>Adults: 4</span> <span>Min.stay: 5</span></div>
                    </div>
                </div>
            </div>
        </Link>
        <Link to="/villa-relax" className="card-box cust-card-box d-flex flex-wrap mb-3">
            <div className="img-box">
                <img src={Plp07} alt="" />
            </div>
            <div className="text-box-card d-flex flex-wrap ">
                <div className="plp-box-top d-flex flex-wrap w-100">
                    <div className='text-left-plp'>
                        <h3>Villa Relax </h3>
                        <span className="mt-1">Tijarafe, La Palma</span>
                    </div>
                    <div className='text-right-plp text-end'>
                        <div className="text-end w-100 mt-4 text-title mb-3">
                            <div>
                                <small>from</small>
                                <span className="curr">€</span>
                                <span className="amount">235</span>
                                <small>/night</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="plp-box-bottom d-flex flex-wrap w-100">
                    <div className='text-left-plp'>
                        <p className='p-0'>Luxuriously furnished holiday villa on La Palma with private heated pool, jacuzzi & fantastic sea views for a truly premium vacation experience.</p>
                    </div>
                    <div className='text-right-plp'>
                        <div className="card-text d-flex align-items-center gap-2 justify-content-md-end"><span>Adults: 4</span> <span>Min.stay: 5</span></div>
                    </div>
                </div>
            </div>
        </Link>

        <div className="d-flex pagination-filter justify-content-between align-items-center border p-0  flex-wrap gap-3 pb-md-5 mb-2 pt-2">
            <button className="btn btn-light radius-0"  onClick={scrollToTop}>
                BACK UP
            </button>
            <div className="d-flex gap-1 flex-wrap">
                <button className="btn btn-light radius-0">FIRST PAGE</button>
                <button className="btn btn-active text-white radius-0">1</button>
                <button className="btn btn-light radius-0">2</button>
                <button className="btn btn-light radius-0">3</button>
                <button className="btn btn-light radius-0">...</button>
                <button className="btn btn-light radius-0">18</button>
                <button className="btn btn-light radius-0">&gt;</button>
                <button className="btn btn-light radius-0">LAST PAGE</button>
            </div>
        </div>
    </div>
  )
}

export default Plplist