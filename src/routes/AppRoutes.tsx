import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "../pages/Home";
import Accommodation from "../pages/Accommodation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TheCanaryIsland from "../pages/TheCanaryIsland";
import AboutUs from "../pages/AboutUs";
import ActivitiesLaPalma from "../pages/Info/ActivitiesLaPalma";
import Faq from "../pages/Info/Faq";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import ContactUs from "../pages/ContactUs";
import ProductDetails from "../pages/ProductDetails";
import Requestbooking from "../pages/Requestbooking";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import ReviewRating from "../pages/ReviewRating";

const AppRoutes = () => {
  return (
    <div className="layout">
        <BrowserRouter>
        <Header />
        <div className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/holiday-cottages" element={<Accommodation />} />
                <Route path="/la-palma" element={<TheCanaryIsland />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/activities-la-Ppalma" element={<ActivitiesLaPalma />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog-details" element={<BlogDetails />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/villa-relax" element={<ProductDetails />} />
                <Route path="/vc-luxury-village-ii" element={<Requestbooking />} />
                <Route path="/login" element={<Login />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/review" element={<ReviewRating />} />
                
               
            </Routes>
        </div>
          <Footer />
        </BrowserRouter>
    </div>
  );
};

export default AppRoutes;