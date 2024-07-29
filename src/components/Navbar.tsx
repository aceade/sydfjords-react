import { Link } from "react-router-dom";
import './Navbar.css';
import { useTranslation } from "react-i18next";

interface LanguageMapping {
    code: string;
    nativeName: string;
    dir?: string;
}

/**
 * 
 * @returns a Navbar component. This contains a `<header>` tag.
 */
export default function Navbar() {

    const {t, i18n } = useTranslation();

    const languages: LanguageMapping[] = [{
        code: "en",
        nativeName: "English"
    }, {
        code: "de",
        nativeName: "Deutsch"
    },{
        code: "it",
        nativeName: "Italiano"
    },{
        code: "ga",
        nativeName: "Gaeilge"
    },{
        code: "ar",
        nativeName: "عربي",
        dir: "rtl"
    },{
        code: "ja",
        nativeName: "日本語"
    }]

    function openMenu() {
        const nav = document.querySelector("nav");
    
        // Tell TypeScript that nav will NOT be null instead of adding a needless check
        if (nav!.className === "topnav") {
            nav!.className += " responsive";
        } else {
            nav!.className = "topnav";
        }
    
        // prevent this hanging open or needing to be clicked twice upon loading the page
        const menu = document.querySelector(".dropdown-content");
        (menu! as HTMLElement).style.display = "none";
        
    }
    
    /**
     * Cleans up and resets everything.
     */
    function closeAllMenus() {
        (document.querySelector("nav") as HTMLElement).className = "topnav";
        document.querySelectorAll(".dropdown-content").forEach(menu => (menu as HTMLElement).style.display = "none");
        (document.querySelector(".dropbtn") as HTMLElement).onmouseover = () => {
            document.querySelectorAll(".dropdown-content").forEach(menu => (menu as HTMLElement).style.display = "block");
        }
        (document.querySelector(".dropdown-content") as HTMLElement).onmouseleave = () => {
            document.querySelectorAll(".dropdown-content").forEach(menu => (menu as HTMLElement).style.display = "none");
        }
    }
    
    function openSubMenu(id: string) {
        const menu = document.getElementById(id);
        // if (menu) {
            const menuEl = menu as HTMLElement;
            if (menuEl.style.display === "none") {
                menuEl.style.display = "block";
            } else {
                menuEl.style.display = "none";
            }
        // }
        
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
                    <button className="dropbtn" onClick={() => openSubMenu("languageMenu")}>
                        <img id="changeLangIcon" src="/sydfjords-react/icons/globe.svg" alt={t("navbar.changeLang.alt")} title={t("navbar.changeLang.title")}/>
                    </button>
                    <div className="dropdown-content" id="languageMenu">
                    {languages.map((lng) => (
                        
                        <button key={lng.code} style={{ fontWeight: i18n.resolvedLanguage === lng.code ? 'bold' : 'normal' }} type="submit" onClick={() => changeLanguage(lng.code)}>
                        {lng.nativeName}
                        </button>
                    ))}
                    </div>
                </div>
                <Link to="/" onClick={closeAllMenus}>{t("navbar.home")}</Link>
                    <div className="dropdown">
                        <button className="dropbtn" onClick={() => openSubMenu("attractionsMenu")}>{t("navbar.see")}</button>
                        <div className="dropdown-content" id="attractionsMenu">
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