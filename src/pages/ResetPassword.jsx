import { Form } from "react-bootstrap"
import { Link } from "react-router-dom"


const ResetPassword = () => {
  return (
    <div className="login-sec py-4">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                    <div className="login-box bg-white p-3 mb-4">
                        <h3 className="mb-3 weight-400">Reset password</h3>
                        <p>Don't have an account yet?  <Link to="/login" className="light-blue"><strong>Sign up.</strong></Link></p>
                        <div className="form-login">
                            <div className="date-box w-100 m-0 mb-4">
                                <label className="mb-1">Username or email address</label>
                                <Form.Group className="mb-0" controlId="formGroupEmail">
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </div>
                            <Link to="" className="submit-btn btn-theme py-2 px-4 w-100 d-block text-center">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResetPassword