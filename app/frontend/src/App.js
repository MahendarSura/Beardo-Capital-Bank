import React from "react";

function App() {
  return (
    <div className="max-w-full font-sans bg-white">
      {/* ===== TOP RED STRIP ===== */}
      <header className="bg-[#A60000] text-white w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="text-xl md:text-2xl font-bold cursor-pointer">
            Beardo Capital Bank
          </div>

          <ul className="hidden md:flex space-x-6 font-medium text-sm">
            <li className="cursor-pointer hover:underline">Personal</li>
            <li className="cursor-pointer hover:underline">Business</li>
            <li className="cursor-pointer hover:underline">Priority</li>
            <li className="cursor-pointer hover:underline">NRI</li>
            <li className="cursor-pointer hover:underline">About Us</li>
            <li className="cursor-pointer hover:underline">Support</li>
            <li className="cursor-pointer hover:underline">
              Lodge a Complaint
            </li>
          </ul>

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
      <section className="relative h-[520px] md:h-[600px] bg-gradient-to-r from-[#E80000] to-[#B00000] flex items-center px-6 text-white my-12 w-full shadow-lg">
        <div className="w-full flex flex-col md:flex-row items-center gap-10">
          {/* Left Side */}
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

          {/* Right Side - Home Loan Promo */}
          <div className="flex-1 hidden md:flex items-center justify-center">
            <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 max-w-sm">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                alt="Home Loan"
                className="rounded-lg shadow-md mb-4"
              />
              <h3 className="text-2xl font-bold text-[#A60000]">
                Your dream home, your pride
              </h3>
              <p className="text-gray-600 mt-2">
                Turn your dream into reality with Beardo Capital Bank Home Loan
              </p>
              <button className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-700">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="bg-gradient-to-r from-red-700 to-red-600 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 items-center">
          {/* Left Side */}
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

          {/* Right Side */}
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
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6">
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

      {/* ===== SERVICE REQUEST BOX ===== */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "🔑", text: "Password" },
              { icon: "📄", text: "Track Applications / Service Requests" },
              { icon: "🔒", text: "Smart Lock" },
              { icon: "💳", text: "Block Card" },
              { icon: "⚠️", text: "Report Fraud" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 cursor-pointer"
              >
                <span className="text-3xl">{item.icon}</span>
                <p className="font-medium text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUSTWORTHY BANKING TEXT ===== */}
      <section className="bg-white text-center py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Trustworthy Banking
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Experience transparent and seamless banking with security at every
          step.
        </p>
      </section>

      {/* ===== CREDIT CARDS SECTION ===== */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Choose Your Credit Card
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sapphiro",
                tag: "Hot Selling",
                bestFor: "Premium Lifestyle Offers",
                perks: "Lounge Access | Golf Rounds | BookMyShow Offers more",
              },
              {
                name: "Rubyx",
                tag: "Exclusive Rewards",
                bestFor: "High-End Lifestyle Perks",
                perks:
                  "Welcome vouchers | Complimentary Golf rounds | Lounge access more",
              },
              {
                name: "Coral",
                tag: "Popular",
                bestFor: "Everyday or On-The-Go Spends",
                perks: "Lounge access | BookMyShow offers | INOX offers more",
              },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6">
                <img
                  src="https://img.freepik.com/free-vector/realistic-credit-card-design_23-2149125085.jpg"
                  alt={card.name}
                  className="rounded-lg mb-4"
                />
                <span className="text-red-600 font-semibold">{card.tag}</span>
                <h3 className="text-xl font-bold">{card.name}</h3>
                <p className="text-gray-600 mt-2">BEST FOR</p>
                <p className="font-medium">{card.bestFor}</p>
                <p className="text-gray-600 mt-1">{card.perks}</p>
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
          <div className="text-center mt-6">
            <button className="text-red-600 font-semibold hover:underline">
              EXPLORE ALL CREDIT CARDS
            </button>
            <p className="text-gray-600 mt-2">
              Looking for a Business card?{" "}
              <span className="text-red-600 cursor-pointer">VIEW</span>
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-100 text-gray-700 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p>📞 1800 1080</p>
            <p className="mt-2 cursor-pointer hover:underline">Locate Us</p>
            <p className="cursor-pointer hover:underline">
              Find Branches & ATMs near you
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>Customer Care</li>
              <li>Report Unauthorized Transactions</li>
              <li>Raise a Service Request</li>
              <li>Complaints & Grievances</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>Interest Rates</li>
              <li>Service Charges and Fees</li>
              <li>FAQs</li>
              <li>Career Opportunities</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Ways to Bank</h3>
            <ul className="space-y-2">
              <li>Digital Banking</li>
              <li>Mobile Banking</li>
              <li>Internet Banking</li>
              <li>ATMs and Branches</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-500">
          © 2025 Beardo Capital Bank. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
