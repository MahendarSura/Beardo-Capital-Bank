import React from "react";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen px-6 py-12 font-sans">
      {/* Container with max width and white background */}
      <div className="max-w-7xl mx-auto bg-white p-8 rounded shadow">
        
        {/* NAVBAR */}
        <nav className="flex items-center justify-between mb-12">
          {/* Left aligned Bank Name */}
          <div className="text-4xl font-extrabold text-orange-500 tracking-tight">
            Beardo Capital Bank
          </div>
          
          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-10 font-semibold text-gray-700">
            <li className="hover:text-orange-500 cursor-pointer">Explore Products</li>
            <li className="hover:text-orange-500 cursor-pointer">Grab Deal</li>
            <li className="hover:text-orange-500 cursor-pointer">Make Payments</li>
            <li className="hover:text-orange-500 cursor-pointer">Bank Smart</li>
            <li className="hover:text-orange-500 cursor-pointer">Knowledge Hub</li>
          </ul>

          {/* Login / Signup - Top Right */}
          <div className="text-blue-600 font-semibold cursor-pointer hover:underline">
            Login / Signup
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <main>
          {/* Hero Text Section */}
          <section className="mb-12 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4 text-gray-900">
              Reimagining Banking for You
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto md:mx-0">
              Seamless, secure, and personalized banking experience at Beardo Capital Bank. Explore our services today.
            </p>
            <div className="mt-6 space-x-4">
              <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition font-semibold">
                Open an Account
              </button>
              <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded hover:bg-orange-50 transition font-semibold">
                Learn More
              </button>
            </div>
          </section>

          {/* Services Section */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-12">
            <div>
              <div className="text-4xl mb-2">🏦</div>
              <h3 className="font-semibold text-xl mb-1">Accounts</h3>
              <p>Savings accounts, checking accounts, debit cards & more.</p>
            </div>
            <div>
              <div className="text-4xl mb-2">💳</div>
              <h3 className="font-semibold text-xl mb-1">Credit Cards</h3>
              <p>Credit cards with attractive rewards and benefits.</p>
            </div>
            <div>
              <div className="text-4xl mb-2">💰</div>
              <h3 className="font-semibold text-xl mb-1">Loans</h3>
              <p>Home loans, personal loans, and car loans with competitive rates.</p>
            </div>
            <div>
              <div className="text-4xl mb-2">📱</div>
              <h3 className="font-semibold text-xl mb-1">Digital Banking</h3>
              <p>Manage accounts and payments anywhere, anytime with our mobile app.</p>
            </div>
          </section>

          {/* Offers Section */}
          <section className="bg-orange-50 p-8 rounded mb-12 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6 text-orange-600">Offers for You!</h2>
            <p className="mb-3 font-semibold">Zero Processing Fee on Home Loans</p>
            <p className="mb-6">Apply now & save up to ₹10,000.</p>
            <p className="mb-3 font-semibold">Earn More with Fixed Deposits</p>
            <p className="mb-6">Attractively higher interest rates on FD.</p>
            <p className="mb-3 font-semibold">Instant Personal Loans</p>
            <p>Get funds within 24 hours at competitive rates.</p>
          </section>

          {/* Testimonials Section */}
          <section className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">What Our Customers Say</h2>
            <div className="space-y-8">
              <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700">
                <p>"Beardo Capital Bank has transformed how I manage my finances. Their app is super easy and customer support is fantastic!"</p>
                <footer className="mt-2 font-semibold text-gray-900">— Rajesh Kumar</footer>
              </blockquote>
              <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700">
                <p>"The loan process was smooth and quick. I got my funds in less than 24 hours!"</p>
                <footer className="mt-2 font-semibold text-gray-900">— Sneha Patil</footer>
              </blockquote>
              <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700">
                <p>"Investments made simple! The advice and tools helped me grow my portfolio confidently."</p>
                <footer className="mt-2 font-semibold text-gray-900">— Aditya Sharma</footer>
              </blockquote>
            </div>
          </section>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-gray-700">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Beardo Capital Bank</h3>
            <p>© 2025 Beardo Capital Bank. All rights reserved.</p>
          </div>
          <ul className="flex space-x-6 font-semibold">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
