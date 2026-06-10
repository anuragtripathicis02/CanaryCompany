import BlogDetailsCom from "../components/BlogDetailsCom"
import IslandRight from "../components/IslandRight"

const BlogDetails = () => {
  return (
    <div className="blog-sec pt-4">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="blog-details">
                        <BlogDetailsCom />
                    </div>
                </div>
                <div className="col-lg-4">
                    <IslandRight removeTopPadding={true}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogDetails