import Destination from "../components/Destination"
import Recommendations from "../components/Recommendations"
import SearchForm from "../components/SearchForm"

const Home = () => {
  return (
    <div className="container">
      <Destination />
      <SearchForm />
      <Recommendations />
    </div>
  )
}

export default Home