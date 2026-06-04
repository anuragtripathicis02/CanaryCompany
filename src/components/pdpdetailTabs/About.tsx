import Icons01 from '../../assets/images/user.png'
import Icons02 from '../../assets/images/door.png'
import Icons03 from '../../assets/images/shawar.png'
import Icons04 from '../../assets/images/dishwasher.svg'
import Icons05 from '../../assets/images/washing-machine.svg'
import Icons06 from '../../assets/images/pool.svg'
import Icons07 from '../../assets/images/barbecue.svg'
import Icons08 from '../../assets/images/safe.svg'
import Icons09 from '../../assets/images/wifi.svg'
import Icons10 from '../../assets/images/tv.svg'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className="pdp-details-tab">
        <div className="tabs-content-box">
            <h2>Villa Relax</h2>
            <ul className="list-icons d-flex align-items-center gap-md-3 gap-2 flex-wrap mt-2">
                <li>
                    <img src={Icons01} alt="" />
                    <sub>4</sub>
                </li>
                <li>
                    <img src={Icons02} alt="" />
                    <sub>2</sub>
                </li>
                <li>
                    <img src={Icons03} alt="" />
                    <sub>2</sub>
                </li>
                <li>
                    <img src={Icons04} alt="" />
                </li>
                <li>
                    <img src={Icons05} alt="" />
                </li>
                <li>
                    <img src={Icons06} alt="" />
                </li>
                <li>
                    <img src={Icons07} alt="" />
                </li>
                <li>
                    <img src={Icons08} alt="" />
                </li>
                <li>
                    <img src={Icons09} alt="" />
                </li>
                <li>
                    <img src={Icons10} alt="" />
                </li>
            </ul>
            <div className='text-box info-card'>
                <h4 className='my-3'>Luxuriously furnished holiday villa on La Palma with private heated pool, jacuzzi & fantastic sea views for a truly premium vacation experience.</h4>
                <p>Nestled in <Link to="" className='light-blue'><strong>Tijarafe</strong></Link> , within the sought after La Punta district, Villa Relax enjoys a prime position in one of the sunniest areas of La Palma, blessed with a superb climate, even throughout the winter months. Furthermore, this high-quality holiday villa provides exceptional amenities including a private heated swimming pool, a relaxing jacuzzi, two stylish bathrooms (one of which is en-suite), and a separate and versatile guest room. Additionally, a spacious terrace offers premium outdoor seating and an al fresco dining space.</p>
                <h6 className='color-light-blue mb-3'>Modern Design and Comfort</h6>
                <p>The villa showcases modern design, blending clean architectural lines with a bright and inviting atmosphere. Furthermore, expansive windows flood the living areas with natural light and create a seamless connection to the outdoors. The master bedroom features a comfortable double bed and its own en-suite bathroom. An additional guest room offers flexibility, easily serving as a home office or a second bedroom. It comes complete with a sofa bed and an extra mattress for enhanced sleeping comfort.</p>
                <p>Moreover, the open-plan living area is ideal for relaxed holiday living. It incorporates a fully equipped, custom-made kitchen with high-end appliances. This setup is perfect for preparing everything from simple breakfasts to gourmet evening meals.</p>
                <h6 className='color-light-blue mb-3'>Outdoor Living and Relaxation</h6>
                <p>Step outside onto the spacious terrace where sun loungers invite you to soak up the Canarian sunshine. An elegant parasol provides shade, and a comfortable outdoor dining set is ideal for enjoying long, leisurely evenings. The private pool remains heated for year-round enjoyment, while the jacuzzi offers the perfect spot to unwind.</p>
                <p>However, Villa Relax is the ideal retreat for anyone seeking stylish surroundings, a peaceful, sun-drenched location, and excellent facilities.</p>
                <p>What are you waiting for? Your ultimate <Link to="" className='light-blue'><strong>La Palma</strong></Link> escape is calling – experience the comfort of this holiday villa and your own private pool.</p>
            </div>
        </div>
    </div>
  )
}

export default About