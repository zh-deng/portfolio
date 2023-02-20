import React from "react";
import "./contactform.css";

const Contactform = () => {
    return (
        <div className="contact" id="contact">
            <div className="contact__contactform-container">
                <form action="POST" data-netlify="true">
                    <h2>
                        Kontaktieren Sie mich
                    </h2>
                    <div className="contact__contactform-container__field">
                        <div className="contact__contactform-container__field--name">
                            <div className="contact__contactform-container__field--name-firstname">
                                <h5>
                                    Vorname
                                </h5>
                                <input
                                    type="text"
                                    name="vorname"
                                    id="vorname"
                                    placeholder="Vorname"
                                />
                            </div>
                            <div className="contact__contactform-container__field--name-lastname">
                                <h5>
                                    Nachname
                                </h5>
                                <input
                                    type="text"
                                    name="nachname"
                                    id="nachname"
                                    placeholder="Nachname"
                                />
                            </div>
                        </div>
                        <div className="contact__contactform-container__field--email">
                            <h5>
                                Email
                            </h5>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="contact__contactform-container__field--message">
                            <h5>
                                Nachricht
                            </h5>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Nachricht"
                                rows="5"
                            />
                        </div>
                    </div>
                    <div className="contact__contactform-container__button-container">
                        <input 
                            type="submit" 
                            value="Senden" 
                            className="submitButton"
                        />
                        <input
                            type="button" 
                            value="Reset" 
                            className="resetButton"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contactform