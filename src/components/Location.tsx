import { ImageDetails } from "./ImageDetails";
import "./Location.css";

export interface LocationProps {
    title: string;
    blurb: string;
    images: [ImageDetails, ImageDetails];
    endParagraph: string;
}

/**
 * Extract location details into a common component. Limited to a title, blurb, two images and a paragraph after them.
 * @param props 
 * @returns 
 */
export default function Location(props: LocationProps) {
    
    const firstImage = props.images[0];
    const secondImage = props.images[1];

    return (
        <>
            <h1>{props.title}</h1>
            <p className="blurb">{props.blurb}</p>

            <img src={firstImage.source} alt={firstImage.altText}
                sizes={firstImage.sizes}
                srcSet={firstImage.srcset}
            />
            <p>{firstImage.caption}</p>

            <img src={secondImage.source} alt={secondImage.altText}
                sizes={secondImage.sizes}
                srcSet={secondImage.srcset}
            />
            <p>{secondImage.caption}</p>
            <p>{props.endParagraph}</p>
        </>
    );
}