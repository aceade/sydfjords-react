import './App.css'

import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import { ImageDetails } from './components/ImageDetails';

function App() {
  
  
const gallery: ImageDetails[] = [{
  source: "/sydfjords-react/borealis-480w.webp",
  caption: "The aurora australis over the fjords. Nulla pharetra diam sit amet nisl suscipit adipiscing. Augue lacus viverra vitae congue eu consequat ac felis.",
  altText: "An aurora australis.",
  srcset: "/sydfjords-react/borealis-480w.webp 480w, /sydfjords-react/borealis-800w.webp 800w, /sydfjords-react/borealis-1080w.webp 1080w",
  sizes: "(max-width: 600px) 480px, (max-width: 1000px) 800px, 1080px"
},{
  source: "/sydfjords-react/town2-480w.webp",
  altText: "A collection of buildings near the water's edge, in front of a mountain",
  caption: "Coldvatn, the heart of the Sydfjords. Sed adipiscing diam donec adipiscing tristique risus nec. Risus feugiat in ante metus dictum at.",
  srcset: "/sydfjords-react/town2-480w.webp 480w, /sydfjords-react/town2-800w.webp 800w, /sydfjords-react/town2-1080w.webp 1080w",
  sizes: "(max-width: 600px) 480px, (max-width: 1000px) 800px, 1080px"
},{
  source: "/sydfjords-react/town-480w.webp",
  altText: "A town near the water's edge, with snow-capped mountains in the background",
  caption: "Coldwatvn, the heart of the Sydfjords. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at",
  srcset: "/sydfjords-react/town-480w.webp 480w, /sydfjords-react/town-800w.webp 800w, /sydfjords-react/town-1080w.webp 1080w",
  sizes: "(max-width: 600px) 480px, (max-width: 1000px) 800px, 1080px"
},{
  source: "/sydfjords-react/horses-480w.webp",
  altText: "A pair of horses",
  caption: "Tortor at auctor urna nunc id cursus metus. A pellentesque sit amet porttitor eget dolor. Tempor orci eu lobortis elementum nibh tellus.",
  srcset: "/sydfjords-react/horses-480w.webp 480w, /sydfjords-react/horses-800w.webp 800w, /sydfjords-react/horses-1080w.webp 1080w",
  sizes: "(max-width: 600px) 480px, (max-width: 1000px) 800px, 1080px"
}, ];

  return (
    <>
      <Navbar/>
      <main>
      <img id="hero" srcSet="/sydfjords-react/hero-320w.webp 320w, /sydfjords-react/hero-480w.webp 480w, /sydfjords-react/hero-800w.webp 800w, /sydfjords-react/hero-1080w.webp 1080w, /sydfjords-react/hero-1366w.webp 1366w"
        sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, (max-width: 1000px) 800px, (max-width: 1366px) 1080px, (max-width: 1440px) 1366px"
        src="/sydfjords-react/hero-480w.webp"
        alt="Snowy mountains above a lake in a wild setting"/>
     <h1>Welcome to a land steeped in magic</h1>
        <Gallery images={gallery}></Gallery>
      </main>
    </>
  )
}

export default App
