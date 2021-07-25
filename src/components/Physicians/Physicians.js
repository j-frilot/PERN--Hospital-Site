import React from "react";

import PhysicianResults from "./PhysicianResults";

const Physicians = (props) => {
    return (
        <main>
            <section className="banner-container">
                <div className="hero-content">
                    <h2>Find A Doctor</h2>
                </div>
            </section>
            <div className="directory">
                <PhysicianResults />
            </div>
        </main>
    );
};

export default Physicians;
