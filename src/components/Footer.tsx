import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.png'
import { Button, Form } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-sec bg-white py-4">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-3 col-md-12 mb-lg-0 mb-4">
                <div className="logo-footre">
                  <Link to="">
                    <img src={Logo} alt="" />
                  </Link>
                  <span className="d-block tag-line">Homes and Holidays in the Canary Islands</span>
                </div>
                <div className="logo-bottom">
                  <p>Barranco San Vicente, Pista Quintero 42 A-38700 Santa Cruz de La Palma</p>
                  <ul className="p-0 m-0 list-unstyled">
                    <li>
                      <Link to="tel:+34 633 427 967" className="light-blue">+34 633 427 967</Link>
                    </li>
                    <li>
                      <Link to="mailto:info@canarycompany.com" className="light-blue">info@canarycompany.com</Link>
                    </li>
                  </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-12 mb-lg-0 mb-4">
              <div className="footer-box ">
                  <p className="tag-line">We are a small individual and family managed holiday home agency on La Palma. We love what we do! High-quality and unique holiday accommodations are our passion. Let yourself be fascinated by our hand-picked selection of characterful apartments, holiday homes and villas.</p>
                  <Link to="" className="light-blue">More about us</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 mb-lg-0 mb-4">
              <div className="footer-box">
                  <p>I am searching for specific accommodation or place in the Canary Islands</p>
                  <Form className="search-btn">
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label className="d-none">Email address</Form.Label>
                      <Form.Control type="email" placeholder="" />
                      <Button type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
                      </Button>
                    </Form.Group>
                  </Form>
                  <p className="tag-line">Latest news, hot offers and real time pictures on:</p>
                  <ul className="p-0 m-0 list-unstyled d-flex align-items-center gap-2 social-icons">
                    <li>
                      <Link to="//www.facebook.com/CanaryCompany">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path></svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="//twitter.com/_CanaryCompany_">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path></svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/canarycompanyteam">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path></svg>
                      </Link>
                    </li>
                  </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 mb-lg-0 mb-4">
              <div className="footer-box">
                <p className="tag-line">Send me travel tips, your new holiday homes and special offers!</p>
                  <Form>
                    <Form.Group className="mb-2" controlId="formGroupEmail">
                      <Form.Control type="email" placeholder="My email is.." />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formGroupEmail">
                      <Form.Control type="email" placeholder="My Name is.." />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formGroupEmail">
                      <Form.Control type="email" placeholder="My Last Name is.." />
                    </Form.Group>
                    <Button type="button" className="submit-btn btn-theme">Get newsletter</Button>
                  </Form>
                  <span className="d-block text-small">*We will never share any of your information with third parties.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="d-flex align-items-center gap-2 justify-content-md-between justify-content-center flex-md-nowrap flex-wrap">
            <p className="copy-right p-0 m-0">© CanaryCompany.com 2025. All rights reserved.</p>
            <ul className="p-0 m-0 d-flex align-items-center gap-md-3 gap-2 flex-wrap justify-content-center text-md-end txet-center">
              <li>
                <Link to="">FAQ</Link>
              </li>
              <li>
                <Link to="">LegalPrivacy</Link>
              </li>
              <li>
                <Link to="">PolicyGeneral</Link>
              </li>
              <li>
                <Link to="">Business</Link>
              </li>
              <li>
                <Link to="/login">TermsLogin</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer