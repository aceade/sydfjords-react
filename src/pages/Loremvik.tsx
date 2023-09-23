import { ImageDetails } from "../components/ImageDetails";
import Location from "../components/Location";
import Navbar from "../components/Navbar";
import './Locations.css';

export default function Loremvik() {
    
    const images : [ImageDetails, ImageDetails] = [{
        srcset: "/sydfjords-react/horses-320w.webp 320w, /sydfjords-react/horses-480w.webp 480w, /sydfjords-react/horses-600w.webp 600w, /sydfjords-react/horses-1080w.webp 1080w, /sydfjords-react/horses-1920w.webp",
        sizes: "(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px",
        altText: "A shed half-buried in the ground",
        source: "/sydfjords-react/horses.jpg",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris a diam. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus. Eu facilisis sed odio morbi quis commodo odio. Ut consequat semper viverra nam. Lacus vestibulum sed arcu non odio euismod lacinia. Et tortor at risus viverra adipiscing at in tellus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse ultrices gravida dictum fusce ut. Nulla facilisi nullam vehicula ipsum a arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam."
    }, {
        srcset: "/sydfjords-react/hotels/waterfall-320w.webp 320w, /sydfjords-react/hotels/waterfall-480w.webp 480w, /sydfjords-react/hotels/waterfall-600w.webp 600w, /sydfjords-react/hotels/waterfall-1080w.webp 1080w, /sydfjords-react/hotels/waterfall-1920w.webp" ,
        sizes: "(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px",
        altText: "A wooden sailing ship with tourists in a cold environment",
        source: "/sydfjords-react/hotels/waterfall-480w.webp",
        caption: "Brufoss Waterfall. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit perferendis ab quasi eius, pariatur quo consequuntur eaque! Modi perferendis asperiores quaerat minus! Reiciendis, officia voluptatem eaque nesciunt pariatur beatae!"
    }];

    return (
        <>
            <Navbar/>
            <main>
                <Location title={"Loremvik"} blurb={"The horse and livestock capital"} images={images} endParagraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?"}></Location>
            </main>
        </>
    );
}