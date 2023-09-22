import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar';
import Gallery, { ImageDetails } from './components/Gallery';

function App() {
  
  
const gallery: ImageDetails[] = [{
  source: "/sydfjors-react/borealis-480w.webp",
  caption: "The aurora australis over the fjords. Nulla pharetra diam sit amet nisl suscipit adipiscing. Augue lacus viverra vitae congue eu consequat ac felis.",
  altText: "An aurora australis.",
  srcset: "/sydfjors-react/borealis-480w.webp 480w, /sydfjors-react/borealis-800w.webp 800w, /sydfjors-react/borealis-1080w.webp 1080w",
  sizes: "(max-width: 600px) 480px, (max-width: 1000px) 800px, 1080px"
},{
  source: "/sydfjors-react/town2-480w.webp",
  altText: "A collection of buildings near the water's edge, in front of a mountain",
  caption: "Coldvatn, the heart of the Sydfjords. Sed adipiscing diam donec adipiscing tristique risus nec. Risus feugiat in ante metus dictum at.",
  srcset: "/sydfjors-react/town2-480w.webp 480w, /sydfjors-react/town2-800w.webp 800w, /sydfjors-react/town2-1080w.webp 1080w",
  sizes: "(max-width: 600px) 480px, (max-width: 1000px) 800px, 1080px"
},{
  source: "/sydfjors-react/town-480w.webp",
  altText: "A town near the water's edge, with snow-capped mountains in the background",
  caption: "Coldwatvn, the heart of the Sydfjords. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at",
  srcset: "/sydfjors-react/town-480w.webp 480w, /sydfjors-react/town-800w.webp 800w, /sydfjors-react/town-1080w.webp 1080w",
  sizes: "(max-width: 600px) 480px, (max-width: 1000px) 800px, 1080px"
},{
  source: "/sydfjors-react/horses-480w.webp",
  altText: "A pair of horses",
  caption: "Tortor at auctor urna nunc id cursus metus. A pellentesque sit amet porttitor eget dolor. Tempor orci eu lobortis elementum nibh tellus.",
  srcset: "/sydfjors-react/horses-480w.webp 480w, /sydfjors-react/horses-800w.webp 800w, /sydfjors-react/horses-1080w.webp 1080w",
  sizes: "(max-width: 600px) 480px, (max-width: 1000px) 800px, 1080px"
}, ];

  return (
    <>
      <Navbar/>
      <main>
      <img id="hero" srcSet="/sydfjors-react/hero-320w.webp 320w, /sydfjors-react/hero-480w.webp 480w, /sydfjors-react/hero-800w.webp 800w, /sydfjors-react/hero-1080w.webp 1080w, /sydfjors-react/hero-1366w.webp 1366w"
        sizes="(max-width: 400px) 320px, (max-width: 600px) 480px, (max-width: 1000px) 800px, (max-width: 1366px) 1080px, (max-width: 1440px) 1366px"
        src="/sydfjors-react/hero-480w.webp"
        alt="Snowy mountains above a lake in a wild setting"/>
     <h1>Welcome to a land steeped in magic</h1>
        <Gallery images={gallery}></Gallery>
      </main>
    </>
  )
}

export default App
