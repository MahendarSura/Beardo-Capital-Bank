import React from "react";

function App() {
  return (
    <div className="max-w-full font-sans bg-white">
      {/* ===== TOP RED NAVBAR ===== */}
      <header className="bg-[#E80000] text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Bank Name */}
          <div className="text-2xl md:text-3xl font-extrabold cursor-pointer">
            Beardo Capital Bank
          </div>

          {/* Menu */}
          <ul className="hidden md:flex space-x-8 font-medium">
            <li className="hover:underline cursor-pointer">Explore Products</li>
            <li className="hover:underline cursor-pointer">Grab Deal</li>
            <li className="hover:underline cursor-pointer">Make Payments</li>
            <li className="hover:underline cursor-pointer">Bank Smart</li>
            <li className="hover:underline cursor-pointer">Accounts</li>
            <li className="hover:underline cursor-pointer">Deposits</li>
            <li className="hover:underline cursor-pointer">Cards</li>
            <li className="hover:underline cursor-pointer">Loans</li>
            <li className="hover:underline cursor-pointer">Investments</li>
            <li className="hover:underline cursor-pointer">Insurance</li>
            <li className="hover:underline cursor-pointer">Special Services</li>
            <li className="hover:underline cursor-pointer">Knowledge Hub</li>
          </ul>

          {/* Login Signup */}
          <div className="font-semibold cursor-pointer hover:underline whitespace-nowrap">
            Login / Signup
          </div>
        </div>
      </header>

      {/* ===== SECOND NAV (WHITE STRIP) ===== */}
      <div className="bg-white shadow border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex space-x-8 font-semibold text-gray-700 text-sm md:text-base">
          <span className="cursor-pointer hover:text-[#E80000]">Explore Products</span>
          <span className="cursor-pointer hover:text-[#E80000]">Grab Deals</span>
          <span className="cursor-pointer hover:text-[#E80000]">Make Payments</span>
          <span className="cursor-pointer hover:text-[#E80000]">Bank Smart</span>
          <span className="cursor-pointer hover:text-[#E80000]">Unlearn</span>
        </div>
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[480px] md:h-[600px] bg-gradient-to-r from-[#E80000] to-[#B00000] flex items-center px-6 text-white my-16 w-full rounded-lg shadow-lg">
        <div className="w-full flex flex-col md:flex-row items-center gap-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl font-extrabold">Reimagining Banking for You</h1>
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

      {/* ===== SERVICES SECTION ===== */}
      <section className="bg-white shadow rounded-md p-8 grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
        {[
          {
            icon: "🏦",
            title: "Accounts",
            text: "Savings accounts, checking accounts, debit cards & more.",
          },
          {
            icon: "💳",
            title: "Credit Cards",
            text: "Credit cards with attractive rewards and benefits.",
          },
          {
            icon: "💰",
            title: "Loans",
            text: "Home loans, personal loans, and car loans with competitive rates.",
          },
          {
            icon: "📱",
            title: "Digital Banking",
            text: "Manage accounts and payments anywhere, anytime with our mobile app.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-start hover:shadow-lg cursor-pointer transition p-6 border border-gray-100 rounded"
          >
            <div className="text-5xl mb-4 text-[#E80000]">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-2 text-[#E80000]">
              {item.title}
            </h3>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      {/* ===== OFFERS SECTION ===== */}
      <section className="bg-white shadow rounded-md p-10 my-16 w-full">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-extrabold text-[#E80000]">
            Offers for You!
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Discover the best deals on credit cards, loans, and investment
            products tailored for you.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=60",
                title: "Zero Processing Fee on Home Loans",
                desc: "Apply now & save up to ₹10,000.",
              },
              {
                img: "https://images.unsplash.com/photo-1495121605193-b116b5b09e21?auto=format&fit=crop&w=400&q=60",
                title: "Earn More with Fixed Deposits",
                desc: "Attractively higher interest rates on FD.",
              },
              {
                img: "https://images.unsplash.com/photo-1556741533-f6acd647d2fb?auto=format&fit=crop&w=400&q=60",
                title: "Instant Personal Loans",
                desc: "Get funds within 24 hours at competitive rates.",
              },
            ].map((offer, i) => (
              <div
                key={i}
                className="rounded shadow hover:shadow-lg cursor-pointer overflow-hidden border border-gray-100"
              >
                <img
                  src={offer.img}
                  alt={offer.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-semibold mb-2 text-[#E80000]">
                    {offer.title}
                  </h3>
                  <p>{offer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="bg-white shadow rounded-md p-10 my-16 w-full">
        <div className="text-center space-y-10">
          <h2 className="text-4xl font-extrabold text-[#E80000]">
            What Our Customers Say
          </h2>
          <div className="space-y-10">
            {[
              {
                img: "https://randomuser.me/api/portraits/men/32.jpg",
                name: "Rajesh Kumar",
                comment:
                  "Beardo Capital Bank has transformed how I manage my finances. Their app is super easy and customer support is fantastic!",
              },
              {
                img: "https://randomuser.me/api/portraits/women/44.jpg",
                name: "Sneha Patil",
                comment:
                  "The loan process was smooth and quick. I got my funds in less than 24 hours!",
              },
              {
                img: "https://randomuser.me/api/portraits/men/45.jpg",
                name: "Aditya Sharma",
                comment:
                  "Investments made simple! The advice and tools helped me grow my portfolio confidently.",
              },
            ].map((person, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded shadow max-w-xl mx-auto text-left border border-gray-200"
              >
                <div className="flex items-center mb-4 space-x-4">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <h3 className="text-xl font-semibold text-[#E80000]">
                    {person.name}
                  </h3>
                </div>
                <p className="italic text-gray-900">"{person.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
