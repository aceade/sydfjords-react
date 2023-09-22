import { Outlet, Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {

    function openMenu() {
        const nav = document.querySelector("nav");
    
        // TypeScript's typesafety doesn't like that nav *might* be null. Even if in practice it won't be.
        if (nav) {
            if (nav.className === "topnav") {
                nav.className += " responsive";
            } else {
                nav.className = "topnav";
            }
    
            // prevent this hanging open or needing to be clicked twice upon loading the page
            const menu = document.querySelector(".dropdown-content");
            if (menu) {
                (menu as HTMLElement).style.display = "none";
            }
        }
        
    }
    
    /**
     * Cleans up and resets everything.
     */
    function closeAllMenus() {
        (document.querySelector("nav") as HTMLElement).className = "topnav";
        (document.querySelector(".dropdown-content") as HTMLElement).style.display = "none";
        (document.querySelector(".dropbtn") as HTMLElement).onmouseover = () => {
            (document.querySelector(".dropdown-content") as HTMLElement).style.display = "block";
        }
        (document.querySelector(".dropdown-content") as HTMLElement).onmouseleave = () => {
            (document.querySelector(".dropdown-content") as HTMLElement).style.display = "none";
        }
    }
    
    function openSubMenu() {
        const menu = document.querySelector(".dropdown-content");
        if (menu) {
            let menuEl = menu as HTMLElement;
            if (menuEl.style.display === "none") {
                menuEl.style.display = "block";
            } else {
                menuEl.style.display = "none";
            }
        }
        
    }

    return (
        <>
        <header>
            <img id="logo" alt="" src="/sydfjords-react/icons/Sydfjords_Logo_1.png"/>
            <nav className="topnav">
            <Link to="/">Home</Link>
                <div className="dropdown">
                    <button className="dropbtn" onClick={openSubMenu}>See and Do</button>
                    <div className="dropdown-content">
                        <Link to="/colwdvatn">Coldwatvn</Link>
                        <Link to="/loremvik">Loremvik</Link>
                        <Link to="/ipsumvatn">Ipsumvatn</Link>
                        <Link to="/whales">Whale-Watching</Link>
                    </div>
                </div>
                <Link to="/hotels">Stay</Link>
                <Link to="/travel">Get Here</Link>
            <Link to="/Linkbout">About</Link>
            <a className="icon" onClick={openMenu}>&#9776;</a>
            </nav>
        </header>
        </>
    );
}