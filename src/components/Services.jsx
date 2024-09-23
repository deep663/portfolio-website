import React from 'react'

function Services() {

  return (
    <section id="servises" className="w-full py-24 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-3 gap-6 mx-auto max-w-screen-lg">
        {["App Design", "Social Media", "Web Design", "UI/UX Design", "App Development", "Website Development"].map(service => (
          <div key={service} className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800">{service}</h3>
            <p className="text-gray-600">Description for {service}.</p>
            <button className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700">Know More</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services