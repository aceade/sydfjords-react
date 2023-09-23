import Navbar from "../components/Navbar";

export default function Travel() {

    return (
        <>
            <Navbar />
            <main>
                <h1>How to get here</h1>

                <h2>Take The Train</h2>
                <div id="trains">
                    <img className="mainImage" src="/sydfjords-react/travel/train-480.webp" alt="A steam train in the snow"
                        sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                        srcSet="/sydfjords-react/travel/train-320w.webp 320w, /sydfjords-react/travel/train-480w.webp 480w, /sydfjords-react/travel/train-800w.webp 800w, /sydfjords-react/travel/train-1080w.webp 1080w"
                    />
                    <img className="hoverImage" src="/sydfjords-react/travel/train2-480.webp" alt="A steam train travelling through forested hills"
                        sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                        srcSet="/sydfjords-react/travel/train2-320w.webp 320w, /sydfjords-react/travel/train2-480w.webp 480w, /sydfjords-react/travel/train2-800w.webp 800w, /sydfjords-react/travel/train2-1080w.webp 1080w"
                    />
                </div>
                <p>A week on the train from Tinland through the pine forests and valleys.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <h2>By Sea</h2>
                <img loading="lazy" className="defaultImage" srcSet="/sydfjords-react/whales/whale3-320w.webp 320w, /sydfjords-react/whales/whale3-480w.webp 480w, /sydfjords-react/whales/whale3-600w.webp 600w, /sydfjords-react/whales/whale3-1080w.webp 1080w, /sydfjords-react/whales/whale3-1920w.webp"
                    sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                    alt="A wooden sailing ship with tourists in a cold environment"
                    src="/sydfjords-react/whales/whale3-480w.webp" />
                <p>The traditional way. Illo ex culpa quis distinctio porro facere error. Beatae accusantium perspiciatis mollitia ex praesentium, amet ullam in, vel a soluta voluptas unde.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum hic nostrum voluptatibus illum accusamus debitis autem exercitationem ex consectetur! Officiis molestiae reiciendis voluptates repellat vero, iure fugiat soluta et?</p>

                <h2>Drive</h2>
                <img loading="lazy" className="defaultImage" srcSet="/sydfjords-react/travel/road-320w.webp 320w, /sydfjords-react/travel/road-480w.webp 480w, /sydfjords-react/travel/road-600w.webp 600w, /sydfjords-react/travel/road-1080w.webp 1080w, /sydfjords-react/travel/road-1920w.webp"
                    sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                    alt="A road through the mist"
                    src="/sydfjords-react/whales/whale3-480w.webp" />
                <p>Historically, this was only for the adventurous and experienced motorist. In recent years, the road network has been significantly improved.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla veritatis architecto optio culpa ex adipisci laudantium animi qui neque ullam. Tempora cum culpa sint possimus velit reprehenderit necessitatibus deleniti sit.</p>
            </main>
        </>
    )
}