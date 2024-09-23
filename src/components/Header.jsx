import React from 'react'

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full h-20 bg-gray-700 flex items-center px-4">
            <div className="text-white font-bold text-2xl ml-2">
                <span className='text-yellow-300'>B</span>inyte
            </div>
            <nav className="flex space-x-8 m-auto">
                {["Home", "Portfolio", "Contact Us", "About"].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-slate-300 text-lg font-semibold hover:text-yellow-300 transition-colors active:text-white"
                    >
                        {item}
                    </a>
                ))}
            </nav>
            <button className="ml-auto bg-yellow-400 text-white font-semibold rounded-md px-4 py-1 hover:bg-yellow-500">
                Log In
            </button>
        </header>
    )
}

export default Header