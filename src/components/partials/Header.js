import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <NavLink to="/covid" className="covid-alert">
                <p className="covid-toggle">COVID-19 Alert: </p>
                <p>
                    Important information for patients and families regarding
                    COVID-19 and vaccines.
                </p>
            </NavLink>
            <div className="container header-content">
                <div className="logo-row">
                    <NavLink to="/">
                        <img
                            src="/images/hospital-logo.png"
                            alt="hospital-logo"
                            className="img hospital-img"
                        />
                    </NavLink>

                    <NavLink to="/">
                        <h1 className=" brand-logo ">General Hospital</h1>
                    </NavLink>
                </div>

                <div className="nav-bar">
                    <NavLink to="/physicians" className="nav-item">
                        Physicians
                    </NavLink>

                    <NavLink to="/covid" className="nav-item">
                        COVID
                    </NavLink>

                    <NavLink to="/appointment" className="nav-item">
                        Appointments
                    </NavLink>
                    <NavLink to="/contact-us" className="nav-item">
                        Contact
                    </NavLink>
                    <NavLink to="/physicians" className="nav-item">
                        Find a Doctor
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
