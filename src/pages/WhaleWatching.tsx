import Navbar from "../components/Navbar";
import "./Whales.css";

export default function WhaleWatching() {

    return (
        <>
            <Navbar />
            <main>
                <h1>Whale watching tours</h1>
                <p className="blurb">Few wildlife encounters can match coming face-to-face with a whale. The perfect family day out or bucket list entry.</p>

                <div className="showcase">
                    <img loading="lazy" className="defaultImage" srcSet="/sydfjords-react/whales/whale-320w.webp 320w, /sydfjords-react/whales/whale-480w.webp 480w, /sydfjords-react/whales/whale-600w.webp 600w, /sydfjords-react/whales/whale-1080w.webp 1080w, /sydfjords-react/whales/whale-1920w.webp"
                        sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                        alt="A humpback whale breaching"
                        src="/sydfjords-react/whales/whale-480w.webp" />
                    <div>
                        <p>The bumpback whale is one of the most prevalent and majestic species in these waters.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, architecto fugiat. Dolorem voluptates sed velit, cupiditate error ad natus dicta temporibus sapiente. Natus dignissimos sint dolorum porro, esse sequi vero!</p>
                        <p>Facere cumque voluptatum fugit, est magni mollitia adipisci placeat explicabo hic repellendus at. Placeat itaque nostrum cumque, quidem ex vel voluptates nisi?</p>
                    </div>
                </div>
                <div className="showcase">
                    <img loading="lazy" className="defaultImage" srcSet="/sydfjords-react/whales/whale2-320w.webp 320w, /sydfjords-react/whales/whale2-480w.webp 480w, /sydfjords-react/whales/whale2-600w.webp 600w, /sydfjords-react/whales/whale2-1080w.webp 1080w, /sydfjords-react/whales/whale2-1920w.webp"
                        sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                        alt="A humpback whale breaching"
                        src="/sydfjords-react/whales/whale2-480w.webp" />
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas maxime nulla in, fugiat, ratione iure commodi voluptas sapiente impedit aspernatur iste? Animi quas nam quis culpa blanditiis rerum corporis.</p>
                        <p>Lenetur at eos aliquam, nesciunt, adipisci libero dolores qui blanditiis debitis minima nostrum, vel voluptatum. Quibusdam ex officia saepe, excepturi sunt blanditiis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A inventore sequi, nemo dolores quia eaque aliquid deserunt nam quae aut unde voluptate, vitae saepe perferendis sunt culpa ipsum suscipit ab?</p>
                    </div>
                </div>
                <div className="showcase">
                    <img loading="lazy" className="defaultImage" srcSet="/sydfjords-react/whales/whale3-320w.webp 320w, /sydfjords-react/whales/whale3-480w.webp 480w, /sydfjords-react/whales/whale3-600w.webp 600w, /sydfjords-react/whales/whale3-1080w.webp 1080w, /sydfjords-react/whales/whale3-1920w.webp"
                        sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, max-width: 800px) 600px, 1080px"
                        alt="A wooden sailing ship with tourists in a cold environment"
                        src="/sydfjords-react/whales/whale3-480w.webp" />
                    <div>
                        <p>The lorthik, a traditional sailing vessel from the region, is now the premier way to watch these noble creatures.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas maxime nulla in, fugiat, ratione iure commodi voluptas sapiente impedit aspernatur iste? Animi quas nam quis culpa blanditiis rerum corporis.</p>
                        <p>Dicta impedit nihil, fuga consectetur quidem quae soluta iure aliquam debitis modi itaque id quibusdam sapiente! Quos aspernatur quas sequi molestias reprehenderit.</p>
                        <p>Odio fugiat, voluptas consectetur delectus nulla expedita accusamus dicta esse rerum provident ipsum nostrum animi enim dolorem perferendis nisi? Officiis, asperiores aut.</p>
                    </div>
                </div>

                <h2>Where can I do this?</h2>
                <p>Tours depart from Colwdvatn and Ipsemvatn during the summer months (December to March).</p>
            </main>
        </>
    );
}