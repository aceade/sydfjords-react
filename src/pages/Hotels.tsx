import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import "./Hotels.css";

export default function Hotels() {

    const {t} = useTranslation();

    return (
        <>
        <Navbar/>
        <main>
        <h1>Where to Stay</h1>
        <div className="entry">
            <img src="/sydfjords-react/hotels/waterfall.jpg" alt="A cabin with a waterfall in the background"
                sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                srcSet="/sydfjords-react/hotels/waterfall-320w.webp 320w, /sydfjords-react/hotels/waterfall-480w.webp 480w, /sydfjords-react/hotels/waterfall-600w.webp 600w, /sydfjords-react/hotels/waterfall-1080w.webp 1080w, /sydfjords-react/hotels/waterfall-1920w.webp"
            />
            <div>
                <h2>{t("hotels.brufoss.title")}</h2>
                <p>{t("hotels.brufoss.location")}</p>
                <p>{t("hotels.brufoss.blurb1")}</p>
                <p>{t("hotels.brufoss.blurb2")}</p>
                <p>Tel: +5555555 28883399</p>
            </div>
        </div>
        <div className="entry">
            <img src="/sydfjords-react/hotels/turfHouse.jpg" alt="A shed half-buried in the ground"
                sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                srcSet="/sydfjords-react/hotels/turfHouse-320w.webp 320w, /sydfjords-react/hotels/turfHouse-480w.webp 480w, /sydfjords-react/hotels/turfHouse-600w.webp 600w, /sydfjords-react/hotels/turfHouse-1080w.webp 1080w, /sydfjords-react/hotels/turfHouse-1920w.webp"
            />
            <div>
                <h2>{t("hotels.turfdwellers.title")}</h2>
                <p>{t("hotels.turfdwellers.location")}</p>
                <p>{t("hotels.turfdwellers.blurb1")}</p>
                <p>{t("hotels.turfdwellers.blurb2")}</p>
                <p>Tel: +5555555 12346 477847474</p>
            </div>
        </div>
        <div className="entry">
            <img src="/sydfjords-react/town-480w.webp" alt="A town by the water"
                sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                srcSet="/sydfjords-react/town-320w.webp 320w, /sydfjords-react/town-480w.webp 480w, /sydfjords-react/town-600w.webp 600w, /sydfjords-react/town-1080w.webp 1080w"
            />
            <div>
                <h2>{t("hotels.brieborg.title")}</h2>
                <p>{t("hotels.brieborg.location")}</p>
                <p>{t("hotels.brieborg.blurb1")}</p>
                <p>{t("hotels.brieborg.blurb2")}</p>
                <p>Tel: +5555555 12346 347838</p>
            </div>
        </div>
        </main>
        </>
    );
}