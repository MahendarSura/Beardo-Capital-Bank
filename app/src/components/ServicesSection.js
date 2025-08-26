import React from "react";

export default function ServicesSection() {
  return (
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
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold">Credit Card</h3>
            <p className="text-gray-600">Complete your journey now!</p>
            <div className="flex gap-4 mt-4">
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
                APPLY NOW
              </button>
              <button className="border border-red-600 text-red-600 px-4 py-2 rounded-lg">
                KNOW MORE
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold">Home Loan</h3>
            <p className="text-gray-600">
              Get a Home Loan of up to Rs 5 crore* with quick processing
            </p>
            <div className="flex gap-4 mt-4">
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
                APPLY
              </button>
              <button className="border border-red-600 text-red-600 px-4 py-2 rounded-lg">
                DETAILS
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold">Personal Loan</h3>
            <p className="text-gray-600">
              Get instant disbursement with no foreclosure charges after 12 EMIs
            </p>
            <div className="flex gap-4 mt-4">
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
                APPLY
              </button>
              <button className="border border-red-600 text-red-600 px-4 py-2 rounded-lg">
                DETAILS
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold">Car Loan</h3>
            <p className="text-gray-600">
              Drive your new car with 100% on-road funding
            </p>
            <div className="flex gap-4 mt-4">
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
                APPLY
              </button>
              <button className="border border-red-600 text-red-600 px-4 py-2 rounded-lg">
                DETAILS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
