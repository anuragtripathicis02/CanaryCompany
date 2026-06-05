import { Form } from "react-bootstrap"
import { Link } from "react-router-dom"

const ReviewRating = () => {
  return (
    <div className="login-sec my-4">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                    <div className="login-box bg-white p-3 mb-4">
                        <h3 className="mb-3 weight-400">We would like to know your opinion about Villa Relax</h3>
                        <p className="m-0 p-0">Please rate your experience:</p>
                        <ul className="review-rating p-0 m-0 my-2 list-unstyled d-flex align-items-center gap-2">
                            <li>★</li>
                            <li>★</li>
                            <li>★</li>
                            <li>★</li>
                            <li>★</li>
                        </ul>
                        <div className="form-login">
                            <div className="date-box w-100 m-0 mb-3">
                                <label className="mb-1">Your Name:</label>
                                <Form.Group className="mb-0" controlId="formGroupEmail">
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </div>
                            <div className="date-box w-100 m-0 mb-3">
                                <label className="mb-1">Your Review:</label>
                                <Form.Group className="mb-0" controlId="formGroupEmail">
                                     <Form.Control as="textarea" rows={5} />
                                </Form.Group>
                            </div>
                            <Link to="" className="submit-btn btn-theme py-2 px-4 w-100 d-block text-center">Submit</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewRating
