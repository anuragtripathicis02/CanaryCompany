import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <div className="about-us-sec mt-4 mb-4">
        <div className="container">
            <div className='row'>
                <div className="col-lg-8">
                    <div className="bg-white p-3 mb-4">
                        <h3 className="p-0 m-0 mb-3 ">Contact</h3>
                        <h6 className="p-0 m-0 mb-3 weight-400 font-dancingScript">Get in touch – We’d love to hear from you!</h6>
                        <p>Hola, we’re Franzi and Hannes – the two people behind Canary Company. We live and work on the beautiful island of La Palma and help travelers from all over the world find their perfect holiday villa on the Canary Islands.</p>
                        <p>Are you dreaming of a <Link to="" className='light-blue'><strong>cozy holiday home in the green hills of La Palma, a luxury villa on Lanzarote,</strong></Link> or <Link to="" className='light-blue'><strong>a beachfront villa on Fuerteventura</strong></Link>? We’re happy to help you find a place that feels like your second home – just like it did for us when we first arrived here.</p>
                        <p>We personally know every house we list and have built strong relationships with the local hosts and service providers. Whether you’re looking for a romantic getaway, a quiet spot to work remotely, or a family holiday with kids – we’re here for you with honest advice and local knowledge.</p>
                        <p>Use the contact form, send us an email, or just say hello – we’re always happy to connect.</p>
                        <p>Let’s plan your perfect time on the islands – together!</p>
                        <div className="mape-sec">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.9732555526352!2d-17.785818336889147!3d28.69044662017079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6bf17ba047deeb%3A0x500759afb86f7ed4!2sCanaryCompany%20-%20Villas%20and%20Holiday%20Homes!5e0!3m2!1sen!2sin!4v1780570424739!5m2!1sen!2sin" width="100%" height="450" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className='contact-form'>
                        <div className="bg-white p-3 mb-4">
                             <h6 className="p-0 m-0 mb-3 weight-400 font-dancingScript">Send us a message</h6>
                            <div className="date-box w-100 m-0 mb-3">
                                <label className="mb-1">Your name</label>
                                <Form.Group className="mb-0" controlId="formGroupEmail">
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </div>
                            <div className="date-box w-100 m-0 mb-3">
                                <label className="mb-1">Your e-mail</label>
                                <Form.Group className="mb-0" controlId="formGroupEmail">
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </div>
                            <div className="date-box w-100 m-0 mb-3">
                                <label className="mb-1">Your message</label>
                                <Form.Group className="mb-0" controlId="formGroupEmail"> 
                                    <Form.Control as="textarea" rows={5} />
                                    {/* <Form.Control type="text" placeholder="" /> */}
                                </Form.Group>
                            </div>
                            <div className="date-box button-box w-100 m-0 mb-md-2">
                                <Button type="button" className="submit-btn btn-theme py-2 px-4">Send</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs