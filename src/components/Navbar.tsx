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
            <a href="/">Home</a>
                <div className="dropdown">
                    <button className="dropbtn" onClick={openSubMenu}>See and Do</button>
                    <div className="dropdown-content">
                        <a href="/colwdvatn">Coldwatvn</a>
                        <a href="/loremvik">Loremvik</a>
                        <a href="/ipsumvatn">Ipsumvatn</a>
                        <a href="/whales">Whale-Watching</a>
                    </div>
                </div>
                <a href="/hotels">Stay</a>
                <a href="/travel">Get Here</a>
            <a href="/about">About</a>
            <a className="icon" onClick={openMenu}>&#9776;</a>
            </nav>
        </header>
        </>
    );
}