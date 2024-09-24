
function About() {
  return (
    <section id="about" className="bg-neutral-800 h-screen text-white pt-36 px-6 md:px-24 flex flex-col md:flex-row items-center">
      <div className="flex-1 pr-64">
        <h1 className="text-yellow-400 text-6xl font-bold mb-2">About Us</h1>
        <hr className="border-2 border-white mb-6 w-3/5"/>
        <h2 className="text-4xl font-bold mb-8">What is Binyte?</h2>
        <p className="text-gray-400 text-lg mb-4">
          Binyte is a productized service-based agency where people can get multiple services like UI/UX design, web development, and app development.
        </p>
        <p className="text-gray-400 text-lg mb-4">
          Binyte also helps you grow on social media platforms like Instagram, Twitter, etc. From video editing to post designing and targeting audiences, Binyte gives you all of these services.
        </p>
        <p className="text-gray-400 text-lg">
          It has multiple packages according to the services you need.
        </p>
      </div>
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-24 shadow-lg">
          <h1 className="text-9xl font-bold text-white">Bi</h1>
        </div>
      </div>
    </section>
  )
}

export default About