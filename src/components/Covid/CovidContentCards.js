import React from "react";
import covidContentCardData from "./covidContentCardData";

const CovidContentCards = () => {
    return (
        <section className="covid-content">
            <div className=" module covid-content-section">
                <h1>{covidContentCardData[0].heading_one}</h1>
                <ul>
                    <li>
                        <p>{covidContentCardData[0].text_one}</p>
                    </li>
                    <li>
                        <p>{covidContentCardData[0].text_two}</p>
                    </li>
                </ul>
            </div>

            <div className=" module covid-content-section image"></div>

            <div className=" module covid-content-section">
                <h1>{covidContentCardData[2].heading_one}</h1>
                <ul>
                    <li>
                        <p>{covidContentCardData[2].text_one}</p>
                    </li>
                    <li>
                        <p>{covidContentCardData[2].text_two}</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default CovidContentCards;
