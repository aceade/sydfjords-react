import { Trans, useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";

export default function Travel() {

    const { t } = useTranslation();

    return (
        <>
            <Navbar />
            <main>
                <h1>{t("travel.title")}</h1>


                <h2>
                    <Trans i18nKey={"travel.trains.title"} t={t} components={[<a href="https://github.com/aceade/colwdvatn-rails/" />]}>
                        <a>Take The Train</a>
                    </Trans>
                </h2>

                <div id="trains">
                    <img className="mainImage" src="/sydfjords-react/travel/train-480.webp" alt="A steam train in the snow"
                        sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                        srcSet="/sydfjords-react/travel/train-320w.webp 320w, /sydfjords-react/travel/train-480w.webp 480w, /sydfjords-react/travel/train-800w.webp 800w, /sydfjords-react/travel/train-1080w.webp 1080w"
                    />
                    <img className="hoverImage" src="/sydfjords-react/travel/train2-480.webp" alt="A steam train travelling through forested hills"
                        sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                        srcSet="/sydfjords-react/travel/train2-320w.webp 320w, /sydfjords-react/travel/train2-480w.webp 480w, /sydfjords-react/travel/train2-800w.webp 800w, /sydfjords-react/travel/train2-1080w.webp 1080w"
                    />
                </div>
                <p>{t("travel.trains.blurb1")}</p>
                <p>{t("travel.trains.blurb2")}</p>

                <h2>{t("travel.sea.title")}</h2>
                <img loading="lazy" className="defaultImage" srcSet="/sydfjords-react/whales/whale3-320w.webp 320w, /sydfjords-react/whales/whale3-480w.webp 480w, /sydfjords-react/whales/whale3-600w.webp 600w, /sydfjords-react/whales/whale3-1080w.webp 1080w, /sydfjords-react/whales/whale3-1920w.webp"
                    sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                    alt="A wooden sailing ship with tourists in a cold environment"
                    src="/sydfjords-react/whales/whale3-480w.webp" />
                <p>{t("travel.sea.blurb1")}</p>
                <p>{t("travel.sea.blurb2")}</p>

                <h2>{t("travel.road.title")}</h2>
                <img loading="lazy" className="defaultImage" srcSet="/sydfjords-react/travel/road-320w.webp 320w, /sydfjords-react/travel/road-480w.webp 480w, /sydfjords-react/travel/road-600w.webp 600w, /sydfjords-react/travel/road-1080w.webp 1080w, /sydfjords-react/travel/road-1920w.webp"
                    sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                    alt="A road through the mist"
                    src="/sydfjords-react/whales/whale3-480w.webp" />
                <p>{t("travel.road.blurb1")}</p>
                <p>{t("travel.road.blurb2")}</p>
            </main>
        </>
    )
}