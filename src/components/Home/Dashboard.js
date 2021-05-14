import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    const [dashboard, setDashboard] = useState([]);

    useEffect(() => {
        fetch("https://joshuafrilot.com/api/dash")
            .then((res) => res.json())
            .then((res) => {
                setDashboard(res);
            });
    }, []);
    return (
        <section className="dashboard dashboard-card container">
            {dashboard.map((dash) => (
                <div key={dash.section_id} className="module dashboard-card">
                    <div className="dashboard-card-heading">
                        <h3>
                            <i className="fas fa-user-md icon"></i>
                            <NavLink to={`/${dash.link}`}>
                                {" "}
                                {dash.heading}
                            </NavLink>
                        </h3>
                    </div>

                    <div className="dashboard-card-body">{dash.body}</div>
                </div>
            ))}
        </section>
    );
};

export default Dashboard;
