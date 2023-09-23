import Navbar from "../components/Navbar";
import "./about.css";
import { useTranslation, Trans } from "react-i18next";

export default function About() {

    const {t} = useTranslation();

    function mockSend(event: Event) {
        event.preventDefault();
    
        // one downside to TypeScript: I have to do all this casting crap
        let name: string = (document.getElementById("name") as HTMLInputElement).value;
        let email: string = (document.getElementById("email") as HTMLInputElement).value;
        let message: string = (document.getElementById("message") as HTMLTextAreaElement).value;
    
        let validation = validateDetails(name, email, message);
    
        if (validation.nameValid && validation.emailValid && validation.messageValid) {
            let delay: number = Math.random() * 3000;
            setTimeout(()=>{
                notifyResult("Your message has been sent");
            }, delay);
        } else {
            let message = "Please fill out all fields";
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
        let submitStatus = (document.getElementById("submitStatus") as HTMLParagraphElement);
        submitStatus.textContent = result;
        setTimeout(() => {
            submitStatus.textContent = "";
        }, 3000);
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
                    <form>
                        <label htmlFor="name">{t("about.email.name")}</label>
                        <input id="name" required minLength={1}/>
                        <label htmlFor="email">{t("about.email.address")}</label>
                        <input type="email" id="email" required/>
                        <label htmlFor="message">{t("about.email.message")}</label>
                        <textarea id="message" required minLength={1}></textarea>
                        <button onClick={() => mockSend}>{t("buttons.submit")}</button>
                        <p id="submitStatus"></p>
                    </form>
                </div>

                <h2>About</h2>
                <div id="about">
                    <p>
                    <Trans i18nKey={"about.info.info1"} t={t} components={{a: <a href="https://github.com/aceade/sydfjords"></a>}}>
                        <p>This is a React practice project, basically porting <a>this Vue app</a> to React. If you want to take a look at the source code, you can <a>find it here</a>.</p>
                    </Trans>
                    </p>
                    <p>{t("about.info.info2")}</p>
                </div>
            </main>
        </>
    );
}
