// src/App.js
import React from "react";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-sans bg-white">
      <nav className="flex items-center justify-between mb-12">
        <div className="text-5xl font-extrabold text-[#E80000] cursor-pointer">Beardo Capital Bank</div>
        <ul className="hidden md:flex space-x-10 font-semibold text-gray-700">
          <li className="hover:text-[#E80000] cursor-pointer">Explore Products</li>
          <li className="hover:text-[#E80000] cursor-pointer">Grab Deal</li>
          <li className="hover:text-[#E80000] cursor-pointer">Make Payments</li>
          <li className="hover:text-[#E80000] cursor-pointer">Bank Smart</li>
          <li className="hover:text-[#E80000] cursor-pointer">Accounts</li>
          <li className="hover:text-[#E80000] cursor-pointer">Deposits</li>
          <li className="hover:text-[#E80000] cursor-pointer">Cards</li>
          <li className="hover:text-[#E80000] cursor-pointer">Loans</li>
          <li className="hover:text-[#E80000] cursor-pointer">Investments</li>
          <li className="hover:text-[#E80000] cursor-pointer">Insurance</li>
          <li className="hover:text-[#E80000] cursor-pointer">Special Services</li>
          <li className="hover:text-[#E80000] cursor-pointer">Knowledge Hub</li>
        </ul>
        <div className="text-[#E80000] font-semibold cursor-pointer hover:underline">Login / Signup</div>
      </nav>

      <section className="text-center mt-20">
        <h1 className="text-4xl font-bold text-[#E80000]">Welcome to Beardo Capital Bank</h1>
        <p className="mt-4 text-gray-600">Banking made easy, fast, and smart.</p>
      </section>
    </div>
  );
}

export default App;

----------------------------------------------------------------------------
src
Dockerfile



# Use official node image
FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npx", "serve", "-s", "build"]

------------------------------------------------------------------------------

src
Home.jsx


import React from "react";

