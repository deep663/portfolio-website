import React from 'react'

function WhatWeDo() {
  return (
    <section id="portfolio" className="w-full bg-gray-100 py-24">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">What can we do for you?</h2>
      <p className="text-gray-600 text-lg text-center mb-10">Summary of work and statistics.</p>
      <div className="grid grid-cols-2 gap-6 mx-auto max-w-screen-lg">
        {["100+ Projects", "20+ Happy Clients"].map(stat => (
          <div key={stat} className="text-center">
            <h3 className="text-2xl font-bold text-blue-500">{stat}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhatWeDo;