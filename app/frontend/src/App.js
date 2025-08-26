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

      {/* ===== SERVICES SECTION (added here) ===== */}
      <section className="bg-gradient-to-r from-red-700 to-red-600 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 items-center">
          {/* Left Side - Heading */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Truth, Trust, Transparency <br /> of Beardo Capital Bank
            </h2>
            <div className="bg-white rounded-full flex items-center px-4 py-2 shadow-md mb-6">
              <input
                type="text"
                placeholder='Search for "Credit Card"'
                className="flex-1 outline-none text-gray-700"
              />
              <button className="text-red-600 font-semibold">🔍</button>
            </div>

            {/* Options */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {[
                "Accounts",
                "Cards",
                "Loans",
                "Deposits",
                "Investment",
                "Get Support",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white text-gray-800 rounded-2xl p-4 text-center shadow hover:shadow-lg cursor-pointer"
                >
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Offers */}
          <div className="grid gap-6">
            {[
              {
                title: "Credit Card",
                desc: "Complete your journey now!",
              },
              {
                title: "Home Loan",
                desc: "Get a Home Loan of up to Rs 5 crore* with quick processing",
              },
              {
                title: "Personal Loan",
                desc: "Get instant disbursement with no foreclosure charges after 12 EMIs",
              },
              {
                title: "Car Loan",
                desc: "Drive your new car with 100% on-road funding",
              },
            ].map((offer, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold">{offer.title}</h3>
                <p className="text-gray-600">{offer.desc}</p>
                <div className="flex gap-4 mt-4">
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
                    APPLY
                  </button>
                  <button className="border border-red-600 text-red-600 px-4 py-2 rounded-lg">
                    DETAILS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
