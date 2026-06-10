import { Form } from "react-bootstrap"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="login-sec py-4">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                    <div className="login-box bg-white p-3 mb-4">
                        <h3 className="mb-3 weight-400">Login</h3>
                        <p>Forgotten your password? <Link to="/reset-password" className="light-blue"><strong>Reset it here.</strong></Link></p>
                        <div className="form-login">
                            <div className="date-box w-100 m-0 mb-3">
                                <label className="mb-1">Username Or Email</label>
                                <Form.Group className="mb-0" controlId="formGroupEmail">
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </div>
                            <div className="date-box w-100 m-0 mb-3">
                                <label className="mb-1">Password</label>
                                <Form.Group className="mb-0" controlId="formGroupEmail">
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </div>
                            <div className="select-check mb-4">
                                <Form.Check aria-label="option 2" label="Remember Me" name="group2" id="tag-1"/>
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

export default Login