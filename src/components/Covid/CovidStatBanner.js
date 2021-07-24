import React, { useState, useEffect } from "react";

const CovidStatBanner = () => {
    const [stats, setStats] = useState([]);
    useEffect(() => {
        fetch("https://corona.lmao.ninja/v3/covid-19/states/mississippi")
            .then((response) => response.json())
            .then((response) => {
                setStats(response);
            });
    }, []);

    const uTime = stats.updated;
    const dateObject = new Date(uTime);
    const humanDateFormat = dateObject.toLocaleString();

    return (
        <section className="container covid-stat-banner">
            <div className="covid-stat-card-row">
                <div className="module card card-cases">
                    <p className="card-cases-heading">Total Cases:</p>
                    <p className="card-cases-body"> {stats.cases}</p>
                </div>
                <div className="module card card-cases">
                    <p className="card-cases-heading">Total Deaths:</p>
                    <p className="card-cases-body"> {stats.deaths}</p>
                </div>
                <div className="module card card-cases">
                    <p className="card-cases-heading">Active Cases:</p>
                    <p className="card-cases-body">{stats.active}</p>
                </div>
                <div className="module card card-cases">
                    <p className="card-cases-heading">New Cases:</p>
                    <p className="card-cases-body">{stats.todayCases}</p>
                </div>
                <div className="module card card-cases">
                    <p className="card-cases-heading">New Deaths:</p>
                    <p className="card-cases-body">{stats.todayDeaths}</p>
                </div>
            </div>
            <p>Last Updated: {humanDateFormat}</p>
        </section>
    );
};

export default CovidStatBanner;
