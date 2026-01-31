import { useEffect, useRef, useState } from "react"
import './parallax-background.css'

const MAX_IMAGES = 491
// const IMAGES_URL = '/public/assets/background-sequence/';
const IMAGES_URL = 'https://davidstephanv5.sg-host.com/wp-content/uploads/2026/01/';
const preloadedImages = [];
let currentFrame = 0;
let lastFrameUpdate = 0
let maxScrollHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('resize', () => {
  maxScrollHeight = document.body.scrollHeight - window.innerHeight;
})
function ParallaxBackground({ children }) {

  const parallaxBackground = useRef(null);
  const [img, setImg] = useState(null);

  useEffect(() => {
    for (let i = 1; i <= MAX_IMAGES; i++) {
      const img = new Image();
      img.src = `${IMAGES_URL}imagen_${i.toString().padStart(4, '0')}.webp`;
      preloadedImages.push(img);
    }
    const updateUrl = (frame) => {
      setImg(preloadedImages[frame].src);
    }

    // console.log(preloadedImages);

    updateUrl(currentFrame);

    window.addEventListener('scroll', () => {
      if (Date.now() - lastFrameUpdate < 10) return;
      lastFrameUpdate = Date.now();

      const scrollPosition = window.scrollY;
      const scrollPercent = scrollPosition / maxScrollHeight;

      const frame = Math.floor(scrollPercent * MAX_IMAGES);

      if (currentFrame !== frame && frame <= MAX_IMAGES) {
        currentFrame = frame;
        updateUrl(currentFrame);
      }
    })
  }, [])

  return (
    <div className="parallax-background" ref={parallaxBackground}>
      <img className="parallax-img" src={img} alt="" />
      {children}
    </div>
  )
}

export default ParallaxBackground