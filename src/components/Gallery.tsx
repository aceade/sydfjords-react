import { useState } from "react";
import "./Gallery.css";
import { ImageDetails } from "./ImageDetails";
import { useTranslation } from 'react-i18next';

export interface GalleryProps {
    images: ImageDetails[];
}

export default function Gallery(props: GalleryProps) {

    const [currentImage, setCurrentImage] = useState(0);
    const { t } = useTranslation();

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
                <button onClick={previousImage}>{t("buttons.lastImage")}</button>
                <button onClick={nextImage}>{t("buttons.nextImage")}</button>
            </div>
            
            <p>{props.images[currentImage].caption}</p>
            <img srcSet={props.images[currentImage].srcset} alt={props.images[currentImage].altText} src={props.images[currentImage].source} sizes={props.images[currentImage].sizes} ></img>
            
        </div>
    )
}