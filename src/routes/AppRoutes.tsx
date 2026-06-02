import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "../pages/Home";
import Accommodation from "../pages/Accommodation";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppRoutes = () => {
  return (
    <div className="layout">
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/accommodation" element={<Accommodation />} />
            </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
};

export default AppRoutes;