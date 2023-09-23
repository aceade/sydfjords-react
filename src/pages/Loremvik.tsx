import { useTranslation } from "react-i18next";
import { ImageDetails } from "../components/ImageDetails";
import Location from "../components/Location";
import Navbar from "../components/Navbar";
import './Locations.css';

export default function Loremvik() {
    
    const {t} = useTranslation();

    const images : [ImageDetails, ImageDetails] = [{
        srcset: "/sydfjords-react/horses-320w.webp 320w, /sydfjords-react/horses-480w.webp 480w, /sydfjords-react/horses-600w.webp 600w, /sydfjords-react/horses-1080w.webp 1080w, /sydfjords-react/horses-1920w.webp",
        sizes: "(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px",
        altText: "A shed half-buried in the ground",
        source: "/sydfjords-react/horses.jpg",
        caption: t("loremvik.image1")
    }, {
        srcset: "/sydfjords-react/hotels/waterfall-320w.webp 320w, /sydfjords-react/hotels/waterfall-480w.webp 480w, /sydfjords-react/hotels/waterfall-600w.webp 600w, /sydfjords-react/hotels/waterfall-1080w.webp 1080w, /sydfjords-react/hotels/waterfall-1920w.webp" ,
        sizes: "(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px",
        altText: "A wooden sailing ship with tourists in a cold environment",
        source: "/sydfjords-react/hotels/waterfall-480w.webp",
        caption: t("loremvik.image2")
    }];

    return (
        <>
            <Navbar/>
            <main>
                <Location title={"Loremvik"} blurb={t("loremvik.blurb")} images={images} endParagraph={t("loremvik.end")}></Location>
            </main>
        </>
    );
}