import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ParallaxBackground from './components/parallax-background/ParallaxBackground.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ParallaxBackground>
      <App />
    </ParallaxBackground>
  </StrictMode>,
)
