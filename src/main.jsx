import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ParallaxBackground from './components/parallax-background/ParallaxBackground.jsx'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import TourDescription from './components/tour-description/TourDescription.jsx'
import RoadDetails from './components/road-details/RoadDetails.jsx'
import LogisticsDetails from './components/logistics-details/LogisticsDetails.jsx'
import RaceDetails from './components/race-details/RaceDetails.jsx'
import GeneralRules from './components/general-rules/GeneralRules.jsx'
import ClosingWords from './components/closing-words/ClosingWords.jsx'
import RouteDetails from './components/route-details/RouteDetails.jsx'
import Hero from './components/hero/Hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <ParallaxBackground>
      <main>
        <Hero />
        <TourDescription />
        <RoadDetails />
        <RouteDetails />
        <RaceDetails />
        <LogisticsDetails />
        <GeneralRules />
        <ClosingWords />
      </main>
    </ParallaxBackground>
    <Footer />
  </StrictMode>
)
