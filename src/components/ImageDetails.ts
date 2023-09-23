/**
 * Define image details to pass to different components
 */
export interface ImageDetails {
    source?: string;

    /**
     * Displayed if the image doesn't load, or if the user needs a screen reader.
     */
    altText: string;


    caption?: string;

    /**
     * Defines lists of sources for responsive design
     */
    srcset: string;

    /**
     * List of sizes for responsive design.
     * E.g. (max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px
     */
    sizes: string;
}