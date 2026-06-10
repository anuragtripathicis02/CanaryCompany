
import FeelHome from "../assets/images/la-palma.jpg";

const RequestBookingAbout = ({ removeTopPadding = false }) => {
  return (
    <div className={`home-features pb-5 ${ removeTopPadding ? "" : "pt-64  py-4"}`}>
        <div className="bg-white p-3">
            <div className="feature-card info-card h-100">
                <h4 className="feature-title font-dancingScript weight-400">Thank you for your interest in our holiday homes!</h4>
                <div className="img-box py-3">
                    <img src={FeelHome} alt="" />
                </div>
                <div className="listing-card ">
                    <ul className="p-0 m-0 mb-3 list-unstyled d-flex flex-column gap-2 ">
                        <li>During your stay we are at your disposal for any questions or wishes you may have.</li>
                        <li>Since 2006 Canary Company has been turning travel dreams into reality for curious, independent explorers.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RequestBookingAbout