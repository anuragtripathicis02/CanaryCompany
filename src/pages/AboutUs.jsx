import AboutImg from '../assets/images/la-palma.jpg'


const AboutUs = () => {
  return (
    <div className="about-us-sec mt-4 mb-4">
        <div className="container">
            <div className='row'>
                <div className="col-lg-8">
                    <div className="bg-white p-3 mb-4">
                        <h3 className="p-0 m-0 mb-3 weight-400">About Us</h3>
                        <p>Welcome!</p>
                        <p>We are Canary Company, a family of travel artisans from La Palma, that do all to make you fall in love with the island as we once did.</p>
                        <p>Hello, we are Franzi and Hannes and we live on one of the Canary Islands, La Palma. We were both born, raised and spend our young years in Germany, but our spirit pushed us to explore the world.</p>
                        <p>From our home city of Berlin, we went to the small town of Görlitz to study there. Having received our Bachelor’s degree in tourism management, we started our career at a small, local travel business in Cottbus.</p>
                        <p>We‘ve been visiting La Palma the first time and it striked our imagination. We fell in love. Being greenest of the Canaries it never had large hotel areas or excessive mass tourism. It meant that many people would even never hear about it. But the island had dozens beautiful homes, that some owners would be ready to rent by season, we asked many others to join.</p>
                        <p>For many years we helped like-minded travellers from all over the world to find their second home on the island, their local guide, their scene coffee bar, their hidden beach. Through regular visits and the careful selection of all presented accommodations, the personal contact to the house owners and other service providers we know our way around.</p>
                        <p>We design your perfect holiday! Let us introduce you to La Palma!</p>
                        <div className="about-img">
                            <img src={AboutImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="bg-white p-3 mb-4">
                        <div className="heading-head mb-3">
                            <h4>Second home on the island</h4>
                        </div>
                        <p>We believe that amazing holidays combine novelty of discovery and cozy feeling of being at home. If it‘s also sunny, warm and the ocean is near then it may be the best holiday ever.</p>
                    </div>
                    <div className="bg-white p-3 mb-4">
                        <div className="heading-head mb-3">
                            <h4>Best local spots</h4>
                        </div>
                        <p>We believe you‘ve already seen a lot of places listed in travel guides and have your own taste of travel. As islanders we know the one or other recommendation of not so „official“ suggestions – so that you are at the right place at the right time. Please contact us!</p>
                    </div>
                    <div className="bg-white p-3 mb-4">
                        <div className="heading-head mb-3">
                            <h4>We are near</h4>
                        </div>
                        <p>We are convinced your holidays will go as planned, but in case you need immediate help, it is good to have one near who speaks your language. We are your contact in all matters.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs