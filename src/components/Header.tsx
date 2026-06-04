import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="d-flex align-items-center position-relative">
            
            <div className="logo me-auto">
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>

            <div className="header-right d-flex align-items-center justify-content-center position-relative">
                <div className="manu-contact-top">
                    <ul className="d-flex align-items-center gap-lg-5 gap-2">
                        <li>
                            <span>Mon-Fri 9:30am-4pm (Canary local time)</span>
                            <Link to="tel:+34 633 427 967" className="text-red">+34 633 427 967</Link>
                        </li>
                        <li>
                            <span>Sat-Sun</span>
                            <Link to="mailto:info@canarycompany.com" className="text-red">info@canarycompany.com</Link>
                        </li>
                    </ul>
                </div>
                <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header d-lg-none justify-content-between border-bottom">
                        <div className="header-close text-white ms-auto text-end" data-bs-dismiss="offcanvas" aria-label="Close">
                            <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M6 6L18 18" stroke="#111" strokeLinecap="round"/><path d="M18 6L6.00001 18" stroke="#111" strokeLinecap="round"/></g></svg>
                        </div>
                    </div>

                    <div className="offcanvas-body">
                        <nav className="w-100">
                            <ul className="navbar-nav flex-lg-row flex-column">
                                <li className="nav-item dropdown position-relative">
                                    <Link  to="/holiday-cottages" className=" px-0">
                                        Accommodations
                                    </Link>
                                    <button className="btn border-0 d-lg-none d-inline-block p-0 ms-1 dropdown-toggle dropdown-toggle-split" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link className="dropdown-item" to="">
                                                La Palma
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="">
                                                Fuerteventura
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="">
                                                Lanzarote
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="">
                                                El Hierro
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link  to="/accommodation" className=" px-0">
                                        The Canary Islands
                                    </Link>
                                    <button className="btn border-0 d-lg-none d-inline-block p-0 ms-1 dropdown-toggle dropdown-toggle-split" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link className="dropdown-item" to="/la-palma">
                                                La Palma
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="">
                                                Fuerteventura
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="">
                                                Lanzarote
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="">
                                                El Hierro
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about-us">About us</Link>
                                </li>
                                <li className="nav-item dropdown ">
                                    <Link  to="/accommodation" className=" px-0">
                                        Info
                                    </Link>
                                    <button className="btn border-0 d-lg-none d-inline-block p-0 ms-1 dropdown-toggle dropdown-toggle-split" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link className="dropdown-item" to="/activities-la-Ppalma">
                                               Activities La Palma
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="">
                                                Getting to La Palma
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="">
                                                Getting to El Hierro
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="">
                                                Car Hire
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/faq">
                                                FAQ
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact-us">Contact</Link>
                                </li>
                                <li className="nav-item dropdown ">
                                    <Link  to="/accommodation" className=" px-0">
                                        English
                                    </Link>
                                    <button className="btn border-0 d-lg-none d-inline-block p-0 ms-1 dropdown-toggle dropdown-toggle-split" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link className="dropdown-item" to="">
                                               Deutsch
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="">
                                                Español
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="user-auth d-lg-none">
                <button
                    className="btn btn-open-menu d-lg-none bg-transparent border-0 p-0 ps-md-3"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                >
                    <span className="mobile-nav">
                    <span className="bar1"></span>
                    <span className="bar2"></span>
                    <span className="bar3"></span>
                    </span>
                </button>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;