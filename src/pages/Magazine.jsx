import React from 'react'
import MagazineEmbed from '../components/MagazineEmbed'

function Magazine() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Annual Magazine
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our latest insights, stories, and achievements in the world of trading and finance.
          </p>
        </div>

        {/* Magazine Embed */}
        <MagazineEmbed />

        {/* Additional Info Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Use the controls to flip through pages, zoom in/out, and explore our magazine.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Magazine
