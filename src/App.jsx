import React from 'react'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import VirtualRoom from './components/VirtualRoom'
import SiteFooter from './components/SiteFooter'

function App() {
  return (
    <div className="bg-[#1A1A1A] text-[#F9F6F2] min-h-screen overflow-x-hidden">
      <Hero />
      <ProductShowcase />
      <VirtualRoom />
      <SiteFooter />
    </div>
  )
}

export default App
