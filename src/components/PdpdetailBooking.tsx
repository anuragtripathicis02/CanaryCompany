import { useState } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";


const PdpdetailBooking = () => {
    
          const [arrivalDate, setArrivalDate] = useState<Date | null>(null);
          const [departureDate, setDepartureDate] = useState<Date | null>(null);
        
          const [island, setIsland] = useState("");
          const [island1, setIsland1] = useState("");
          const [island2, setIsland2] = useState("");

  return (
    <div className="pdp-booking-sec plplist-sec pt-0">
        <div className="bg-white p-3 info-card  text-box-card">
            <div className="plp-box-top d-flex flex-wrap ">
                <div className='text-left-plp'>
                    <h2>Villa Relax </h2>
                    <span className="mt-1 grey-color">Tijarafe, La Palma</span>
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
            <ul className="d-flex align-items-center flex-wrap gap-btn-box p-0 m-0 mt-2 mb-4 list-unstyled">
                <li className="btn-card limeGreen">Green, Eco-friendly</li>
                <li className="btn-card browndark">Hot Tub</li>
                <li className="btn-card skyBlue">Ocean View</li>
                <li className="btn-card blueTeal">Pool</li>
                <li className="btn-card purple">Pool Heating</li>
                <li className="btn-card darkTealGreen">Private Pool</li>
            </ul>
            <p className="pb-2">To see final price and book Villa Relax for your holidays please fill the form in 2 steps:</p>
            <h6>1. Travel plans</h6>
            <div className="datepicker-sec d-flex align-items-center flex-wrap border-0 shadow-none p-0 mt-3 flex-column card-box mb-0">
                <div className="date-box w-100 m-0 mb-4">
                    <h6 className="mb-2">When do you plan to arrive?</h6>
                    <div className="filter-box ">
                        <DatePicker selected={arrivalDate} onChange={(date: Date | null) => {   setArrivalDate(date);   if (departureDate && date && date >= departureDate) { setDepartureDate(null);   } }} placeholderText="Arrival Date" className="form-control" minDate={new Date()} />
                    </div>
                </div>
                <div className="date-box w-100 m-0 mb-4">
                    <h6 className="mb-2">When do you plan to leave?</h6>
                    <div className="filter-box">
                        <DatePicker selected={departureDate} onChange={(date: Date | null) => setDepartureDate(date)} placeholderText="Departure Date" className="form-control" minDate={arrivalDate || new Date()} disabled={!arrivalDate}/>
                    </div>
                </div>
                <div className="date-box w-100 m-0 mb-4">
                    <h6 className="mb-2">How many adults are you?</h6>
                    <select className="form-select form-control search-input" value={island} onChange={(e) => setIsland(e.target.value)}>
                        <option value="">Select number of adults</option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="date-box w-100 m-0 mb-4">
                    <h6 className="mb-2">How many children (age 3-17) are with you?</h6>
                    <select className="form-select form-control search-input" value={island1} onChange={(e) => setIsland1(e.target.value)}>
                        <option value="">Select number of children</option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="date-box w-100 m-0 mb-4">
                    <h6 className="mb-2">How many babies (age &lt;3) are with you?</h6>
                    <select className="form-select form-control search-input" value={island2} onChange={(e) => setIsland2(e.target.value)}>
                        <option value="">Select number of babies</option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <span className="small-text">Babies (age &lt;3) are free of charge!</span>
                </div>
                <div className=" p-2 w-100 text-center mb-3 bg-light-blue">
                    <p className="p-0 m-0">Please select start date</p>
                </div>
                <div className="date-box button-box w-100 m-0 mb-md-0">
                    <Link to="/vc-luxury-village-ii" className="submit-btn btn-theme w-100 d-block text-center py-1">Request booking</Link>
                </div>
                <div className="date-box button-box w-100 m-0 mb-md-0 mt-3">
                    <Link to="/review" className="submit-btn btn-theme w-100 d-block text-center py-1">Review</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PdpdetailBooking