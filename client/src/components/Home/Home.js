import React from "react";
import SpecialtiesList from "./SpecialtyList";
import Dashboard from "./Dashboard";

const Home = () => {
    return (
        <main>
            <section className="hero">
                <div className="hero-content"></div>
            </section>
            <Dashboard />
            <SpecialtiesList />
        </main>
    );
};

export default Home;
