
import Plpfilter from "../components/Plpfilter"
import Plplist from "../components/Plplist"


const Accommodation = () => {
  return (
    <div className="product-list-sec pt-4 pb-4">
      <div className="container">
        <div className="d-flex flex-wrap flex-lg-row flex-column">
          <div className="plp-filter">
            <Plpfilter />
          </div>
          <div className="plp-list">
            <Plplist />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accommodation