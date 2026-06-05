import RequestBookingAbout from "../components/RequestBookingAbout"
import RequestBookingForm from "../components/RequestBookingForm"


const Requestbooking = () => {
  return (
    <div className="request-booking-sec pt-4 pb-3">
        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <div className="request-booking-list">
                        <RequestBookingForm />
                    </div>
                </div>
                <div className="col-lg-3">
                    <RequestBookingAbout removeTopPadding={true}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Requestbooking