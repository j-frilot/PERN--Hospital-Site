import React from "react";
import CovidStatBanner from "./CovidStatBanner";
import CovidContentCards from "./CovidContentCards";

const Covid = () => {
    return (
        <main className="container">
            <section className="covid-banner">
                <div className="covid-banner-text">
                    <h1>COVID-19 In Mississippi</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae ipsam ratione maiores.
                    </p>
                </div>
                <div className="covid-banner-asset">
                    <div className="covid-banner-img"></div>
                </div>
            </section>
            <CovidStatBanner />
            <CovidContentCards />
        </main>
    );
};

export default Covid;
