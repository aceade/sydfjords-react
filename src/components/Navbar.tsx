import { Link } from "react-router-dom";
import './Navbar.css';
import { useTranslation } from "react-i18next";


/**
 * 
 * @returns a Navbar component. This contains a `<header>` tag.
 */
export default function Navbar() {

    const {t, i18n } = useTranslation();

    const languages: any = {
        en: { nativeName: 'English' },
        de: { nativeName: 'Deutsch' },
        ga: { nativeName: 'Gaelige' },
        it: { nativeName: 'Italiano' },
        ar: { nativeName: 'عربي', dir: 'rtl' },
        ja: { nativeName: '日本語'}
      };

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

    function changeLanguage(language: string) {
        i18n.changeLanguage(language);
        document.dir = i18n.dir(language);
    }

    return (
        <>
        <header>
            <img id="logo" alt="" src="/sydfjords-react/icons/Sydfjords_Logo_1.png"/>
            <nav className="topnav">
                <div className="dropdown">
                    <button className="dropbtn" onClick={openSubMenu}>
                        <img src="/sydfjords-react/icons/globe.svg"/>
                    </button>
                    <div className="dropdown-content">
                    {Object.keys(languages).map((lng) => (
                        <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => changeLanguage(lng)}>
                        {languages[lng].nativeName}
                        </button>
                    ))}
                    </div>
                </div>
                <Link to="/" onClick={closeAllMenus}>{t("navbar.home")}</Link>
                    <div className="dropdown">
                        <button className="dropbtn" onClick={openSubMenu}>{t("navbar.see")}</button>
                        <div className="dropdown-content">
                            <Link to="/colwdvatn" onClick={closeAllMenus}>{t("navbar.colwdvatn")}</Link>
                            <Link to="/loremvik" onClick={closeAllMenus}>{t("navbar.loremvik")}</Link>
                            <Link to="/ipsumvatn" onClick={closeAllMenus}>{t("navbar.ipsumvatn")}</Link>
                            <Link to="/whales" onClick={closeAllMenus}>{t("navbar.whales")}</Link>
                        </div>
                    </div>
                    <Link to="/hotels" onClick={closeAllMenus}>{t("navbar.hotels")}</Link>
                    <Link to="/travel" onClick={closeAllMenus}>{t("navbar.travel")}</Link>
                <Link to="/about" onClick={closeAllMenus}>{t("navbar.about")}</Link>
                <a className="icon" onClick={openMenu}>&#9776;</a>
            </nav>
        </header>
        </>
    );
}