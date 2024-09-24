function Footer() {
  return (
    <footer className="bg-neutral-950 text-gray-400 py-8 px-4 md:px-24">
      <div className="flex flex-col md:flex-row justify-start items-start space-x-8 md:space-y-0 text-2xl">
        <div className="flex flex-col space-y-2">
          <a href="#" className="hover:text-white">
            Contact Us
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms and Conditions
          </a>
          <a href="#" className="hover:text-white">
            FAQ
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="#" className="hover:text-white">
            Blog
          </a>
          <a href="#" className="hover:text-white">
            Partner with Us
          </a>
          <a href="#" className="hover:text-white">
            Career
          </a>
        </div>
      </div>
      <div className="mt-6 text-center md:text-right text-sm">
        All rights are reserved &copy; 2024
      </div>
    </footer>
  );
}

export default Footer;
