import React from 'react'

function Footer() {
  return (
    <section id="contact us" className="w-full bg-gray-100 py-24">
      <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">Contact Us</h2>
        <input type="text" placeholder="Name" className="w-full mb-4 p-2 border border-gray-300 rounded-lg" />
        <input type="email" placeholder="Email" className="w-full mb-4 p-2 border border-gray-300 rounded-lg" />
        <textarea placeholder="Message" className="w-full mb-4 p-2 border border-gray-300 rounded-lg"></textarea>
        <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700">Submit</button>
      </form>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">All rights reserved @ Binyte</p>
        <div className="flex justify-center space-x-5">
          {["Privacy Policy", "Terms and Conditions"].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-blue-500">{link}</a>
          ))}
        </div>
      </footer>
    </section>
  )
}

export default Footer