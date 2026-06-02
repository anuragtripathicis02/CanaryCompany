import BannerSlider from "../components/BannerSlider"
import Destination from "../components/Destination"
import HomeFeatures from "../components/features"
import RecommendationFour from "../components/RecommendationFour"
import Recommendations from "../components/Recommendations"
import SearchForm from "../components/SearchForm"

const Home = () => {
  return (
    <div className="container">
      <BannerSlider />
      <Destination />
      <SearchForm />
      <Recommendations />
      <RecommendationFour />
      <HomeFeatures />
    </div>
  )
}

export default Home