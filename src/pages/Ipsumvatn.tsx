import { ImageDetails } from "../components/ImageDetails";
import Location from "../components/Location";
import Navbar from "../components/Navbar";
import './Locations.css';

export default function Ipsumvatn() {

    const images : [ImageDetails, ImageDetails] = [{
        srcset: "/sydfjords-react/hotels/turfHouse-320w.webp 320w, /sydfjords-react/hotels/turfHouse-480w.webp 480w, /sydfjords-react/hotels/turfHouse-600w.webp 600w, /sydfjords-react/hotels/turfHouse-1080w.webp 1080w, /sydfjords-react/hotels/turfHouse-1920w.webp",
        sizes: "(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px",
        altText: "A shed half-buried in the ground",
        source: "/sydfjords-react/hotels/turfHouse.jpg",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam."
    }, {
        srcset: "/sydfjords-react/whales/whale3-320w.webp 320w, /sydfjords-react/whales/whale3-480w.webp 480w, /sydfjords-react/whales/whale3-600w.webp 600w, /sydfjords-react/whales/whale3-1080w.webp 1080w, /sydfjords-react/whales/whale3-1920w.webp" ,
        sizes: "(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px",
        altText: "A wooden sailing ship with tourists in a cold environment",
        source: "/sydfjords-react/whales/whale3-480w.webp",
        caption: "Illo ex culpa quis distinctio porro facere error. Beatae accusantium perspiciatis mollitia ex praesentium, amet ullam in, vel a soluta voluptas unde."
    }];

    return (
        <>
            <Navbar/>
            <main>
                <Location title={"Ipsumvatn"} blurb={"Gateway to Brieborg"} images={images} endParagraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?"}></Location>
            </main>
        </>
    );
}