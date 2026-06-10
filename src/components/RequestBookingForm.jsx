import { Form } from "react-bootstrap"
import { Link } from "react-router-dom"


const RequestBookingForm = () => {
  return (
    <div className="request-booking-sec info-card">
        <div className="bg-white p-3 mb-4">
            <h5 className="pb-3">2. Your contact details</h5>
            <p>We use your information to process your inquiry. Read our <Link to="" className="light-blue"><strong>privacy policy</strong></Link>  to learn more.</p>
            <div className="request-form">
                <div className="date-box w-100 m-0 mb-3">
                    <label className="mb-1">Name</label>
                    <Form.Group className="mb-0" controlId="formGroupEmail">
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                </div>
                <div className="date-box w-100 m-0 mb-3 card-text">
                    <label className="mb-1">Email address</label>
                    <Form.Group className="mb-0" controlId="formGroupEmail">
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <span>We'll send you booking confirmation here.</span>
                </div>
                <div className="date-box w-100 m-0 mb-3 card-text">
                    <label className="mb-1">Phone number (optional)</label>
                    <Form.Group className="mb-0" controlId="formGroupEmail">
                        <Form.Control type="text" placeholder="99-999-9999" />
                    </Form.Group>
                    <span>We'll call you back on this number if you prefer to be contacted by phone.</span>
                </div>
                <div className="date-box w-100 m-0 mb-3 card-text">
                    <label className="mb-1">Requests and comments (optional)</label>
                    <Form.Group className="mb-0" controlId="formGroupEmail">
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                    <span>Any other questions, requirements and wishes you have regarding your future stay.</span>
                </div>
                <ul className="p-0 m-0 list-unstyled d-flex align-items-center gap-2 pt-3 pb-3">
                    <li>
                        <Link to="" className="submit-btn btn-theme py-2 px-4">Cancel</Link>
                    </li>
                    <li>
                        <Link to="" className="submit-btn btn-theme py-2 px-4">Submit Inquiry</Link>
                    </li>
                </ul>
                <p>Non-binding inquiry. We will contact you within 24 hours.</p>
            </div>
        </div>
    </div>
  )
}

export default RequestBookingForm