import React from "react";

function App() {
  return (
    <div className="max-w-full font-sans bg-white">
      {/* ===== TOP RED STRIP ===== */}
      <header className="bg-[#A60000] text-white w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Bank Name */}
          <div className="text-xl md:text-2xl font-bold cursor-pointer">
            Beardo Capital Bank
          </div>

          {/* Menu */}
          <ul className="hidden md:flex space-x-6 font-medium text-sm">
            <li className="cursor-pointer hover:underline">Personal</li>
            <li className="cursor-pointer hover:underline">Business</li>
            <li className="cursor-pointer hover:underline">Priority</li>
            <li className="cursor-pointer hover:underline">NRI</li>
            <li className="cursor-pointer hover:underline">About Us</li>
            <li className="cursor-pointer hover:underline">Support</li>
            <li className="cursor-pointer hover:underline">Lodge a Complaint</li>
          </ul>

          {/* Login / Signup */}
          <div className="flex items-center space-x-4">
            <div className="text-sm cursor-pointer hover:underline">
              English ⌄
            </div>
            <button className="bg-white text-[#A60000] px-4 py-1 font-semibold rounded hover:bg-gray-100">
              Login / Signup
            </button>
          </div>
        </div>
      </header>

      {/* ===== SECOND WHITE STRIP ===== */}
      <div className="bg-white border-b shadow-sm w-full">
        <div className="max-w-7xl mx-auto px-6 py-3 flex space-x-8 font-semibold text-gray-700 text-sm md:text-base">
          <span className="cursor-pointer hover:text-[#A60000]">
            Explore Products
          </span>
          <span className="cursor-pointer hover:text-[#A60000]">Grab Deals</span>
          <span className="cursor-pointer hover:text-[#A60000]">
            Make Payments
          </span>
          <span className="cursor-pointer hover:text-[#A60000]">Bank Smart</span>
          <span className="cursor-pointer hover:text-[#A60000]">Unlearn</span>
        </div>
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[480px] md:h-[600px] bg-gradient-to-r from-[#E80000] to-[#B00000] flex items-center px-6 text-white my-12 w-full shadow-lg">
        <div className="w-full flex flex-col md:flex-row items-center gap-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl font-extrabold">
              Reimagining Banking for You
            </h1>
            <p className="text-xl max-w-xl">
              Seamless, secure, and personalized banking experience at Beardo
              Capital Bank. Explore our services today.
            </p>
            <div className="flex space-x-6">
              <button className="bg-white text-[#E80000] font-bold px-8 py-3 rounded hover:bg-gray-100 transition">
                Open an Account
              </button>
              <button className="border-2 border-white text-white font-bold px-8 py-3 rounded hover:bg-white hover:text-[#E80000] transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1515165562835-c48f9bb46a3d?auto=format&fit=crop&w=800&q=80"
              alt="Digital Banking"
              className="rounded shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
