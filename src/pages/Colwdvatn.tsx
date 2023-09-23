import { ImageDetails } from "../components/ImageDetails";
import Location from "../components/Location";
import Navbar from "../components/Navbar";
import './Locations.css';

import { useTranslation } from 'react-i18next';

export default function Colwdvatn() {

    const { t } = useTranslation();

    const images: [ImageDetails, ImageDetails] = [{
        srcset: "/sydfjords-react/town-320w.webp 320w, /sydfjords-react/town-480w.webp 480w, /sydfjords-react/town-600w.webp 600w, /sydfjords-react/town-1080w.webp 1080w, /sydfjords-react/town-1920w.webp",
        sizes: "(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px",
        altText: "A mountain town near the water",
        source: "/sydfjords-react/town.jpg",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam."
    }, {
        srcset: "/sydfjords-react/town2-320w.webp 320w, /sydfjords-react/town2-480w.webp 480w, /sydfjords-react/town2-600w.webp 600w, /sydfjords-react/town2-1080w.webp 1080w, /sydfjords-react/town2-1920w.webp",
        sizes: "(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px",
        altText: "A waterside town, framed against a mountain",
        source: "/sydfjords-react/town2-480w.webp",
        caption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit minima praesentium accusamus excepturi nemo perferendis voluptatem quo eius magnam repellat? Beatae placeat minima ratione eos voluptatum ipsam doloremque vel. Cumque."
    }];

    return (
        <>
            <Navbar />
            <main>
                <Location title={"Colwdvatn"} blurb={t("colwdvatn.blurb")} images={images} endParagraph={""} />
            </main>
        </>
    );
}