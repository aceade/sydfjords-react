import Navbar from "../components/Navbar";
import "./about.css";

export default function About() {

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
                <h1>Got a query? Contact us!</h1>

                <h2>Tourism offices</h2>
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

                <h2>Email us</h2>
                <div id="emailForm">
                    <form>
                        <label htmlFor="name">Your name</label>
                        <input id="name" required minLength={1}/>
                        <label htmlFor="email">Your address</label>
                        <input type="email" id="email" required/>
                        <label htmlFor="message">Your query</label>
                        <textarea id="message" required minLength={1}></textarea>
                        <button onClick={() => mockSend}>Submit</button>
                        <p id="submitStatus"></p>
                    </form>
                </div>

                <h2>About</h2>
                <div id="about">
                    <p>This is a React practice project, basically porting <a href="https://github.com/aceade/sydfjords">this Vue app</a> to React.</p>
                    <p>The email form above doesn't actually send anything. It just says that after a random delay to simulate network latency.</p>
                    <p>If you want to take a look at the source code, you can <a href="https://github.com/aceade/sydfjords-react">find it here</a>.</p>
                </div>
            </main>
        </>
    );
}
