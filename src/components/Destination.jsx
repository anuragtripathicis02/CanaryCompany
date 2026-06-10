
import { Link } from "react-router-dom"
import Destination01 from "../assets/images/destination-01.jpg"
import Destination02 from "../assets/images/destination-02.jpg"
import Destination03 from "../assets/images/destination-03.jpg"
import Destination04 from "../assets/images/destination-04.jpg"

const Destination = () => {
  return (
        <div className="row my-4 pt-0">

            <div className="col-lg-3 mb-lg-0 mb-4 col-md-6">
                <Link to="" className="destination-card text-center">
                    <h3 className="mb-3">La Palma</h3>
                    <img src={Destination01} alt="" />
                </Link>
            </div>

            <div className="col-lg-3 mb-lg-0 mb-4 col-md-6">
                <Link to="" className="destination-card text-center">
                    <h3 className="mb-3">Fuerteventura</h3>
                    <img src={Destination02} alt="" />
                </Link>
            </div>

            <div className="col-lg-3 mb-md-0 mb-4 col-md-6">
                <Link to="" className="destination-card text-center">
                    <h3 className="mb-3">Lanzarote</h3>
                    <img src={Destination03} alt="" />
                </Link>
            </div>

            <div className="col-lg-3 mb-md-0 mb-4 col-md-6">
                <Link to="" className="destination-card text-center">
                    <h3 className="mb-3">El Hierro</h3>
                    <img src={Destination04} alt="" />
                </Link>
            </div>

        </div>
  )
}

export default Destination