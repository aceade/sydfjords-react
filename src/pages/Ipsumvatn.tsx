import { useTranslation } from "react-i18next";
import { ImageDetails } from "../components/ImageDetails";
import Location from "../components/Location";
import Navbar from "../components/Navbar";
import './Locations.css';

export default function Ipsumvatn() {

    const {t} = useTranslation();

    const images : [ImageDetails, ImageDetails] = [{
        srcset: "/sydfjords-react/hotels/turfHouse-320w.webp 320w, /sydfjords-react/hotels/turfHouse-480w.webp 480w, /sydfjords-react/hotels/turfHouse-600w.webp 600w, /sydfjords-react/hotels/turfHouse-1080w.webp 1080w, /sydfjords-react/hotels/turfHouse-1920w.webp",
        sizes: "(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px",
        altText: "A shed half-buried in the ground",
        source: "/sydfjords-react/hotels/turfHouse.jpg",
        caption: t("ipsumvatn.image1")
    }, {
        srcset: "/sydfjords-react/whales/whale3-320w.webp 320w, /sydfjords-react/whales/whale3-480w.webp 480w, /sydfjords-react/whales/whale3-600w.webp 600w, /sydfjords-react/whales/whale3-1080w.webp 1080w, /sydfjords-react/whales/whale3-1920w.webp" ,
        sizes: "(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px",
        altText: "A wooden sailing ship with tourists in a cold environment",
        source: "/sydfjords-react/whales/whale3-480w.webp",
        caption: t("ipsumvatn.image2")
    }];

    return (
        <>
            <Navbar/>
            <main>
                <Location title={"Ipsumvatn"} blurb={t("ipsumvatn.blurb")} images={images} endParagraph={t("ipsumvatn.image2")}></Location>
            </main>
        </>
    );
}