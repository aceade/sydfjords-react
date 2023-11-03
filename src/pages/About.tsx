import { useReducer, useState } from "react";
import Navbar from "../components/Navbar";
import "./about.css";
import { useTranslation, Trans } from "react-i18next";
import { updateFormState, StateAction } from "../reducers/email";

export default function About() {

    const {t} = useTranslation();
    const [statusText, setStatusText] = useState("");
    
    const [formState, dispatch] = useReducer(updateFormState, { name: "", email: "", message: "" });

    async function mockSend() {
    
        let name: string = formState.name;
        let email: string = formState.email;
        let message: string = formState.message;
    
        let validation = validateDetails(name, email, message);
    
        if (validation.nameValid && validation.emailValid && validation.messageValid) {
            
            try {
                let response = await window.fetch("https://aceade-express-echo.azurewebsites.net/", {
                    method: "POST",
                    body: JSON.stringify({
                        name, email, message
                    })
                });
                if (response.status === 200) {
                    notifyResult(t("about.email.success"));
                    dispatch({type: StateAction.reset});
                } else {
                    notifyResult(t("about.email.failure"));
                }
            } catch (error) {
                console.error(error);
                notifyResult(t("about.email.failure"));
            }
            
            
        } else {
            let message = t("about.email.invalid");
            notifyResult(message);
        }
    
    }
    
    function validateDetails(name: string, email: string, message: string) {
        console.log(name, email, message);
        return {
            nameValid: name?.length > 1,
            emailValid: email?.length > 1,
            messageValid: message?.length > 1
        }
    }
    
    function notifyResult(result: string) {
        setStatusText(result);
        setTimeout(() => {
            setStatusText("");
        }, 2000);
    }

    return (
        <>
            <Navbar />
            <main>
                <h1>{t("about.title")}</h1>

                <h2>{t("about.offices")}</h2>
                <div id="offices">
                    <div className="office">
                        <p className="officeTitle">Tinland</p>
                        <p>Grand Line Station</p>
                    </div>
                    <div className="office">
                        <p className="officeTitle">Levarche</p>
                        <p>11 Rucks Bridge</p>
                    </div>
                    <div className="office">
                        <p className="officeTitle">Colwdvatn</p>
                        <p>3 Main Square</p>
                    </div>
                    <div className="office">
                        <p className="officeTitle">Kerbalstead</p>
                        <p>Einagatan</p>
                    </div>
                </div>

                <h2>{t("about.email.title")}</h2>
                <div id="emailForm">
                    <div>
                        <label htmlFor="name">{t("about.email.name")}</label>
                        <input id="name" required minLength={1} onChange={(e) => dispatch({
                            type: StateAction.setName,
                            value: e.target.value
                        })} />
                        <label htmlFor="email">{t("about.email.address")}</label>
                        <input type="email" id="email" required onChange={(e) => dispatch({
                            type: StateAction.setAddress,
                            value: e.target.value
                        })}/>
                        <label htmlFor="message">{t("about.email.message")}</label>
                        <textarea id="message" required minLength={1} onChange={(e) => dispatch({
                            type: StateAction.setMessage,
                            value: e.target.value
                        })}></textarea>
                        <button onClick={mockSend}>{t("buttons.submit")}</button>
                        <p id="submitStatus">{statusText}</p>
                    </div>
                </div>

                <h2>About</h2>
                <div id="about">
                    <Trans i18nKey={"about.info.info1"} t={t} components={{a: <a href="https://github.com/aceade/sydfjords"></a>}}>
                        <p>This is a React practice project, basically porting <a>this Vue app</a> to React. If you want to take a look at the source code, you can <a>find it here</a>.</p>
                    </Trans>
                    <p>{t("about.info.info2")}</p>
                </div>
            </main>
        </>
    );
}
