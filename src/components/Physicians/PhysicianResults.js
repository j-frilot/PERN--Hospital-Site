import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const PhysicianResults = () => {
    const [allDoctors, setAllDoctors] = useState([]);
    const [inputBar, setInputBar] = useState("");
    const [filteredDoctor, setFilteredDoctor] = useState([]);

    useEffect(() => {
        fetch(`https://joshuafrilot.com/api/physicians/`)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setAllDoctors(response);
            });
    }, []);

    useEffect(() => {
        setFilteredDoctor(
            allDoctors.filter((Doc) => {
                return Doc.first_name
                    .toLowerCase()
                    .includes(inputBar.toLowerCase());
            })
        );
    }, [inputBar, allDoctors]);

    return (
        <>
            <section className="filter">
                <form className="container form-container">
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Search Physicians"
                        onChange={(e) => setInputBar(e.target.value)}
                    />
                </form>
            </section>

            <section className="results">
                <ul className="results-ul">
                    {filteredDoctor.map((result) => (
                        <li
                            className="module results-item"
                            key={result.physicians_id}
                        >
                            <NavLink
                                className="results-item-flex"
                                to={`/physicians/${result.physicians_id}`}
                            >
                                <div className="results-item-img">
                                    <img
                                        src={`images/${result.photo}`}
                                        alt="physician"
                                        className="physician-img"
                                    />
                                </div>
                                <div className="results-item-info ">
                                    <span className="info-heading">
                                        {result.first_name} {result.last_name}{" "}
                                        {result.suffix}
                                    </span>

                                    <span className="info-body">
                                        <p>{result.specialty}</p>
                                        <p className="bg">
                                            Request An Appointment
                                        </p>
                                    </span>
                                </div>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default PhysicianResults;
