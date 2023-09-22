import { useState } from "react";

export interface ImageDetails {
    source?: string;
    altText: string;
    caption: string;
    srcset: string;
    sizes: string;
}

export interface GalleryProps {
    images: ImageDetails[];
}

export default function Gallery(props: GalleryProps) {

    const [currentImage, setCurrentImage] = useState(0);

    function previousImage() {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1);
        } else {
            setCurrentImage(props.images.length - 1);
        }
    }

    function nextImage() {
        if (currentImage < props.images.length) {
            setCurrentImage(currentImage + 1);
        } else {
            setCurrentImage(0);
        }
    }

    return (
        <div className="gallery">
            <button onClick={previousImage}>back</button>
            <img srcSet={props.images[currentImage].srcset} alt={props.images[currentImage].altText} src={props.images[currentImage].source} sizes={props.images[currentImage].sizes} ></img>
            <p>{props.images[currentImage].caption}</p>
            <button onClick={nextImage}>next</button>
        </div>
    )
}