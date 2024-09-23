import React from 'react'

function About() {
  return (
    <section id="about" className="w-full bg-gray-100 py-24">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">What is Binyte?</h2>
      <p className="text-gray-600 text-lg text-center mb-10">Description of Binyte’s services and packages.</p>
      <div className="grid grid-cols-2 mx-auto max-w-screen-lg">
        {["Package 1", "Package 2", "Package 3", "Package 4"].map(pkg => (
          <div key={pkg} className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">{pkg}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About