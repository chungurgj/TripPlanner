import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter as Router } from 'react-router-dom'
import MainRoutes from './routing/MainRoutes.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar/>
    <Router>
      <MainRoutes/>
    </Router>
    <Footer/>
  </React.StrictMode>,
)
