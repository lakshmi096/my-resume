import React from "react";
import Profile from "../assets/img/profile.png";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <span className="navbar-brand js-scroll-trigger">
                <span className="d-block d-lg-none">Lakshmi Ramakrishnan</span>
                <span className="d-none d-lg-block">
                    <img className="img-fluid img-profile rounded-circle mx-auto mb-2"
                        src={Profile} alt="" onClick={() => { scroll.scrollToTop() }} />
                </span>
            </span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            className="nav-link js-scroll-trigger"
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link js-scroll-trigger"
                            activeClass="active"
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Experience
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link js-scroll-trigger"
                            activeClass="active"
                            to="education"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Education
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link js-scroll-trigger"
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Skills
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link js-scroll-trigger"
                            activeClass="active"
                            to="interests"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Interests
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;