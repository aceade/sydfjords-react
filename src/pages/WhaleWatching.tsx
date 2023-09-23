import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import "./Whales.css";

export default function WhaleWatching() {

    const {t} = useTranslation();

    return (
        <>
            <Navbar />
            <main>
                <h1>{t("whales.title")}</h1>
                <p className="blurb">{t("whales.blurb")}</p>

                <div className="showcase">
                    <img loading="lazy" className="defaultImage" srcSet="/sydfjords-react/whales/whale-320w.webp 320w, /sydfjords-react/whales/whale-480w.webp 480w, /sydfjords-react/whales/whale-600w.webp 600w, /sydfjords-react/whales/whale-1080w.webp 1080w, /sydfjords-react/whales/whale-1920w.webp"
                        sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                        alt="A humpback whale breaching"
                        src="/sydfjords-react/whales/whale-480w.webp" />
                    <div>
                        <p>{t("whales.image1.first")}</p>
                        <p>{t("whales.image1.second")}</p>
                        <p>{t("whales.image1.third")}</p>
                    </div>
                </div>
                <div className="showcase">
                    <img loading="lazy" className="defaultImage" srcSet="/sydfjords-react/whales/whale2-320w.webp 320w, /sydfjords-react/whales/whale2-480w.webp 480w, /sydfjords-react/whales/whale2-600w.webp 600w, /sydfjords-react/whales/whale2-1080w.webp 1080w, /sydfjords-react/whales/whale2-1920w.webp"
                        sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                        alt="A humpback whale breaching"
                        src="/sydfjords-react/whales/whale2-480w.webp" />
                    <div>
                        <p>{t("whales.image2.first")}</p>
                        <p>{t("whales.image2.second")}</p>
                        <p>{t("whales.image2.third")}</p>
                    </div>
                </div>
                <div className="showcase">
                    <img loading="lazy" className="defaultImage" srcSet="/sydfjords-react/whales/whale3-320w.webp 320w, /sydfjords-react/whales/whale3-480w.webp 480w, /sydfjords-react/whales/whale3-600w.webp 600w, /sydfjords-react/whales/whale3-1080w.webp 1080w, /sydfjords-react/whales/whale3-1920w.webp"
                        sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                        alt="A wooden sailing ship with tourists in a cold environment"
                        src="/sydfjords-react/whales/whale3-480w.webp" />
                    <div>
                        <p>{t("whales.image3.first")}</p>
                        <p>{t("whales.image3.second")}</p>
                        <p>{t("whales.image3.third")}</p>
                        <p>{t("whales.image3.fourth")}</p>
                    </div>
                </div>

                <h2>{t("whales.how.title")}</h2>
                <p>{t("whales.how.blurb")}</p>
            </main>
        </>
    );
}