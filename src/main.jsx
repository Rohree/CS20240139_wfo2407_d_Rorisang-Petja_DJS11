import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PodcastProvider } from "./context/ShowContext.jsx";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PodcastProvider>
       <App />
    </PodcastProvider>
  </StrictMode>,
)
