import { Link } from "react-router-dom"

const Details = () => {
  return (
    <div className="pdp-details-tab">
        <div className="tabs-content-box">
            <h2>Facilities</h2>
            <div className="listing-card d-flex flex-wrap mb-4">
                <div className="card-list">
                    <ul className="p-0 m-0 mb-3 list-unstyled">
                        <li>1 Bathroom</li>
                        <li>2 Double Bedrooms</li>
                    </ul>
                    <ul className="p-0 m-0 mb-3 list-unstyled">
                        <li>Bidet</li>
                        <li>Dishwasher</li>
                        <li>Espresso Machine</li>
                    </ul>
                    <ul className="p-0 m-0 mb-3 list-unstyled">
                        <li>Gas Barbecue</li>
                        <li>Internet - WiFi</li>
                        <li>Living Room with Kitchen and Dining Room</li>
                        <li>Pool Electrically Heated</li>
                        <li>SAT-TV</li>
                        <li>Sofa Bed for 2 Persons</li>
                    </ul>
                    <ul className="p-0 m-0 mb-3 list-unstyled">
                        <li>Sunbeds</li>
                        <li>Washing Machine</li>
                    </ul>
                </div>
                <div className="card-list">
                    <ul className="p-0 m-0 mb-3 list-unstyled">
                        <li>1 Bathroom En-Suite</li>
                        <li>Air Condition Cold / Warm</li>
                    </ul>
                    <ul className="p-0 m-0 mb-3 list-unstyled">
                        <li>Chill-Out Area</li>
                        <li>Dryer</li>
                        <li>Fridge / Freezer</li>
                    </ul>
                    <ul className="p-0 m-0 mb-3 list-unstyled">
                        <li>Hair Dryer</li>
                        <li>Iron</li>
                        <li>Microwave</li>
                        <li>Oven</li>
                        <li>Private Swimming Pool</li>
                        <li>Shower</li>
                        <li>Soundsystem with Bluetooth Connect</li>
                        <li>Terrace</li>
                        <li>Whirlpool</li>
                    </ul>
                </div>
                <div className="card-list">
                    <ul className="p-0 m-0 mb-3 list-unstyled">
                        <li>1 Double Bed 180x200</li>
                        <li>Bed Linen & Towels are Provided</li>
                        <li>Coffee Maker</li>
                        <li>Electric Kettle</li>
                        <li>Fully Automatic Coffee Machine</li>
                        <li>Hoover</li>
                        <li>Ironing Board</li>
                        <li>Outdoor Furniture</li>
                        <li>Parking Space</li>
                        <li>Safe</li>
                        <li>Sofa</li>
                        <li>Stove</li>
                        <li>Sun Umbrellas</li>
                        <li>Toaster</li>
                        <li>Writing Desk</li>
                    </ul>
                </div>
            </div>
            <h2>Facilities</h2>
            <p className="mb-4">WiFi included</p>
            <h2>Location and Distances</h2>
            <div className="mb-4">
                <span className="d-block">Elevation: 450 m</span>
                <span className="d-block">Airport: 41 km</span>
                <span className="d-block">Harbor: 43 km</span>
                <span className="d-block">Restaurant: 3,8 km</span>
                <span className="d-block">Shop: 5,9 km</span>
            </div>
            <h2>Medical help</h2>
            <p className="mb-4">Health center (doctor): 6 km</p>
            <h2>Check In / Check Out</h2>
            <div className="mb-4">
                <span className="d-block">16:00 h</span>
                <span className="d-block">10:00 h</span>
            </div>
            <h2>Payment / Cancellation</h2>
            <p className="mb-4">The prices are not binding and may vary! The deposit is 36 % of the total price and is to be paid by bank transfer. The final payment shall be paid by bank transfer 4 weeks before arrival. 
            <span className="d-block">In case of cancellation, please refer to our <Link to="" className="light-blue"><strong> General Business Terms.</strong></Link></span>
            <span className="d-block">Cancellation free of charge is not possible.</span>
            <span className="d-block">We recommend taking travel insurance.</span>
            </p>
            <h2>Additional information</h2>
            <p className="m-0 p-0">- private pool</p>
            <p className="p-0 m-0 ">- Licence: ESFCTU0000380040009567350000000000000VV-38-5-00025824</p>
        </div>
    </div>
  )
}

export default Details