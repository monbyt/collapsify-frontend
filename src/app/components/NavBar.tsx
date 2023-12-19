import React from 'react'; 

const NavBar = () => {
  return (
    <header className="bg-gray-950">
      <nav className="flex w-full justify-between items-center p-6 lg:px-8">
        <div className="text-white text-4xl font-extrabold my-auto">
          Collapsify
        </div>
        <div className="hidden lg:flex items-stretch gap-5">
          <a href="#" className="text-white text-2xl">Product</a>
          <a href="#" className="text-white text-2xl">Features</a>
          <a href="#" className="text-white text-2xl">How it works</a>
        </div>
        <div className="flex items-center gap-5">
          <a href="#" className="text-white text-2xl border bg-zinc-300 bg-opacity-0 px-5 py-5 rounded-[41px] border-solid border-white">
            Join Waitlist
          </a>
          <button type="button" className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            {/* SVG and other mobile menu elements */}
          </button>
        </div>
      </nav>
      {/* Mobile menu and other elements */}
    </header>
  );
}

export default NavBar;
