import Navbar from "../components/Navbar";
import "./Hotels.css";

export default function Hotels() {

    return (
        <>
        <Navbar/>
        <main>
        <h1>Where to Stay</h1>
        <div className="entry">
            <img src="/sydfjords-react/hotels/waterfall.jpg" alt="A cabin with a waterfall in the background"
                sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                srcSet="/sydfjords-react/hotels/waterfall-320w.webp 320w, /sydfjords-react/hotels/waterfall-480w.webp 480w, /sydfjords-react/hotels/waterfall-600w.webp 600w, /sydfjords-react/hotels/waterfall-1080w.webp 1080w, /sydfjords-react/hotels/waterfall-1920w.webp"
            />
            <div>
                <h2>Brufoss House</h2>
                <p>Loremvik</p>
                <p>Self-catering with a stunning backdrop.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatem provident corporis quasi aliquid perferendis minus expedita, amet delectus, ea sed! Voluptas a, dolore doloremque omnis ratione unde nisi quam.</p>
                <p>Tel: +5555555 28883399</p>
            </div>
        </div>
        <div className="entry">
            <img src="/sydfjords-react/hotels/turfHouse.jpg" alt="A shed half-buried in the ground"
                sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                srcSet="/sydfjords-react/hotels/turfHouse-320w.webp 320w, /sydfjords-react/hotels/turfHouse-480w.webp 480w, /sydfjords-react/hotels/turfHouse-600w.webp 600w, /sydfjords-react/hotels/turfHouse-1080w.webp 1080w, /sydfjords-react/hotels/turfHouse-1920w.webp"
            />
            <div>
                <h2>Turfdwellers</h2>
                <p>3km from Ipsumvatn</p>
                <p>Self-catering in a traditional house.</p>
                <p>Rerum veniam quasi a esse illo ab consequuntur eveniet, voluptatem in suscipit veritatis possimus ullam ea quisquam asperiores, reprehenderit velit! Autem, cum.</p>
                <p>Tel: +5555555 12346 477847474</p>
            </div>
        </div>
        <div className="entry">
            <img src="/sydfjords-react/town-480w.webp" alt="A town by the water"
                sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                srcSet="/sydfjords-react/town-320w.webp 320w, /sydfjords-react/town-480w.webp 480w, /sydfjords-react/town-600w.webp 600w, /sydfjords-react/town-1080w.webp 1080w"
            />
            <div>
                <h2>Brieborg Arms</h2>
                <p>Colwdvatn</p>
                <p>Modern living in the heart of the sydfjords-react.</p>
                <p>Aspernatur commodi eos voluptates vitae corrupti? Fugit corporis facilis excepturi similique necessitatibus dolorem, odio eum illo voluptatum quas voluptates ipsa! Rerum, quod.</p>
                <p>Tel: +5555555 12346 347838</p>
            </div>
        </div>
        </main>
        </>
    );
}