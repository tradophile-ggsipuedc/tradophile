import React from 'react'

function MagazineEmbed() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <iframe 
          allowFullScreen="allowfullscreen" 
          allow="clipboard-write" 
          scrolling="no" 
          className="fp-iframe w-full" 
          src="https://heyzine.com/flip-book/b0b129f8ef.html" 
          style={{ border: '1px solid lightgray', height: '600px' }}
          title="Tradophile Annual Magazine"
        />
      </div>
    </div>
  )
}

export default MagazineEmbed
