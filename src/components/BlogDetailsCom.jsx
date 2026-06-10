
import { Link } from "react-router-dom"
import Infocard01 from "../assets/images/destination-01.jpg"
import Infocard02 from "../assets/images/destination-02.jpg"
import Infocard03 from "../assets/images/destination-03.jpg"

const BlogDetailsCom = () => {
  return (
    <div className="block-details-sec pb-4">
        <div className="bg-white p-3 info-card h-100">
            <h3 className="mb-3 weight-400">Holiday in Tijarafe</h3>
            <div className="info-img">
                <img src={Infocard01} alt="" />
            </div>
            <h4 className="mb-3 mt-3 weight-400">Vacation in Tijarafe, La Palma – Nature, Culture, and Relaxation on the West Coast</h4>
            <p>Tijarafe is a charming, peaceful village located on the west coast of La Palma. You’ll find a paradise for nature lovers, hiking enthusiasts, and those seeking tranquility. It’s a place away from the tourist crowds. Moreover, the diverse landscape of deep ravines and steep coastal cliffs makes Tijarafe an ideal starting point to explore the island.</p>
            <h6 className="mb-4 weight-400">Highlights and Activities in Tijarafe</h6>
            <p>One of the most fascinating places to explore is the Porís de Candelaria, a hidden small bay on the coast. Centuries ago, pirates sought refuge here and gave the cove its legendary name. The spot is only accessible on foot via a steep path. You will enjoy crystal-clear water and an authentic atmosphere. It’s perfect for adventurous travelers.</p>
            <p>Furthermore, you can hike to Playa de La Veta. This black sand beach is ideal for relaxing and swimming (depends on the weather conditions). The trail offers breathtaking views of the rocky coastline and the ocean.</p>
            <p>In addition, for stargazers, the Mirador del Universo is a must-see. This astronomical viewpoint is located at about 1.400 meters elevation and provides a crystal-clear view of stars. This is thanks to the island’s minimal light pollution.</p>
            <p>For those interested in local culture and flavors, the <Link to="" className="light-blue"><strong>Bodega Vega Norte</strong></Link>  invites you to discover La Palma’s wines. This family-run winery offers tastings of regional wines. The wines are uniquely influenced by the volcanic terroir of the island.</p>
            <p>Not to be missed, another impressive lookout is El Time. Here you can enjoy spectacular views over the west coast, the Aridane Valley and Atlantic Ocean. This spot is especially unforgettable at sunset.</p>
            <h6 className="mb-4 weight-400">Culinary Delights in Tijarafe</h6>
            <p>When it comes to food, the Restaurante La Muralla is a popular spot for authentic cuisine in a stylish setting. Here you can enjoy regional specialties made from fresh, local ingredients. Alternatively, for a more casual experience, visit Kiosco El Diablo. Furthermore, the Cerveceria Isla Verde offers a great selection food and homemade beer – perfect for a cozy evening.</p>
            <h6 className="mb-4 weight-400">Holiday Homes in Tijarafe – Your Retreat on La Palma</h6>
            <p>For your holiday in Tijarafe, there are plenty of cozy holiday homes to choose from. Whether it’s a finca with lots of space or a modern villa with sea views you’ll find the perfect accommodation. Enjoy the island, start hiking right outside your door, or explore the cultural and culinary highlights of the region. With so much to explore and enjoy, so why wait? Discover our selection of holiday homes in Tijarafe now and experience La Palma at its best.</p>
        </div>

        <h3 className="mt-4 mb-4 weight-400">Our top holiday homes in Tijarafe</h3>
        
        <div className="bg-white p-3 info-card h-100 text-illipses mb-4">
            <h6 className="mb-3"><strong className="light-blue"> Casa de Ensueño –</strong> <span className="color-light-blue"> Charming holiday home perfect for an unforgettable romantic getaway for two.</span></h6>
            <div className="row">
                <div className="col-md-6 mb-md-0 mb-4">
                    <Link to="" className="info-img ">
                        <img src={Infocard02} alt="" />
                    </Link>
                </div>
                <div className="col-md-6 mb-md-0 mb-4">
                    <Link to="" className="info-img ">
                        <img src={Infocard03} alt="" />
                    </Link>
                </div>
            </div>
        </div>
        
        <div className="bg-white p-3 info-card h-100 text-illipses mb-4">
            <h6 className="mb-3"><strong className="light-blue"> Villa Vista Reina –</strong> <span className="color-light-blue">Stunning holiday home, featuring a pool, two bedrooms, and fantastic views.</span></h6>
            <div className="row">
                <div className="col-md-6 mb-md-0 mb-4">
                    <Link to="" className="info-img ">
                        <img src={Infocard02} alt="" />
                    </Link>
                </div>
                <div className="col-md-6 mb-md-0 mb-4">
                    <Link to="" className="info-img ">
                        <img src={Infocard03} alt="" />
                    </Link>
                </div>
            </div>
        </div>
        
        <div className="bg-white p-3 info-card h-100 text-illipses mb-md-4">
            <h6 className="mb-3"><strong className="light-blue">Casa Caracol –</strong> <span className="color-light-blue">Romantic Canarian-style holiday home set in an exclusive location.</span></h6>
            <div className="row">
                <div className="col-md-6 mb-md-0 mb-4">
                    <Link to="" className="info-img ">
                        <img src={Infocard02} alt="" />
                    </Link>
                </div>
                <div className="col-md-6 mb-md-0 mb-4">
                    <Link to="" className="info-img ">
                        <img src={Infocard03} alt="" />
                    </Link>
                </div>
            </div>
            <p className="mb-0 p-0 pt-4">lternatively, if you didn’t find the perfect place yet, feel free to browse all <Link to="" className="light-blue"><strong>our holiday homes </strong></Link>  or <Link to="" className="light-blue"><strong>contact us</strong> </Link> directly. We’ll be happy to help you find the right one for your stay. La Palma awaits you!</p>
        </div>

    </div>
  )
}

export default BlogDetailsCom