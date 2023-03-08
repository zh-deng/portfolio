import React from "react";
import "./contactform.css";
import { updateFirstName, updateLastName, updateEmail, updateMessage, resetForm, selectFormtracker } from "../../redux/formtrackerSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAlert, switchAlert } from "../../redux/alertbarSlice";

const Contactform = () => {
    const { firstName, lastName, email, message } = useSelector(selectFormtracker);
    const { alert } = useSelector(selectAlert);
    const dispatch = useDispatch();

    const fireAlert = () => {
        dispatch(switchAlert());
        setTimeout(() => {
            dispatch(switchAlert())
        }, 10000)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const myForm = event.target;
        const formData = new FormData(myForm);
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
          .then(() => {fireAlert()})
          .catch((error) => alert(error));
    };

    return (
        <div className="contact" id="contact">
            <div className="contact__contactform-container">
                <form name="contactform" method="POST" onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="contactform" />
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
                                    onChange={(e) => dispatch(updateFirstName(e.target.value))}
                                    required
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
                                    onChange={(e) => dispatch(updateLastName(e.target.value))}
                                    required
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
                                onChange={(e) => dispatch(updateEmail(e.target.value))} 
                                required
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
                                rows="7" 
                                onChange={(e) => dispatch(updateMessage(e.target.value))}
                                required
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
                            type="reset" 
                            value="Reset" 
                            className="resetButton"
                            onClick={() => dispatch(resetForm())}
                        />
                    </div>
                </form>
            </div>
            <div className={alert === false ? "hide" : "contact__alert"}>
                <div className="contact__alert__message">
                    <p>
                        Danke für ihre Nachricht, Herr {lastName}. <br/> Ich werde mich baldmöglichst bei ihnen melden.
                    </p>
                </div>
                <div className="contact__alert__progressbar">
                    <div className="contact__alert__progressbar--line-box">
                        <div className="contact__alert__progressbar--line progressbar--animation"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactform