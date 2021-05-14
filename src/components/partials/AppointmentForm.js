import Axios from "axios";
import React, { useState, useEffect } from "react";

const AppointmentForm = () => {
    const [patient_first_name, setPatientFirstName] = useState("");
    const [patient_last_name, setPatientLastName] = useState("");
    const [physicians_id, setPhysiciansId] = useState("");
    const [appointment_date, setAppointmentDate] = useState("");
    const [insurance, setInsurance] = useState("");
    const [telephone, setTelephone] = useState("");
    const [comments, setComments] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    //function from submit button to initiate the form
    const displayInfo = (event) => {
        event.preventDefault();

        console.log(
            //testing
            patient_first_name,
            patient_last_name,
            physicians_id,
            appointment_date,
            insurance,
            telephone,
            comments,
            height,
            weight
        );

        //post request to api to submit form
        Axios.post(
            `https://joshuafrilot.com/api/appointments/makeappointment`,
            {
                patient_first_name: patient_first_name,
                patient_last_name: patient_last_name,
                physicians_id: physicians_id,
                appointment_date: appointment_date,
                insurance: insurance,
                telephone: telephone,
                comments: comments,
                height: height,
                weight: weight
            }
        ).then((res) => {
            console.log(res);
            console.log(res.data);
        });
    };

    // Setting name from api and using .map() to use in the physician dropdown box.
    const [name, setName] = useState([]);
    useEffect(() => {
        fetch(`https://joshuafrilot.com/api/physicians/`)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setName(response);
            });
    }, []);

    return (
        <div>
            <main className="container form-container">
                <section className="module form-container">
                    <form onSubmit={displayInfo}>
                        <fieldset>
                            <legend>Schedule An Appointment</legend>
                            <input
                                type="text"
                                name="patient_first_name"
                                required
                                placeholder="First Name"
                                onChange={(event) => {
                                    setPatientFirstName(event.target.value);
                                }}
                            />
                            <input
                                type="text"
                                name="patient_last_name"
                                required
                                placeholder="Last Name"
                                onChange={(event) => {
                                    setPatientLastName(event.target.value);
                                }}
                            />
                            <label htmlFor="job">Physician:</label>
                            <select
                                type="number"
                                id="physician-select"
                                name="physicians_id"
                                required
                                placeholder="Doctor Id *"
                                onChange={(event) => {
                                    setPhysiciansId(event.target.value);
                                }}
                            >
                                <optgroup label="Physicians">
                                    {name.map((aName) => (
                                        <option
                                            key={aName.physicians_id}
                                            value={aName.physicians_id}
                                        >
                                            Dr. {aName.first_name}{" "}
                                            {aName.last_name} {aName.suffix}
                                        </option>
                                    ))}
                                </optgroup>
                            </select>

                            <input
                                type="date"
                                name="appointment_date"
                                required
                                placeholder="Appointment Date"
                                onChange={(event) => {
                                    setAppointmentDate(event.target.value);
                                }}
                            />

                            <input
                                type="text"
                                name="insurance"
                                required
                                placeholder="Name Of Insurance"
                                onChange={(event) => {
                                    setInsurance(event.target.value);
                                }}
                            />
                            <input
                                type="tel"
                                name="telephone"
                                required
                                placeholder="Telephone 123-456-789*"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                onChange={(event) => {
                                    setTelephone(event.target.value);
                                }}
                            />
                            <textarea
                                name="comments"
                                type="text"
                                placeholder="Message To Doctor Not required"
                                onChange={(event) => {
                                    setComments(event.target.value);
                                }}
                            ></textarea>
                            <input
                                type="number"
                                name="height"
                                placeholder="Height(in) Not required. If unknown, input '00'."
                                onChange={(event) => {
                                    setHeight(event.target.value);
                                }}
                            />
                            <input
                                type="number"
                                name="weight"
                                placeholder="Weight(lbs) Not required. If unknown, input '00'."
                                onChange={(event) => {
                                    setWeight(event.target.value);
                                }}
                            />
                        </fieldset>

                        <input
                            type="submit"
                            value="Apply"
                            // onClick={displayInfo}
                        />
                    </form>
                </section>
            </main>
        </div>
    );
};

export default AppointmentForm;