function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-12 font-sans bg-white">

        {/* NAVBAR */}
        <nav className="flex items-center justify-between mb-12">
          <div className="text-5xl font-extrabold text-[#E80000] cursor-pointer">Beardo Capital Bank</div>
          <ul className="hidden md:flex space-x-10 font-semibold text-gray-700">
            <li className="hover:text-[#E80000] cursor-pointer">Explore Products</li>
            <li className="hover:text-[#E80000] cursor-pointer">Grab Deal</li>
            <li className="hover:text-[#E80000] cursor-pointer">Make Payments</li>
            <li className="hover:text-[#E80000] cursor-pointer">Bank Smart</li>
            <li className="hover:text-[#E80000] cursor-pointer">Accounts</li>
            <li className="hover:text-[#E80000] cursor-pointer">Deposits</li>
            <li className="hover:text-[#E80000] cursor-pointer">Cards</li>
            <li className="hover:text-[#E80000] cursor-pointer">Loans</li>
            <li className="hover:text-[#E80000] cursor-pointer">Investments</li>
            <li className="hover:text-[#E80000] cursor-pointer">Insurance</li>
            <li className="hover:text-[#E80000] cursor-pointer">Special Services</li>
            <li className="hover:text-[#E80000] cursor-pointer">Knowledge Hub</li>
          </ul>
          <div className="text-[#E80000] font-semibold cursor-pointer hover:underline">Login / Signup</div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-[480px] md:h-[600px] bg-gradient-to-r from-[#E80000] to-[#B00000] flex items-center px-10 text-white my-16 w-full rounded-lg shadow-lg">
          <div className="w-full flex flex-col md:flex-row items-center gap-10">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-5xl font-extrabold">Reimagining Banking for You</h1>
              <p className="text-xl max-w-xl">
                Seamless, secure, and personalized banking experience at Beardo Capital Bank. Explore our services today.
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

        {/* Services Section */}
        <section className="bg-white shadow rounded-md p-8 grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
          <div className="flex flex-col items-start hover:shadow-lg cursor-pointer transition p-6 border border-gray-100 rounded">
            <div className="text-5xl mb-4 text-[#E80000]">🏦</div>
            <h3 className="text-2xl font-bold mb-2 text-[#E80000]">Accounts</h3>
            <p>Savings accounts, checking accounts, debit cards & more.</p>
          </div>
          <div className="flex flex-col items-start hover:shadow-lg cursor-pointer transition p-6 border border-gray-100 rounded">
            <div className="text-5xl mb-4 text-[#E80000]">💳</div>
            <h3 className="text-2xl font-bold mb-2 text-[#E80000]">Credit Cards</h3>
            <p>Credit cards with attractive rewards and benefits.</p>
          </div>
          <div className="flex flex-col items-start hover:shadow-lg cursor-pointer transition p-6 border border-gray-100 rounded">
            <div className="text-5xl mb-4 text-[#E80000]">💰</div>
            <h3 className="text-2xl font-bold mb-2 text-[#E80000]">Loans</h3>
            <p>Home loans, personal loans, and car loans with competitive rates.</p>
          </div>
          <div className="flex flex-col items-start hover:shadow-lg cursor-pointer transition p-6 border border-gray-100 rounded">
            <div className="text-5xl mb-4 text-[#E80000]">📱</div>
            <h3 className="text-2xl font-bold mb-2 text-[#E80000]">Digital Banking</h3>
            <p>Manage accounts and payments anywhere, anytime with our mobile app.</p>
          </div>
        </section>

        {/* Offers Section */}
        <section className="bg-white shadow rounded-md p-10 my-16 w-full">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-extrabold text-[#E80000]">Offers for You!</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Discover the best deals on credit cards, loans, and investment products tailored for you.
            </p>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="rounded shadow hover:shadow-lg cursor-pointer overflow-hidden border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=60"
                  alt="Zero Processing Fee on Home Loans"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-semibold mb-2 text-[#E80000]">Zero Processing Fee on Home Loans</h3>
                  <p>Apply now & save up to ₹10,000.</p>
                </div>
              </div>
              <div className="rounded shadow hover:shadow-lg cursor-pointer overflow-hidden border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1495121605193-b116b5b09e21?auto=format&fit=crop&w=400&q=60"
                  alt="Earn More with Fixed Deposits"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-semibold mb-2 text-[#E80000]">Earn More with Fixed Deposits</h3>
                  <p>Attractively higher interest rates on FD.</p>
                </div>
              </div>
              <div className="rounded shadow hover:shadow-lg cursor-pointer overflow-hidden border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1556741533-f6acd647d2fb?auto=format&fit=crop&w=400&q=60"
                  alt="Instant Personal Loans"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-semibold mb-2 text-[#E80000]">Instant Personal Loans</h3>
                  <p>Get funds within 24 hours at competitive rates.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white shadow rounded-md p-10 my-16 w-full">
          <div className="text-center space-y-10">
            <h2 className="text-4xl font-extrabold text-[#E80000]">What Our Customers Say</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 p-8 rounded shadow max-w-xl mx-auto text-left border border-gray-200">
                <div className="flex items-center mb-4 space-x-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Rajesh Kumar"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <h3 className="text-xl font-semibold text-[#E80000]">Rajesh Kumar</h3>
                </div>
                <p className="italic text-gray-900">
                  "Beardo Capital Bank has transformed how I manage my finances. Their app is super easy and customer support is fantastic!"
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded shadow max-w-xl mx-auto text-left border border-gray-200">
                <div className="flex items-center mb-4 space-x-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Sneha Patil"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <h3 className="text-xl font-semibold text-[#E80000]">Sneha Patil</h3>
                </div>
                <p className="italic text-gray-900">
                  "The loan process was smooth and quick. I got my funds in less than 24 hours!"
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded shadow max-w-xl mx-auto text-left border border-gray-200">
                <div className="flex items-center mb-4 space-x-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="Aditya Sharma"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <h3 className="text-xl font-semibold text-[#E80000]">Aditya Sharma</h3>
                </div>
                <p className="italic text-gray-900">
                  "Investments made simple! The advice and tools helped me grow my portfolio confidently."
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default Home;
