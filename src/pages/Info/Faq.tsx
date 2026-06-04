import { Accordion } from "react-bootstrap"
import { Link } from "react-router-dom"

const Faq = () => {
  return (
    <div className="Faq mt-4">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-4">
                    <div className="bg-white p-3 info-card h-100">
                        <h3 className="mb-3 weight-400">Frequently Asked Questions</h3>
                        <p className="p-0">Here you’ll find answers to the most common questions about booking your holiday with CanaryCompany. Whether you’re wondering how the booking process works, which islands we serve, or what makes our service so personal – we’ve got you covered. If you can’t find what you’re looking for, feel free to  <Link to="" className="light-blue"><strong>reach out to us</strong></Link>  directly. We’re always happy to help!</p>
                    </div>
                </div>
                <div className="col-md-12 mb-4">
                    <div className="bg-white p-3 info-card h-100">
                        <h5 className="color-light-blue mb-3">About CanaryCompany</h5>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is CanaryCompany?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="p-0">CanaryCompany is a family-run rental agency based on La Palma. We specialize in high-quality, hand-picked holiday homes, apartments, and villas on La Palma, Fuerteventura, Lanzarote, and El Hierro – with personal service, transparency, and great attention to detail.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Who is behind CanaryCompany?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="p-0">Behind CanaryCompany are Franzi and Hannes – a couple with a solid background in tourism. Both live on La Palma and know all the accommodation on offer personally. Find out more about us <Link to="" className="light-blue"><strong>here.</strong></Link> </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>What kind of accommodations are offered?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="p-0">We offer individually selected fincas, holiday homes, apartments, and exclusive villas – many with sea views, private pools, sustainable features, or secluded locations. No mass-market properties – only places with character and comfort.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>On which islands are accommodations available?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="p-0">You can find our accommodations on: </p>
                                    <ul className="listing-box-dot list-unstyled p-0 m-0">
                                        <li>La Palma</li>
                                        <li>Fuerteventura</li>
                                        <li>Lanzarote</li>
                                        <li>El Hierro</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <div className="col-md-12 mb-4">
                    <div className="bg-white p-3 info-card h-100">
                        <h5 className="color-light-blue mb-3">Booking & Payment</h5>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How does the booking process work?</Accordion.Header>
                                <Accordion.Body>
                                     <ul className="listing-box-dot list-unstyled p-0 m-0">
                                        <li>Choose your desired accommodation on our website</li>
                                        <li>Send a non-binding booking request or contact us directly</li>
                                        <li>You’ll receive a personalized offer with all the details</li>
                                        <li>After your confirmation, you’ll get a booking confirmation with payment information</li>
                                        <li>Your holiday can begin!</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>When is payment due for my booking?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="p-0">After your binding booking, you’ll receive a booking confirmation with payment details. Usually, a deposit is required, the remaining amount is due a few weeks before arrival. The exact terms depend on the property and are clearly stated in the property description and your booking confirmation.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>What happens if I need to cancel my booking?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="p-0">The cancellation policy depends on the specific accommodation. You’ll find the details in our <Link to="" className="light-blue"><strong>terms & conditions</strong></Link> , in the listing of the property, or in your booking confirmation.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <div className="col-md-12 mb-4">
                    <div className="bg-white p-3 info-card h-100">
                        <h5 className="color-light-blue mb-3">Arrival & Stay</h5>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How does Check-In and Check-Out work?</Accordion.Header>
                                <Accordion.Body>
                                     <ul className="listing-box-dot list-unstyled p-0 m-0">
                                        <li>Check-In: between 3.00 pm and 5.00 pm</li>
                                        <li>Check-Out: between 10.00 am and 12.00 pm</li>
                                        <li>An earlier Check-In or later Check-Out can be requested individually. Availability depends on previous or following bookings and can only be confirmed shortly before arrival.</li>
                                        <li>Check-In may be personal or via key box, depending on the property. You’ll receive all the relevant details before your arrival.</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Are parties or events allowed?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="p-0">No. Our properties are intended for private stays only. Parties, events, or loud gatherings are not allowed.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Is there a minimum stay?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="p-0">Usually, the minimum stay is between 5 and 7 nights, depending on the property. Exact information is available in the property description.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Can I bring my dog?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="p-0">Some accommodations are pet-friendly – others are not. Please let us know in advance if you plan to travel with a pet, so we can recommend suitable properties. Alternatively, use the “Pets” filter during your search.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <div className="col-md-12 mb-4">
                    <div className="bg-white p-3 info-card h-100">
                        <h5 className="color-light-blue mb-3">Accommodation Details</h5>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Do the accommodations have heated pools?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="pb-2">Some of our properties offer pool heating, either solar or electric.</p>
                                     <ul className="listing-box-dot list-unstyled p-0 m-0">
                                        <li>Solar pool heating is generally included in the price. It depends on the weather, and on cloudy days or cold nights, the temperature may fall below a comfortable level.</li>
                                        <li>Electric pool heating may be included in some cases but is often available for an extra fee (usually between 10,00 € and 20,00 € per night).</li>
                                    </ul>
                                    <p className="pb-0 pt-3">You can find detailed information in the property description – or feel free to ask us directly. We’re happy to help.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Does altitude matter?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="p-0">Our holiday homes are located at various altitudes – from near sea level to over 1.300 meters above sea level. Altitude affects the climate: the higher you go, the cooler it gets, especially in the evenings and during winter. We’re happy to advise you based on your preferences.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <div className="col-md-12 mb-4">
                    <div className="bg-white p-3 info-card h-100">
                        <h5 className="color-light-blue mb-3">Travel & Island Info</h5>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is the weather like in the Canary Islands?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="pb-0">This is a common question – but a tricky one. Weather forecasts are often inaccurate here because the microclimates can change quickly. The Canary Islands have a mild, pleasant climate year-round. Average daytime temperatures usually range between 20 °C and 28 °C. Summers are warmer, and winters a bit cooler. Trade winds create a balanced climate, and even in winter, there’s plenty of sunshine. However, weather conditions vary greatly depending on the island, region, and altitude – and that’s part of the Canaries’ charm.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Do I need a rental car?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="p-0">In most cases, we recommend a rental car – especially on La Palma, El Hierro, and in remote locations. It gives you flexibility and helps you explore the island on your own terms. We’re ha0ppy to assist you in finding the right vehicle.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <div className="col-md-12 mb-4">
                    <div className="bg-white p-3 info-card h-100">
                        <h5 className="color-light-blue mb-3">Contact & Support</h5>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What makes CanaryCompany different from large booking platforms?</Accordion.Header>
                                <Accordion.Body>
                                     <ul className="listing-box-dot list-unstyled p-0 m-0">
                                        <li>Direct contact with Franzi & Hannes</li>
                                        <li>First-hand knowledge – we know each property personally</li>
                                        <li>Tailored advice – no automated processes</li>
                                        <li>Personal support before, during, and after your trip</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Who can I contact if I have questions during my stay?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="p-0">You can always reach out to the owner or manager of your holiday home. Of course, we are also available for you – by phone, WhatsApp, or email.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How can I contact you?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="pb-2">You can reach us easily:</p>
                                     <ul className="listing-box-dot list-unstyled p-0 m-0">
                                        <li>Phone & WhatsApp: <Link to="tel:+34 633 427 967" className="light-blue"> <strong>+34 633 427 967</strong> </Link> </li>
                                        <li>Email: <Link to="mailto:info@canarycompany.com" className="light-blue"> <strong>info@canarycompany.com</strong> </Link> </li>
                                        <li><Link to="" className="light-blue"> <strong>Contact form</strong> </Link></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq