
import FeelHome from "../assets/images/la-palma.jpg";
import { Link } from "react-router-dom";

const IslandRight = ({ removeTopPadding = false }) => {
  return (
    <div  className={`home-features pb-5 ${ removeTopPadding ? "" : "pt-64  py-4"}`}>
        <div className="bg-white p-3">
            <div className="feature-card h-100">
                <h3 className="feature-title text-andadaPro">About us</h3>
                <div className="img-box py-3">
                    <img src={FeelHome} alt="" />
                </div>
                <p className="pb-2">We are Franzi and Hannes and CanaryCompany is a family-managed holiday agency.</p>
                <Link to="" className="light-blue"> <strong> More about us …</strong></Link>
            </div>
        </div>
    </div>
  )
}

export default IslandRight