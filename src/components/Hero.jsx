import React from 'react'

function Hero() {
  return (
    <main id="home" className="flex flex-col items-center pt-24 bg-white">
      <div className="text-center">
        <h1 className="text-3xl font-medium text-gray-800 mb-5">Hey everyone, thanks for visiting our website.</h1>
        <p className="text-gray-600 text-lg mb-20">Binyte.co is a multi-service agency offering website design, development, video editing, and social media growth for brands and companies.</p>
      </div>
      <section className="w-full mb-20">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">Services</h2>
        <div className="grid grid-cols-2 gap-6 mx-auto max-w-screen-lg">
          {["Web Design", "Development", "Hosting", "Social Media Management"].map(service => (
            <div key={service} className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">{service}</h3>
              <p className="text-gray-600">Description for {service}.</p>
              <button className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700">Know More</button>
            </div>
          ))}
        </div>
      </section>
      <div className="flex space-x-5 mb-20">
        {["Twitter", "Instagram", "Email", "LinkedIn"].map((icon) => (
          <a key={icon} href={`#${icon.toLowerCase()}`} className="text-blue-500 hover:text-blue-700">
            {/* Replace with actual icons */}
            <span className="text-2xl">{icon}</span>
          </a>
        ))}
      </div>
    </main>
  )
}

export default Hero