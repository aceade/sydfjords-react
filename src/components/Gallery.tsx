import { useState } from "react";
import "./Gallery.css";

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
        if (currentImage < props.images.length - 1) {
            setCurrentImage(currentImage + 1);
        } else {
            setCurrentImage(0);
        }
    }

    return (
        <div className="gallery">
            <div className="controls">
                <button onClick={previousImage}>back</button>
                <button onClick={nextImage}>next</button>
            </div>
            
            <img srcSet={props.images[currentImage].srcset} alt={props.images[currentImage].altText} src={props.images[currentImage].source} sizes={props.images[currentImage].sizes} ></img>
            <p>{props.images[currentImage].caption}</p>
            
        </div>
    )
}