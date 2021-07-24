import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AppointmentForm from "../partials/AppointmentForm";

const Doctor = () => {
    const [doctorInfo, setDoctorInfo] = useState({});

    const { id } = useParams();
    useEffect(() => {
        fetch(`  https://covid-hospital-api.herokuapp.com/api/physicians/${id}`)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setDoctorInfo(response);
            });
    }, [id]);

    return (
        <main className="container">
            <div className="doctor-top-row">
                <div className="doctor-top-row-heading">
                    <h2>
                        Dr. {doctorInfo.first_name} {doctorInfo.last_name}{" "}
                        {doctorInfo.suffix}
                    </h2>
                </div>
                <div className="doctor-top-row-info">
                    <div className="doctor-top-row-info-column-left">
                        <img
                            src={`/images/${doctorInfo.photo}`}
                            alt="physician"
                            className="physician-img"
                        />
                    </div>
                    <div className="doctor-top-row-info-column-right">
                        <div className="top-row-info-item">
                            <h3>Specialty:</h3>
                            <h3>{doctorInfo.specialty}</h3>
                        </div>
                        <div className="top-row-info-item">
                            <h3>Phone:</h3> <h3>{doctorInfo.telephone}</h3>
                        </div>
                        <div className="top-row-info-item">
                            <h3>Office#:</h3> <h3>{doctorInfo.office}</h3>
                        </div>
                        <div className="top-row-info-item">
                            <h3>School:</h3> <h3>{doctorInfo.education}</h3>
                        </div>
                        <NavLink
                            to="/appointment"
                            className=" top-row-infor-item btn"
                        >
                            Schedule An Appointment
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="doctor-bottom-row">
                <div className="doctor-bottom-row-bio">
                    <h3>About Dr. {doctorInfo.last_name}</h3>
                    <p>{doctorInfo.info}</p>
                </div>
            </div>
            <AppointmentForm />
        </main>
    );
};

export default Doctor;
